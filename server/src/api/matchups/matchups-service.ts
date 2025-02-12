import { db } from "@/db";
import { matchupsTable } from "@/db/schema/matchups";
import { eq, inArray, sql } from "drizzle-orm";
import { generateRandomTeam } from "@/api/matchups/utils";
import { Player, playersTable } from "@/db/schema/players";

export const getDailyMatchup = async () => {
	const matchup = await db
		.select()
		.from(matchupsTable)
		.orderBy(sql`created_at DESC`)
		.limit(1);

	const lastMatchup = matchup[0];

	if (!lastMatchup || isNewDayNeeded(lastMatchup.createdAt)) {
		return await generateNewDailyMatch();
	}

	return lastMatchup;
};

const isNewDayNeeded = (lastMatchupDate: Date | null): boolean => {
	if (!lastMatchupDate) return true;

	const now = new Date();
	const lastMatchup = lastMatchupDate;

	return (
		now.getUTCFullYear() !== lastMatchup.getUTCFullYear() ||
		now.getUTCMonth() !== lastMatchup.getUTCMonth() ||
		now.getUTCDate() !== lastMatchup.getUTCDate()
	);
};

const generateNewDailyMatch = async () => {
	const allPlayers = await db.select().from(playersTable);

	const team1 = generateRandomTeam(allPlayers);
	const team2 = generateRandomTeam(allPlayers, team1);

	const newMatch = await db
		.insert(matchupsTable)
		.values({
			team1: team1.map((p: Player) => p.id),
			team2: team2.map((p: Player) => p.id),
			blueVotes: 0,
			redVotes: 0,
		})
		.returning();

	return newMatch[0];
};

export const updateVotes = async (matchId: number, team: "blue" | "red") => {
	try {
		console.log("Service - Updating votes for:", matchId, team);

		const result = await db
			.update(matchupsTable)
			.set(
				team === "blue"
					? { blueVotes: sql`${matchupsTable.blueVotes} + 1` }
					: { redVotes: sql`${matchupsTable.redVotes} + 1` }
			)
			.where(eq(matchupsTable.id, matchId))
			.returning();

		console.log("Service - Update result:", result);
		return result;
	} catch (error) {
		console.error("Service - Error updating votes:", error);
		throw error;
	}
};

export const getTeamPlayers = async (
	playerIds: number[]
): Promise<Player[]> => {
	if (!playerIds.length) return [];

	const players = await db
		.select()
		.from(playersTable)
		.where(inArray(playersTable.id, playerIds));

	return playerIds
		.map((id) => players.find((player) => player.id === id))
		.filter(
			(player): player is NonNullable<typeof player> => player !== undefined
		) as Player[];
};
