import { Player } from "../types/player-types";
import PlayerInfo from "./PlayerInfo";

type TeamProps = {
	players: Player[];
	backgroundColor: string;
};

const Team = ({ players, backgroundColor }: TeamProps) => {
	return (
		<div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-4">
			{players.map((player) => (
				<PlayerInfo
					key={player?.pseudo}
					player={player}
					backgroundColor={backgroundColor}
				/>
			))}
		</div>
	);
};
export default Team;
