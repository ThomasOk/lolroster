import express from "express";
import cors from "cors";
import playerRoutes from "@/api/players/players-routes";
import { errorHandler } from "@/middleware/error";
import { db } from "@/db";
import { playersTable } from "@/db/schema/players";

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/players", playerRoutes);

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
