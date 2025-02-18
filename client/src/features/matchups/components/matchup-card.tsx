import { TeamComposition } from "@/features/matchups/components/team-composition";
import { VotingSection } from "@/features/matchups/components/voting-section";
import { TeamSkeleton } from "@/features/players/components/team-skeleton";
import { CommentsSection } from "@/features/comments/components/comments-section";
import { useMatchup } from "@/features/matchups/hooks/use-matchup";

export const MatchCard = () => {
	const {
		id,
		team1,
		team2,
		blueVotes,
		redVotes,
		handleBlueVote,
		handleRedVote,
		isLoading,
		userVote,
		isVoting,
	} = useMatchup();

	return (
		<div className="flex flex-col items-center gap-12">
			<h2 className="text-xl text-black font-black text-center mb-4 bg-white border-4 border-black py-2 px-6 shadow-xl inline-block transform -rotate-2">
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
					<TeamComposition
						players={team1}
						backgroundColor="bg-sky-200"
						isBlueTeam={true}
					/>
					<VotingSection
						blueVotes={blueVotes}
						redVotes={redVotes}
						onBlueVote={handleBlueVote}
						onRedVote={handleRedVote}
						isVoting={isVoting}
						userVote={userVote}
					/>
					<TeamComposition
						players={team2}
						backgroundColor="bg-red-200"
						isBlueTeam={false}
					/>
					{id && (
						<div className="mt-10">
							<CommentsSection matchupId={id} />
						</div>
					)}
				</>
			)}
		</div>
	);
};
