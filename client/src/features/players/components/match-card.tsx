import { useEffect, useState } from "react";
import players from "@/features/players/mocks/players-data-eu";
import { Team } from "@/features/players/components/team";
import { Player, Role } from "@/features/players/types/player-types";
import { VotingSection } from "@/features/players/components/voting-section";
import { TeamSkeleton } from "@/features/players/components/team-skeleton";

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

const generateRandomTeam = (excludePlayers: Player[] = []): Player[] => {
	const roles: Role[] = ["Top", "Jungle", "Mid", "Bot", "Support"];
	const team: Player[] = [];

	roles.forEach((role) => {
		const player = getRandomPlayersByRole(role, [...excludePlayers, ...team]);
		team.push(player);
	});

	return team;
};

export const MatchCard = () => {
	const [playersTeam1, setPlayersTeam1] = useState<Player[]>([]);
	const [playersTeam2, setPlayersTeam2] = useState<Player[]>([]);
	const [loading, setLoading] = useState(true);
	const [blueVotes, setBlueVotes] = useState(0);
	const [redVotes, setRedVotes] = useState(0);

	useEffect(() => {
		const fetchRandomPlayers = async () => {
			try {
				setLoading(true);

				// Simulate API delay
				await new Promise((resolve) => setTimeout(resolve, 1000));

				const team1 = generateRandomTeam();
				const team2 = generateRandomTeam(team1);

				setPlayersTeam1(team1);
				setPlayersTeam2(team2);
			} catch (error) {
				console.error("Error generating random teams:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchRandomPlayers();
	}, []);

	const handleBlueVote = () => {
		setBlueVotes((prev) => prev + 1);
	};

	const handleRedVote = () => {
		setRedVotes((prev) => prev + 1);
	};

	return (
		<div className="flex flex-col items-center gap-12">
			<h2 className="text-xl text-black font-black text-center mb-12 bg-white border-4 border-black py-2 px-6 shadow-xl inline-block transform -rotate-2">
				Today's Lineup
			</h2>
			{loading ? (
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
