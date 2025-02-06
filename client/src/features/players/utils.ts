import { polyfillCountryFlagEmojis } from "country-flag-emoji-polyfill";
import { Player, Role } from "./types/player-types";
import players from "./mocks/players-data-eu";

const countryMap: Record<string, string> = {
	// Europe
	Belgium: "BE",
	Croatia: "HR",
	"Czech Republic": "CZ",
	Denmark: "DK",
	France: "FR",
	Poland: "PL",
	Sweden: "SE",
	Spain: "ES",
	Germany: "DE",
	Slovenia: "SI",
	Turkey: "TR",
	Greece: "GR",
	Lithuania: "LT",
	Bulgaria: "BG",

	// Asia
	China: "CN",
	"South Korea": "KR",

	// America
	"United States": "US",
	Canada: "CA",
};

const getCountryCode = (countryName: string): string => {
	return countryMap[countryName] || "UN"; // "UN" pour Unknown/Undefined si le pays n'est pas trouvé
};

export const countryToEmoji = (country: string) => {
	const countryCode = getCountryCode(country);
	polyfillCountryFlagEmojis();
	return countryCode
		?.split("")
		.map((letter) => (letter.charCodeAt(0) % 32) + 0x1f1e5)
		.map((emojiCode) => String.fromCodePoint(emojiCode))
		.join("");
};

const getRandomPlayersByRole = (
	role: Role,
	excludePlayers: Player[] = []
): Player => {
	const availablePlayers = players.filter(
		(player) => player.role === role && !excludePlayers.includes(player)
	);
	const randomIndex = Math.floor(Math.random() * availablePlayers.length);
	return availablePlayers[randomIndex];
};

export const generateRandomTeam = (excludePlayers: Player[] = []): Player[] => {
	const roles: Role[] = ["Top", "Jungle", "Mid", "Bot", "Support"];
	const team: Player[] = [];

	roles.forEach((role) => {
		const player = getRandomPlayersByRole(role, [...excludePlayers, ...team]);
		team.push(player);
	});

	return team;
};
