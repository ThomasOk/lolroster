import { desc, eq } from "drizzle-orm";
import { db } from "../../db";
import {
	playersTable,
	NewPlayer,
	Player,
	PlayerRole,
	PlayerRegion,
	PlayerStatus,
} from "@/db/schema/players";

export const getAllPlayers = async (): Promise<Player[]> => {
	return await db
		.select()
		.from(playersTable)
		.orderBy(desc(playersTable.createdAt));
};

export const getPlayerById = async (id: number): Promise<Player | null> => {
	const result = await db
		.select()
		.from(playersTable)
		.where(eq(playersTable.id, id));
	return result[0] || null;
};

export const createPlayer = async (newPlayer: NewPlayer): Promise<Player> => {
	const playerData = {
		...newPlayer,
		role: newPlayer.role as keyof typeof PlayerRole,
		region: newPlayer.region as keyof typeof PlayerRegion,
		status: newPlayer.status as keyof typeof PlayerStatus,
	};
	const result = await db.insert(playersTable).values(playerData).returning();
	return result[0];
};

export const updatePlayer = async (
	id: number,
	updateData: Partial<NewPlayer>
): Promise<Player | null> => {
	const playerData = {
		...updateData,
		role: updateData.role as keyof typeof PlayerRole | undefined,
		region: updateData.region as keyof typeof PlayerRegion | undefined,
		status: updateData.status as keyof typeof PlayerStatus | undefined,
		updatedAt: new Date(),
	};

	const result = await db
		.update(playersTable)
		.set(playerData)
		.where(eq(playersTable.id, id))
		.returning();
	return result[0] || null;
};

export const deletePlayer = async (id: number): Promise<boolean> => {
	const result = await db
		.delete(playersTable)
		.where(eq(playersTable.id, id))
		.returning();
	return result.length > 0;
};
