import { db } from "@/db";
import { eq } from "drizzle-orm";
import { usersTable } from "@/db/schema/users";

export const updateDisplayName = async (
	userId: number,
	displayName: string
) => {
	const result = await db
		.update(usersTable)
		.set({
			displayName,
			updatedAt: new Date(),
		})
		.where(eq(usersTable.id, userId))
		.returning();

	return result[0];
};

export const getUserById = async (userId: number) => {
	const result = await db
		.select()
		.from(usersTable)
		.where(eq(usersTable.id, userId))
		.limit(1);

	return result[0];
};
