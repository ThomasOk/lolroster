import { Request, Response } from "express";
import { db } from "../db";
import { logger } from "@/utils/logger";
import { sql } from "drizzle-orm";

export const healthCheck = async (req: Request, res: Response) => {
	try {
		// Check database connection
		await db.execute(sql`SELECT 1`);

		const healthData = {
			uptime: process.uptime(),
			timestamp: Date.now(),
			database: "healthy",
			message: "OK",
		};

		res.status(200).json(healthData);
	} catch (error) {
		logger.error("Health check failed:", error);

		const unhealthyData = {
			uptime: process.uptime(),
			timestamp: Date.now(),
			database: "unhealthy",
			message: "ERROR",
			error: error instanceof Error ? error.message : "Unknown error",
		};

		res.status(503).json(unhealthyData);
	}
};
