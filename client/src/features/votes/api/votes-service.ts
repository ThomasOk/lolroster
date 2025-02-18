import { api } from "@/lib/api-client";
import { Player } from "@/features/players/types/player-types";

type VoteResponse = {
	id: number;
	team1: Player[];
	team2: Player[];
	blueVotes: number;
	redVotes: number;
	userVote?: "blue" | "red";
};

export const vote = async ({
	matchupId,
	team,
}: {
	matchupId: number | undefined;
	team: "blue" | "red";
}): Promise<VoteResponse> => {
	return api.post("/votes", {
		matchupId,
		team,
	});
};

export const getUserVoteForMatchup = async (matchupId: number) => {
	return api.get(`/votes/matchup/${matchupId}`);
};
