import { polyfillCountryFlagEmojis } from "country-flag-emoji-polyfill";
import { Player } from "./types/player-types";

export const countryToEmoji = (countryCode: string | null) => {
	if (!countryCode) return "";

	polyfillCountryFlagEmojis();
	return countryCode
		.split("")
		.map((letter) => (letter.charCodeAt(0) % 32) + 0x1f1e5)
		.map((emojiCode) => String.fromCodePoint(emojiCode))
		.join("");
};

const getRandomPlayerByRole = (
	players: Player[],
	role: string,
	excludePlayers: Player[] = []
): Player | undefined => {
	const availablePlayers = players.filter(
		(player) =>
			player.role === role &&
			!excludePlayers.includes(player) &&
			player.isActive // S'assurer que le joueur est actif
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
