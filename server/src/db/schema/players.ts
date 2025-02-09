import {
	pgTable,
	serial,
	varchar,
	date,
	boolean,
	integer,
	timestamp,
} from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

export const PlayerRole = {
	TOP: "TOP",
	JUNGLE: "JUNGLE",
	MID: "MID",
	BOT: "BOT",
	SUPPORT: "SUPPORT",
} as const;

export const PlayerStatus = {
	ACTIVE: "ACTIVE",
	INACTIVE: "INACTIVE",
	RETIRED: "RETIRED",
	SUBSTITUTE: "SUBSTITUTE",
} as const;

export const PlayerRegion = {
	EU: "EU",
	NA: "NA",
	KR: "KR",
	CN: "CN",
	VN: "VN",
	TW: "TW",
} as const;

export const playersTable = pgTable("players", {
	id: serial("id").primaryKey(),
	pseudo: varchar("pseudo", { length: 255 }).notNull().unique(),
	firstName: varchar("first_name", { length: 255 }),
	lastName: varchar("last_name", { length: 255 }),
	birthDate: date("birth_date", { mode: "date" }),
	country: varchar("country", { length: 2 }), // ISO country code
	role: varchar("role", { length: 10 })
		.$type<keyof typeof PlayerRole>()
		.notNull(),
	imagePath: varchar("image_path", { length: 255 }),
	leaguepediaUrl: varchar("leaguepedia_url", { length: 255 }),
	team: varchar("team", { length: 255 }),
	region: varchar("region", { length: 2 })
		.$type<keyof typeof PlayerRegion>()
		.notNull(),
	status: varchar("status", { length: 20 })
		.$type<keyof typeof PlayerStatus>()
		.notNull(),
	createdAt: timestamp("created_at").defaultNow(),
	updatedAt: timestamp("updated_at").defaultNow(),
	isActive: boolean("is_active").default(true),
});

// Drizzle-generated schemas
export const insertPlayerSchema = createInsertSchema(playersTable);
export const selectPlayerSchema = createSelectSchema(playersTable);

// Types
export type Player = z.infer<typeof selectPlayerSchema>;
export type NewPlayer = z.infer<typeof insertPlayerSchema>;
export type PlayerUpdate = Partial<NewPlayer>;
