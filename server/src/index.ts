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

const app = express();

app.use(cookieParser());
app.use(
	cors({
		origin: process.env.FRONTEND_URL,
		credentials: true,
	})
);
app.use(express.json());
app.use(passport.initialize());

app.use("/public", express.static(path.join(__dirname, "public")));

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
		console.info(`Server is running at http://localhost:${PORT}`);
	} catch (error) {
		console.error("❌ Failed to connect to database:", error);
		process.exit(1);
	}
});

export default app;
