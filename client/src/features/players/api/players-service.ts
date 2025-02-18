import players from "../mocks/players-data";
import { Player } from "../types/player-types";

const MOCK_DELAY = 100;

export const PlayerService = {
	getPlayers: async (): Promise<Player[]> => {
		return new Promise((resolve) => {
			setTimeout(() => resolve(players), MOCK_DELAY);
		});
	},

	getPlayerByPseudo: async (pseudo: string): Promise<Player | undefined> => {
		return new Promise((resolve) => {
			setTimeout(() => {
				const player = players.find(
					(p) => p?.pseudo.toLowerCase() === pseudo.toLowerCase()
				);
				resolve(player);
			}, MOCK_DELAY);
		});
	},
};
