import { migrate } from "drizzle-orm/node-postgres/migrator";
import { db } from "../db";
import { logger } from "../utils/logger";
import { sql } from "drizzle-orm";

const runMigrations = async () => {
	logger.info("Starting database migrations...");

	try {
		// Ensure migrations table exists
		await db.execute(sql`
      CREATE TABLE IF NOT EXISTS migrations (
        id serial PRIMARY KEY,
        name varchar(255) NOT NULL,
        executed_at timestamp DEFAULT CURRENT_TIMESTAMP
      );
    `);

		// Run migrations
		await migrate(db, {
			migrationsFolder: "./drizzle/migrations",
		});

		logger.info("Migrations completed successfully");
		process.exit(0);
	} catch (error) {
		logger.error("Migration failed:", error);
		process.exit(1);
	}
};

runMigrations();
