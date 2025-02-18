import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";
import { logger } from "@/utils/logger";
const pool = new Pool({
	connectionString: process.env.DATABASE_URL,
	max: process.env.NODE_ENV === "production" ? 20 : 10,
	idleTimeoutMillis: 30000,
	connectionTimeoutMillis: 2000,
	ssl:
		process.env.NODE_ENV === "production"
			? { rejectUnauthorized: false }
			: undefined,
});

// pool.on("error", (err) => {
// 	logger.error("Unexpected error on idle client", err);
// 	process.exit(-1);
// });

// pool.on("connect", () => {
// 	logger.info("New database connection established");
// });

// // Add some basic metrics
// pool.on("acquire", () => {
// 	logger.debug(
// 		`Database connection acquired. Total: ${pool.totalCount}, Idle: ${pool.idleCount}, Waiting: ${pool.waitingCount}`
// 	);
// });

export const db = drizzle(pool, { schema });

process.on("SIGTERM", async () => {
	logger.info("SIGTERM received, closing database pool...");
	await pool.end();
	logger.info("Database pool closed.");
	process.exit(0);
});
