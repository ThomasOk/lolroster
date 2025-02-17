import {
	pgTable,
	serial,
	integer,
	text,
	timestamp,
	AnyPgColumn,
} from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";
import { usersTable } from "@/db/schema//users";
import { matchupsTable } from "@/db/schema/matchups";

export const commentsTable = pgTable("comments", {
	id: serial("id").primaryKey(),
	userId: integer("user_id")
		.references(() => usersTable.id)
		.notNull(),
	matchupId: integer("matchup_id")
		.references(() => matchupsTable.id)
		.notNull(),
	parentId: integer("parent_id").references(
		(): AnyPgColumn => commentsTable.id
	),
	content: text("content").notNull(),
	createdAt: timestamp("created_at").defaultNow(),
	updatedAt: timestamp("updated_at").defaultNow(),
});

export const insertCommentSchema = createInsertSchema(commentsTable);
export const selectCommentSchema = createSelectSchema(commentsTable);
export const createCommentSchema = z.object({
	matchupId: z.number(),
	content: z.string().min(1).max(1000),
	parentId: z.number().optional(),
});

export type Comment = z.infer<typeof selectCommentSchema>;
export type NewComment = z.infer<typeof insertCommentSchema>;
