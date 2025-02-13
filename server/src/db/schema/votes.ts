import {
	pgTable,
	serial,
	integer,
	varchar,
	timestamp,
	uniqueIndex,
} from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";
import { usersTable } from "@/db/schema/users";
import { matchupsTable } from "@/db/schema/matchups";

export const votesTable = pgTable(
	"votes",
	{
		id: serial("id").primaryKey(),
		userId: integer("user_id")
			.references(() => usersTable.id)
			.notNull(),
		matchupId: integer("matchup_id")
			.references(() => matchupsTable.id)
			.notNull(),
		team: varchar("team", { length: 10 }).notNull(),
		createdAt: timestamp("created_at").defaultNow(),
	},
	(table) => {
		return {
			// Prevent multiple votes from same user on the same matchup
			userMatchupUnique: uniqueIndex("user_matchup_unique_idx").on(
				table.userId,
				table.matchupId
			),
		};
	}
);

export const insertVoteSchema = createInsertSchema(votesTable);
export const selectVoteSchema = createSelectSchema(votesTable);

export type Vote = z.infer<typeof selectVoteSchema>;
export type NewVote = z.infer<typeof insertVoteSchema>;
