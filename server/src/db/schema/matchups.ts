import { pgTable, serial, timestamp, integer, json } from "drizzle-orm/pg-core";
import { playersTable } from "./players";

export const matchupsTable = pgTable("matchups", {
	id: serial("id").primaryKey(),
	team1: json("team1").$type<number[]>().notNull(),
	team2: json("team2").$type<number[]>().notNull(),
	createdAt: timestamp("created_at").defaultNow(),
	blueVotes: integer("blue_votes").default(0),
	redVotes: integer("red_votes").default(0),
});

// export const matchupsTable = pgTable('matchups', {
//   id: serial('id').primaryKey(),
//   team1: json('team1').$type<number[]>().notNull(),
//   team2: json('team2').$type<number[]>().notNull(),
//   status: varchar('status', { length: 20 }).default('active'),
//   createdAt: timestamp('created_at').defaultNow(),
//   endedAt: timestamp('ended_at')
//   // Suppression de blueVotes et redVotes car maintenant géré par la table votes
// });
