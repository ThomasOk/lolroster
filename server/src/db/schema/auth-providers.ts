import {
	pgTable,
	serial,
	varchar,
	timestamp,
	integer,
	uniqueIndex,
	jsonb,
} from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";
import { usersTable } from "@/db/schema/users";

export const authProvidersTable = pgTable(
	"auth_providers",
	{
		id: serial("id").primaryKey(),
		userId: integer("user_id")
			.references(() => usersTable.id)
			.notNull(),
		provider: varchar("provider", { length: 50 }).notNull(),
		providerId: varchar("provider_id", { length: 255 }).notNull(),
		providerData: jsonb("provider_data"),
		createdAt: timestamp("created_at").defaultNow(),
		updatedAt: timestamp("updated_at").defaultNow(),
	},
	(table) => ({
		providerIdIdx: uniqueIndex("provider_id_idx").on(
			table.provider,
			table.providerId
		),
	})
);

export const insertAuthProviderSchema = createInsertSchema(authProvidersTable);
export const selectAuthProviderSchema = createSelectSchema(authProvidersTable);

export type AuthProvider = z.infer<typeof selectAuthProviderSchema>;
export type NewAuthProvider = z.infer<typeof insertAuthProviderSchema>;
