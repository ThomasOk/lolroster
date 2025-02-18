import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import * as matchupService from "@/features/matchups/api/matchup-service";
import * as voteService from "@/features/votes/api/votes-service";
import { toast } from "sonner";

const matchupKeys = {
	current: ["dailyMatchup"] as const,
};

export const useMatchup = () => {
	const queryClient = useQueryClient();

	const { data: matchup, isLoading: isLoadingMatchup } = useQuery({
		queryKey: matchupKeys.current,
		queryFn: () => matchupService.getCurrentMatchup(),
		// Refresh every 30s to see votes
		refetchInterval: 30000,
	});

	const voteMutation = useMutation({
		mutationFn: ({ team }: { team: "blue" | "red" }) =>
			voteService.vote({
				matchupId: matchup?.id,
				team,
			}),
		onSuccess: (data) => {
			queryClient.setQueryData(matchupKeys.current, data);
			toast.success(`Successfully voted for ${data.userVote} team!`);
		},
		onError: (error) => {
			if (error instanceof Error) {
				toast.error(error.message);
			} else {
				toast.error("Failed to submit vote");
			}
		},
	});

	const handleVote = (team: "blue" | "red") => {
		if (voteMutation.isPending) return;

		// If user already voted
		if (matchup?.userVote) {
			toast.error(`You have already voted for the ${matchup.userVote} team!`);
			return;
		}

		voteMutation.mutate({ team });
	};

	return {
		id: matchup?.id,
		team1: matchup?.team1 || [],
		team2: matchup?.team2 || [],
		blueVotes: matchup?.blueVotes || 0,
		redVotes: matchup?.redVotes || 0,
		handleBlueVote: () => handleVote("blue"),
		handleRedVote: () => handleVote("red"),
		isLoading: isLoadingMatchup,
		isVoting: voteMutation.isPending,
		userVote: matchup?.userVote,
	};
};
