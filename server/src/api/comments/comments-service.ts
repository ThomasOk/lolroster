import { db } from "@/db";
import { commentsTable } from "@/db/schema/comments";
import { eq, and, desc } from "drizzle-orm";

export const getMatchupComments = async (matchupId: number) => {
	return await db
		.select({
			id: commentsTable.id,
			content: commentsTable.content,
			userId: commentsTable.userId,
			matchupId: commentsTable.matchupId,
			parentId: commentsTable.parentId,
			createdAt: commentsTable.createdAt,
		})
		.from(commentsTable)
		.where(eq(commentsTable.matchupId, matchupId))
		.orderBy(desc(commentsTable.createdAt));
};

export const createComment = async (
	userId: number,
	matchupId: number,
	content: string,
	parentId?: number
) => {
	const result = await db
		.insert(commentsTable)
		.values({
			userId,
			matchupId,
			content,
			parentId,
		})
		.returning();

	return result[0];
};

export const deleteComment = async (userId: number, commentId: number) => {
	const result = await db
		.delete(commentsTable)
		.where(
			and(eq(commentsTable.id, commentId), eq(commentsTable.userId, userId))
		)
		.returning();

	return result[0];
};
