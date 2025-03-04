import React from "react";
import { Player, PlayerRoleType } from "../types/player-types";
import BotIconSvg from "../assets/roles/bot.svg";
import SupportIconSvg from "../assets/roles/support.svg";
import MidIconSvg from "../assets/roles/mid.svg";
import JungleIconSvg from "../assets/roles/jungle.svg";
import TopIconSvg from "../assets/roles/top.svg";
import { countryToEmoji } from "../utils";

const roleSvgIcons: {
	[key in PlayerRoleType]: React.FC<{ className?: string }>;
} = {
	BOT: BotIconSvg,
	JUNGLE: JungleIconSvg,
	MID: MidIconSvg,
	SUPPORT: SupportIconSvg,
	TOP: TopIconSvg,
};

type PlayerInfoProps = {
	player: Player;
	backgroundColor: string;
};

export const PlayerInfo = ({
	player,

	backgroundColor,
}: PlayerInfoProps) => {
	return (
		<div className="relative flex flex-col items-center px-2 pt-2 pb-2 border-2 bg-white shadow-lg text-black hover:scale-[1.2] transition-all duration-[350ms]">
			<div className="flex flex-col items-center max-w-[145px] group relative">
				{player?.leaguepediaUrl && (
					<a
						href={player.leaguepediaUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="absolute -top-6 left-1/2 -translate-x-1/2 bg-yellow-400 text-black font-bold px-4 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm border-2 border-black underline"
					>
						Leaguepedia
					</a>
				)}

				<img
					className={`border-2 w-36 h-36 sm:w-24 sm:h-24 md:w-36 md:h-36  object-cover ${backgroundColor}`}
					src={`${import.meta.env.VITE_PUBLIC_FILE_URL}${player?.imagePath}`}
					alt={`${player?.pseudo} photo`}
				/>

				<div>
					<span className="font-medium font-cursive">{player?.pseudo} </span>
					<span className="">{countryToEmoji(player?.country)}</span>
				</div>
			</div>
			{player?.role &&
				React.createElement(roleSvgIcons[player.role], {
					className: "text-black h-4 mt-1",
				})}
		</div>
	);
};
