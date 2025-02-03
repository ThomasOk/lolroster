import { useEffect, useState } from "react";
import { PlayerService } from "@/features/players/api/player-service";
import Team from "@/features/players/components/Team";
import { Player } from "@/features/players/types/player-types";
// import { Swords } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

const MatchCard = () => {
	const [playersTeam1, setPlayersTeam1] = useState<Player[]>([]);
	const [playersTeam2, setPlayersTeam2] = useState<Player[]>([]);
	const [blueVotes, setBlueVotes] = useState(0);
	const [redVotes, setRedVotes] = useState(0);

	const totalVotes = blueVotes + redVotes;
	const bluePercentage = totalVotes === 0 ? 50 : (blueVotes / totalVotes) * 100;
	const redPercentage = totalVotes === 0 ? 50 : (redVotes / totalVotes) * 100;

	useEffect(() => {
		const fetchPlayers = async () => {
			const bin = await PlayerService.getPlayerByPseudo("bin");
			const bo = await PlayerService.getPlayerByPseudo("bo");
			const faker = await PlayerService.getPlayerByPseudo("faker");
			const hanssama = await PlayerService.getPlayerByPseudo("hans sama");
			const targamas = await PlayerService.getPlayerByPseudo("targamas");
			const keria = await PlayerService.getPlayerByPseudo("keria");
			const gala = await PlayerService.getPlayerByPseudo("gala");
			const knight = await PlayerService.getPlayerByPseudo("knight");
			const yike = await PlayerService.getPlayerByPseudo("yike");
			const wunder = await PlayerService.getPlayerByPseudo("wunder");
			setPlayersTeam1([bin, bo, faker, hanssama, targamas]);
			setPlayersTeam2([wunder, yike, knight, gala, keria]);
		};
		fetchPlayers();
	}, []);

	const handleBlueVote = () => {
		setBlueVotes((prev) => prev + 1);
	};

	const handleRedVote = () => {
		setRedVotes((prev) => prev + 1);
	};

	return (
		<div className="flex flex-col items-center gap-8">
			<h2 className="text-xl font-semibold border-2 py-1 px-2 bg-white shadow-lg">
				Today's Card
			</h2>
			<Team players={playersTeam1} backgroundColor="bg-sky-200" />
			{/* <Swords size={36} className="text-black" /> */}
			<Button variant="blue" onClick={handleBlueVote}>
				Vote Blue
			</Button>
			<div className="relative w-[60%]">
				<Progress value={bluePercentage} />
				{/* Pourcentage bleu */}
				<div
					className="absolute top-1/2 -translate-y-1/2 text-xs font-semibold text-black"
					style={{ left: `${bluePercentage / 2}%` }}
				>
					{bluePercentage.toFixed(1)}%
				</div>
				{/* Pourcentage rouge */}
				<div
					className="absolute top-1/2 -translate-y-1/2 text-xs font-semibold text-black"
					style={{ left: `${bluePercentage + redPercentage / 2}%` }}
				>
					{redPercentage.toFixed(1)}%
				</div>
			</div>
			<Button variant="red" onClick={handleRedVote}>
				Vote Red
			</Button>
			<Team players={playersTeam2} backgroundColor="bg-red-200" />
		</div>
	);
};
export default MatchCard;
