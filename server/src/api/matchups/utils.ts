import { Player } from "@/db/schema/players";

const getRandomPlayerByRole = (
	players: Player[],
	role: string,
	excludePlayers: Player[] = []
): Player | undefined => {
	const availablePlayers = players.filter(
		(player) =>
			player.role === role &&
			!excludePlayers.includes(player) &&
			player.isActive
	);

	if (availablePlayers.length === 0) return undefined;

	const randomIndex = Math.floor(Math.random() * availablePlayers.length);
	return availablePlayers[randomIndex];
};

export const generateRandomTeam = (
	allPlayers: Player[],
	excludePlayers: Player[] = []
): Player[] => {
	const roles = ["TOP", "JUNGLE", "MID", "BOT", "SUPPORT"];
	const team: Player[] = [];

	roles.forEach((role) => {
		const player = getRandomPlayerByRole(allPlayers, role, [
			...excludePlayers,
			...team,
		]);
		if (player) {
			team.push(player);
		}
	});

	return team;
};
