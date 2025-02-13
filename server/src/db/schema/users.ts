import {
	pgTable,
	serial,
	varchar,
	timestamp,
	integer,
} from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

export const usersTable = pgTable("users", {
	id: serial("id").primaryKey(),
	email: varchar("email", { length: 255 }).unique(),
	username: varchar("username", { length: 255 }).unique(),
	displayName: varchar("display_name", { length: 255 }),
	refreshTokenVersion: integer("refresh_token_version").default(1).notNull(),
	//passwordHash: varchar("password_hash", { length: 255 }).notNull(),
	createdAt: timestamp("created_at").defaultNow(),
	updatedAt: timestamp("updated_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(usersTable);
export const selectUserSchema = createSelectSchema(usersTable);
export const updateDisplayNameSchema = z.object({
	displayName: z.string().min(2).max(25),
});

export type User = z.infer<typeof selectUserSchema>;
export type NewUser = z.infer<typeof insertUserSchema>;
