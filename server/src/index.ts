import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import passport from "passport";
import playerRoutes from "@/api/players/players-routes";
import matchupsRoutes from "@/api/matchups/matchups-routes";
import votesRoutes from "@/api/votes/votes-routes";
import commentsRoutes from "@/api/comments/comments-routes";
import authRoutes from "@/api/auth/auth-routes";
import userRoutes from "@/api/users/users-routes";
import { errorHandler } from "@/middleware/error";
import { db } from "@/db";
import { playersTable } from "@/db/schema/players";
import path from "path";
import helmet from "helmet";
import compression from "compression";
import rateLimit from "express-rate-limit";

const app = express();

// Security Middleware
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(compression());

// Rate Limiting
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per windowMs
	message: "Too many requests from this IP, please try again later.",
});
app.use("/api/", limiter);

const corsOptions = {
	origin:
		process.env.NODE_ENV === "production"
			? process.env.FRONTEND_URL
			: "http://localhost:5173",
	credentials: true,
	methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
	allowedHeaders: ["Content-Type", "Authorization"],
	exposedHeaders: ["set-cookie"],
	maxAge: 86400,
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use(passport.initialize());

app.use(
	"/public",
	express.static(path.join(__dirname, "public"), {
		maxAge: process.env.NODE_ENV === "production" ? "1d" : 0,
	})
);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/players", playerRoutes);
app.use("/api/matchups", matchupsRoutes);
app.use("/api/votes", votesRoutes);
app.use("/api/comments", commentsRoutes);

// Error handling
app.use(errorHandler);

const PORT = process.env.PORT || 3001;

app.listen(PORT, async () => {
	try {
		await db.select().from(playersTable).limit(1);
		console.info("✅ Database connected successfully");

		const playersCount = await db.select().from(playersTable).limit(1);

		if (playersCount.length === 0) {
			console.info("⚠️ Players table is empty, seeding database...");
			try {
				// Importer et exécuter le seed
				const { seed } = await import("@/db/seed");
				await seed();
				console.info("✅ Database seeded successfully");
			} catch (seedError) {
				console.error("❌ Seeding failed:", seedError);
				process.exit(1);
			}
		} else {
			console.info("✅ Database already contains data");
		}

		console.info(`Server is running at http://localhost:${PORT}`);
	} catch (error) {
		console.error("❌ Failed to connect to database:", error);
		process.exit(1);
	}
});

export default app;
