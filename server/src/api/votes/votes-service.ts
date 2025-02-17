import { db } from "@/db";
import { votesTable } from "@/db/schema/votes";
import { matchupsTable } from "@/db/schema/matchups";
import { eq, and } from "drizzle-orm";
import { sql } from "drizzle-orm";
import { AppError } from "@/utils/error";
import { StatusCodes } from "http-status-codes";

export const getUserVote = async (userId: number, matchupId: number) => {
	const vote = await db
		.select()
		.from(votesTable)
		.where(
			and(eq(votesTable.userId, userId), eq(votesTable.matchupId, matchupId))
		)
		.limit(1);

	return vote[0];
};

export const hasUserVoted = async (
	userId: number,
	matchupId: number
): Promise<boolean> => {
	const vote = await getUserVote(userId, matchupId);
	return vote !== undefined;
};

export const createVote = async (
	userId: number,
	matchupId: number,
	team: "blue" | "red"
) => {
	const hasVoted = await hasUserVoted(userId, matchupId);
	if (hasVoted) {
		throw new AppError(
			StatusCodes.BAD_REQUEST,
			`You have already voted for this matchup`
		);
	}

	const result = await db.transaction(async (tx) => {
		await tx.insert(votesTable).values({
			userId,
			matchupId,
			team,
		});

		const updatedMatchup = await tx
			.update(matchupsTable)
			.set(
				team === "blue"
					? { blueVotes: sql`${matchupsTable.blueVotes} + 1` }
					: { redVotes: sql`${matchupsTable.redVotes} + 1` }
			)
			.where(eq(matchupsTable.id, matchupId))
			.returning();

		return updatedMatchup[0];
	});

	return result;
};
