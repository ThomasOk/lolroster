import { Player } from "../types/player-types";

const players: Player[] = [
	{
		pseudo: "Caps",
		firstName: "Rasmus",
		lastName: "Winther",
		birthDate: "1999-11-17",
		country: "Denmark",
		role: "Mid",
		imageUrl:
			"https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/9/90/G2_Caps_2024_Split_3.png",
		leaguepediaUrl: "https://lol.fandom.com/wiki/Caps",
	},
	{
		pseudo: "Rekkles",
		firstName: "Martin",
		lastName: "Larsson",
		birthDate: "1996-09-20",
		country: "Sweden",
		role: "Bot",
		imageUrl:
			"https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/d/db/T1.EA_Rekkles_2024_Split_2.png",
		leaguepediaUrl: "https://lol.fandom.com/wiki/Rekkles",
	},
	{
		pseudo: "Faker",
		firstName: "Sang-hyeok",
		lastName: "Lee",
		birthDate: "1996-05-07",
		country: "South Korea",
		role: "Mid",
		imageUrl:
			"https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/8/8d/T1_Faker_2024_Split_2.png/",
		leaguepediaUrl: "https://lol.fandom.com/wiki/Faker",
	},
	{
		pseudo: "Bo",
		firstName: "Yang-Bo",
		lastName: "Zhou",
		birthDate: "2002-03-02",
		country: "China",
		role: "Jungle",
		imageUrl:
			"https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/b/bb/KC_Bo_2024_Split_1.png",
		leaguepediaUrl: "https://lol.fandom.com/wiki/Bo",
	},
	{
		pseudo: "Perkz",
		firstName: "Luka",
		lastName: "Perković",
		birthDate: "1998-09-30",
		country: "Croatia",
		role: "Mid",
		imageUrl:
			"https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/6/6a/TH_Perkz_2024_Split_1.png",
		leaguepediaUrl: "https://lol.fandom.com/wiki/Perkz",
	},
	{
		pseudo: "Jankos",
		firstName: "Marcin",
		lastName: "Jankowski",
		birthDate: "1995-07-23",
		country: "Poland",
		role: "Jungle",
		imageUrl:
			"https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/5/5c/TH_Jankos_2024_Split_1.png",
		leaguepediaUrl: "https://lol.fandom.com/wiki/Jankos",
	},
	{
		pseudo: "Uzi",
		firstName: "Zhi-Hao",
		lastName: "Jian",
		birthDate: "1997-04-05",
		country: "China",
		role: "Bot",
		imageUrl:
			"https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/a/ab/GM_Uzi_Legend_Cup_Season_2.png",
		leaguepediaUrl: "https://lol.fandom.com/wiki/Uzi_(Jian_Zi-Hao)",
	},
	{
		pseudo: "Doublelift",
		firstName: "Yiliang",
		lastName: "Peng",
		birthDate: "1993-07-19",
		country: "United States",
		role: "Bot",
		imageUrl:
			"https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/2/24/100_Doublelift_2023_Split_1.png",
		leaguepediaUrl: "https://lol.fandom.com/wiki/Doublelift",
	},
	{
		pseudo: "Hans Sama",
		firstName: "Steven",
		lastName: "Liv",
		birthDate: "1999-09-02",
		country: "France",
		role: "Bot",
		imageUrl:
			"https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/2/29/G2_Hans_Sama_2024_Split_3.png",
		leaguepediaUrl: "https://lol.fandom.com/wiki/Hans_Sama",
	},
	{
		pseudo: "Humanoid",
		firstName: "Marek",
		lastName: "Brázda",
		birthDate: "2000-03-14",
		country: "Czech Republic",
		role: "Mid",
		imageUrl:
			"https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/1/1e/FNC_Humanoid_2024_Split_3.png",
		leaguepediaUrl: "https://lol.fandom.com/wiki/Humanoid",
	},
	{
		pseudo: "Targamas",
		firstName: "Raphaël",
		lastName: "Crabbé",
		birthDate: "2000-06-30",
		country: "Belgium",
		role: "Support",
		imageUrl:
			"https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/c/cb/KC_Targamas_2024_Split_1.png",
		leaguepediaUrl: "https://lol.fandom.com/wiki/Targamas",
	},
	{
		pseudo: "Bin",
		firstName: "Chen",
		lastName: "Ze-Bin",
		birthDate: "2003-09-28",
		country: "China",
		role: "Top",
		imageUrl:
			"https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/3/34/BLG_Bin_Worlds_2024.png",
		leaguepediaUrl: "https://lol.fandom.com/wiki/Bin_(Chen_Ze-Bin)",
	},
	{
		pseudo: "Yike",
		firstName: "Martin",
		lastName: "Sundelin",
		birthDate: "2000-11-11",
		country: "Sweden",
		role: "Jungle",
		imageUrl:
			"https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/4/4b/G2_Yike_2024_Split_3.png",
		leaguepediaUrl: "https://lol.fandom.com/wiki/Yike",
	},
	{
		pseudo: "knight",
		firstName: "Zhuo",
		lastName: "Ding",
		birthDate: "2000-05-22",
		country: "China",
		role: "Mid",
		imageUrl:
			"https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/1/17/BLG_knight_Worlds_2024.png",
		leaguepediaUrl: "https://lol.fandom.com/wiki/Knight_(Zhuo_Ding)",
	},
	{
		pseudo: "Wunder",
		firstName: "Martin",
		lastName: "Nordahl Hansen",
		birthDate: "1998-11-09",
		country: "Denmark",
		role: "Top",
		imageUrl:
			"https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/e/e4/TH_Wunder_2024_Split_1.png",
		leaguepediaUrl: "https://lol.fandom.com/wiki/Wunder",
	},
	{
		pseudo: "Gala",
		firstName: "Chen",
		lastName: "Wei",
		birthDate: "2001-02-14",
		country: "China",
		role: "Bot",
		imageUrl:
			"https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/d/dc/LNG_GALA_Worlds_2024.png",
		leaguepediaUrl: "https://lol.fandom.com/wiki/GALA",
	},
	{
		pseudo: "Keria",
		firstName: "Ryu",
		lastName: "Min-seok",
		birthDate: "2002-10-14",
		country: "South Korea",
		role: "Support",
		imageUrl:
			"https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/9/92/T1_Keria_2024_Split_2.png",
		leaguepediaUrl: "https://lol.fandom.com/wiki/Keria",
	},
];

export default players;
