import { Team } from "@/features/players/components/team";
import { VotingSection } from "@/features/players/components/voting-section";
import { TeamSkeleton } from "@/features/players/components/team-skeleton";
import { usePlayers } from "../context/players-context";

export const MatchCard = () => {
	const {
		playersTeam1,
		playersTeam2,
		blueVotes,
		redVotes,
		handleBlueVote,
		handleRedVote,
		isLoading,
	} = usePlayers();

	return (
		<div className="flex flex-col items-center gap-12">
			<h2 className="text-xl text-black font-black text-center mb-12 bg-white border-4 border-black py-2 px-6 shadow-xl inline-block transform -rotate-2">
				Today's Matchup
			</h2>
			{isLoading ? (
				<>
					<TeamSkeleton backgroundColor="bg-sky-200" />
					<VotingSection
						blueVotes={blueVotes}
						redVotes={redVotes}
						onBlueVote={handleBlueVote}
						onRedVote={handleRedVote}
						disabled={true}
					/>
					<TeamSkeleton backgroundColor="bg-red-200" />
				</>
			) : (
				<>
					<Team
						players={playersTeam1}
						backgroundColor="bg-sky-200"
						isBlueTeam={true}
					/>
					<VotingSection
						blueVotes={blueVotes}
						redVotes={redVotes}
						onBlueVote={handleBlueVote}
						onRedVote={handleRedVote}
					/>
					<Team
						players={playersTeam2}
						backgroundColor="bg-red-200"
						isBlueTeam={false}
					/>
				</>
			)}
		</div>
	);
};
