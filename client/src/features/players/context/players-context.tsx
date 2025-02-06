import { createContext, useContext, useState, useEffect } from "react";
import { Player } from "../types/player-types";
import { generateRandomTeam } from "../utils";

type PlayersContextType = {
	playersTeam1: Player[];
	playersTeam2: Player[];
	refreshTeams: () => void;
	blueVotes: number;
	redVotes: number;
	handleBlueVote: () => void;
	handleRedVote: () => void;
	isLoading: boolean;
};

const PlayersContext = createContext<PlayersContextType | undefined>(undefined);

export const PlayersProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [playersTeam1, setPlayersTeam1] = useState<Player[]>([]);
	const [playersTeam2, setPlayersTeam2] = useState<Player[]>([]);
	const [blueVotes, setBlueVotes] = useState(0);
	const [redVotes, setRedVotes] = useState(0);
	const [isLoading, setIsLoading] = useState(true);

	const generateTeams = async () => {
		try {
			setIsLoading(true);
			// Simulate API delay
			await new Promise((resolve) => setTimeout(resolve, 1000));

			const team1 = generateRandomTeam();
			const team2 = generateRandomTeam(team1);

			setPlayersTeam1(team1);
			setPlayersTeam2(team2);

			setBlueVotes(0);
			setRedVotes(0);

			setIsLoading(false);
		} catch (error) {
			console.error("Error generating random teams:", error);
		}
	};

	useEffect(() => {
		generateTeams();
	}, []);

	const handleBlueVote = () => setBlueVotes((prev) => prev + 1);
	const handleRedVote = () => setRedVotes((prev) => prev + 1);

	return (
		<PlayersContext.Provider
			value={{
				playersTeam1,
				playersTeam2,
				refreshTeams: generateTeams,
				blueVotes,
				redVotes,
				handleBlueVote,
				handleRedVote,
				isLoading,
			}}
		>
			{children}
		</PlayersContext.Provider>
	);
};

export const usePlayers = () => {
	const context = useContext(PlayersContext);
	if (context === undefined) {
		throw new Error("usePlayers must be used within a PlayersProvider");
	}
	return context;
};
