import { api } from "@/lib/api-client";
import { Matchup } from "@/features/matchups/api/types";

export const getCurrentMatchup = async (): Promise<Matchup> => {
	return api.get("/matchups/current");
};

export const getMatchupById = async (id: number): Promise<Matchup> => {
	return api.get(`/matchups/${id}`);
};
