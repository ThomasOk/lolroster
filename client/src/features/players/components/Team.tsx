import { Player } from "../types/player-types";
import { PlayerInfo } from "./player-info";

type TeamProps = {
	players: Player[];
	backgroundColor: string;
	isBlueTeam: boolean;
};

const getTeamTransform = (index: number, isBlueTeam: boolean) => {
	// Disposition pour l'équipe bleue : légèrement inclinée vers la droite
	const blueTeam = {
		rotations: [2, -1, 3, -2, 1],
		translations: [
			{ x: 4, y: -2 },
			{ x: -2, y: 1 },
			{ x: 3, y: 2 },
			{ x: -3, y: -1 },
			{ x: 2, y: 3 },
		],
	};

	// Disposition pour l'équipe rouge : légèrement inclinée vers la gauche
	const redTeam = {
		rotations: [-3, 2, -1, 3, -2],
		translations: [
			{ x: -4, y: 2 },
			{ x: 3, y: -1 },
			{ x: -2, y: -2 },
			{ x: 4, y: 1 },
			{ x: -3, y: -3 },
		],
	};

	const team = isBlueTeam ? blueTeam : redTeam;

	return {
		rotate: team.rotations[index],
		translate: team.translations[index],
	};
};

export const Team = ({ players, backgroundColor, isBlueTeam }: TeamProps) => {
	return (
		<div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center">
			{players.map((player, index) => (
				<div
					key={player?.pseudo}
					className="transform transition-transform duration-300 hover:z-10 bg-white shadow-xl"
					style={{
						transform: `rotate(${
							getTeamTransform(index, isBlueTeam).rotate
						}deg) 
                       translate(${
													getTeamTransform(index, isBlueTeam).translate.x
												}px, 
                               ${
																	getTeamTransform(index, isBlueTeam).translate
																		.y
																}px)`,
					}}
				>
					<PlayerInfo player={player} backgroundColor={backgroundColor} />
				</div>
			))}
		</div>
	);
};
