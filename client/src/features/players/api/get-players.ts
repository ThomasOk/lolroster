import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api-client";
import { Player } from "@/features/players/types/player-types";

export const getPlayers = async (): Promise<Player[]> => {
	return await api.get<Player[]>("/players");
};

export const usePlayers = () => {
	return useQuery({
		queryKey: ["players"],
		queryFn: getPlayers,
	});
};

// export const playersKeys = {
//   all: ['players'] as const,
//   lists: () => [...playersKeys.all, 'list'] as const,
//   list: (filters: string) => [...playersKeys.lists(), { filters }] as const,
//   details: () => [...playersKeys.all, 'detail'] as const,
//   detail: (id: number) => [...playersKeys.details(), id] as const,
// };

//
// export const getPlayers = async (): Promise<Player[]> => {
//   return await api.get<Player[]>('/players');
// };

//
// export const usePlayers = () => {
//   return useQuery({
//     queryKey: playersKeys.lists(),
//     queryFn: getPlayers,
//   });
// };
