import React from "react";
import { Player, Role } from "../types/player-types";
import BotIconSvg from "../assets/roles/bot.svg";
import SupportIconSvg from "../assets/roles/support.svg";
import MidIconSvg from "../assets/roles/mid.svg";
import JungleIconSvg from "../assets/roles/jungle.svg";
import TopIconSvg from "../assets/roles/top.svg";
import { polyfillCountryFlagEmojis } from "country-flag-emoji-polyfill";

// type RoleIcons = {
// 	[key in Role]: string;
// };

// const roleIcons: RoleIcons = {
// 	Bot: botIcon,
// 	Jungle: jungleIcon,
// 	Mid: midIcon,
// 	Support: supportIcon,
// 	Top: topIcon,
// };
polyfillCountryFlagEmojis();
const roleSvgIcons: { [key in Role]: React.FC<{ className?: string }> } = {
	Bot: BotIconSvg,
	Jungle: JungleIconSvg,
	Mid: MidIconSvg,
	Support: SupportIconSvg,
	Top: TopIconSvg,
};

type PlayerInfoProps = {
	player: Player;
	backgroundColor: string;
};

const PlayerInfo = ({
	player,

	backgroundColor,
}: PlayerInfoProps) => {
	return (
		<div className="relative flex flex-col items-center px-2 pt-2 pb-3 border-2 bg-white shadow-lg text-black hover:scale-[1.2] transition-all duration-[350ms]">
			{/* Image et pseudo du joueur - clic pour afficher/masquer la carte */}
			<div className="flex flex-col items-center cursor-pointer">
				<img
					className={`border-2 w-36 h-36 sm:w-24 sm:h-24 md:w-36 md:h-36  object-cover ${backgroundColor}`}
					src={player?.imageUrl}
					alt={`${player?.pseudo} photo`}
				/>
				<div>
					<span className="font-medium font-permanent-marker">
						{player?.pseudo}{" "}
					</span>
					<span className="">🇫🇮</span>
				</div>
			</div>
			{/* <img
				src={player?.role ? roleIcons[player.role] : ""}
				alt={`${player?.role} role`}
				className="h-8 w-8"
			/> */}
			{player?.role &&
				React.createElement(roleSvgIcons[player.role], {
					className: "text-black h-4",
				})}
		</div>
	);
};

export default PlayerInfo;
