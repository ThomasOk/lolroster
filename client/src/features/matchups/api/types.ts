import { Player } from "@/features/players/types/player-types";

export type Matchup = {
	id: number;
	team1: Player[];
	team2: Player[];
	blueVotes: number;
	redVotes: number;
	createdAt: Date;
	userVote?: "blue" | "red";
};
