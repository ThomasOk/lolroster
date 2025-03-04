import { db } from "./index";
import {
	playersTable,
	PlayerRole,
	PlayerRegion,
	PlayerStatus,
} from "./schema/players";

const players = [
	{
		pseudo: "Oscarinin",
		firstName: "Óscar",
		lastName: "Muñoz Jiménez",
		birthDate: new Date("2003-06-11"),
		country: "ES",
		role: PlayerRole.TOP,
		imagePath: "/players/FNC_Oscarinin_2025_Split_1.webp",
		leaguepediaUrl: "https://lol.fandom.com/wiki/Oscarinin",
		team: "Fnatic",
		region: PlayerRegion.EU,
		status: PlayerStatus.ACTIVE,
		isActive: true,
	},
	{
		pseudo: "Razork",
		firstName: "Iván",
		lastName: "Martín Díaz",
		birthDate: new Date("2000-10-07"),
		country: "ES",
		role: PlayerRole.JUNGLE,
		imagePath: "/players/FNC_Razork_2025_Split_1.webp",
		leaguepediaUrl: "https://lol.fandom.com/wiki/Razork",
		team: "Fnatic",
		region: PlayerRegion.EU,
		status: PlayerStatus.ACTIVE,
		isActive: true,
	},
	{
		pseudo: "Humanoid",
		firstName: "Marek",
		lastName: "Brázda",
		birthDate: new Date("2000-03-14"),
		country: "CZ",
		role: PlayerRole.MID,
		imagePath: "/players/FNC_Humanoid_2025_Split_1.webp",
		leaguepediaUrl: "https://lol.fandom.com/wiki/Humanoid",
		team: "Fnatic",
		region: PlayerRegion.EU,
		status: PlayerStatus.ACTIVE,
		isActive: true,
	},
	{
		pseudo: "Upset",
		firstName: "Elias",
		lastName: "Lipp",
		birthDate: new Date("1999-12-16"),
		country: "DE",
		role: PlayerRole.BOT,
		imagePath: "/players/FNC_Upset_2025_Split_1.webp",
		leaguepediaUrl: "https://lol.fandom.com/wiki/Upset",
		team: "Fnatic",
		region: PlayerRegion.EU,
		status: PlayerStatus.ACTIVE,
		isActive: true,
	},
	{
		pseudo: "Mikyx",
		firstName: "Mihael",
		lastName: "Mehle",
		birthDate: new Date("1998-11-02"),
		country: "SI",
		role: PlayerRole.SUPPORT,
		imagePath: "/players/FNC_Mikyx_2025_Split_1.webp",
		leaguepediaUrl: "https://lol.fandom.com/wiki/Mikyx",
		team: "Fnatic",
		region: PlayerRegion.EU,
		status: PlayerStatus.ACTIVE,
		isActive: true,
	},
	{
		pseudo: "BrokenBlade",
		firstName: "Sergen",
		lastName: "Çelik",
		birthDate: new Date("2000-01-19"),
		country: "DE",
		role: PlayerRole.TOP,
		imagePath: "/players/G2_BrokenBlade_2025_Split_1.webp",
		leaguepediaUrl: "https://lol.fandom.com/wiki/BrokenBlade",
		team: "G2 Esports",
		region: PlayerRegion.EU,
		status: PlayerStatus.ACTIVE,
		isActive: true,
	},
	{
		pseudo: "SkewMond",
		firstName: "Rudy",
		lastName: "Semaan",
		birthDate: new Date("2004-08-09"),
		country: "FR",
		role: PlayerRole.JUNGLE,
		imagePath: "/players/G2_SkewMond_2025_Split_1",
		leaguepediaUrl: "https://lol.fandom.com/wiki/SkewMond",
		team: "G2 Esports",
		region: PlayerRegion.EU,
		status: PlayerStatus.ACTIVE,
		isActive: true,
	},
	{
		pseudo: "Caps",
		firstName: "Rasmus",
		lastName: "Winther",
		birthDate: new Date("1999-11-17"),
		country: "DK",
		role: PlayerRole.MID,
		imagePath: "/players/G2_Caps_2025_Split_1.webp",
		leaguepediaUrl: "https://lol.fandom.com/wiki/Caps",
		team: "G2 Esports",
		region: PlayerRegion.EU,
		status: PlayerStatus.ACTIVE,
		isActive: true,
	},
	{
		pseudo: "Hans Sama",
		firstName: "Steven",
		lastName: "Liv",
		birthDate: new Date("1999-09-02"),
		country: "FR",
		role: PlayerRole.BOT,
		imagePath: "/players/G2_Hans_Sama_2025_Split_1.webp",
		leaguepediaUrl: "https://lol.fandom.com/wiki/Hans_Sama",
		team: "G2 Esports",
		region: PlayerRegion.EU,
		status: PlayerStatus.ACTIVE,
		isActive: true,
	},
	{
		pseudo: "Labrov",
		firstName: "Labros",
		lastName: "Papoutsakis",
		birthDate: new Date("2002-02-12"),
		country: "GR",
		role: PlayerRole.SUPPORT,
		imagePath: "/players/G2_Labrov_2025_Split_1.webp",
		leaguepediaUrl: "https://lol.fandom.com/wiki/Labrov",
		team: "G2 Esports",
		region: PlayerRegion.EU,
		status: PlayerStatus.ACTIVE,
		isActive: true,
	},
	{
		pseudo: "Lot",
		firstName: "Eren",
		lastName: "Yıldız",
		birthDate: new Date("2004-01-02"),
		country: "TR",
		role: PlayerRole.TOP,
		imagePath: "/players/GX_Lot_2025_Split_1_2.webp",
		leaguepediaUrl: "https://lol.fandom.com/wiki/Lot",
		team: "GIANTX",
		region: PlayerRegion.EU,
		status: PlayerStatus.ACTIVE,
		isActive: true,
	},
	{
		pseudo: "Closer",
		firstName: "Can",
		lastName: "Çelik",
		birthDate: new Date("1998-09-29"),
		country: "TR",
		role: PlayerRole.JUNGLE,
		imagePath: "/players/GX_Closer_2025_Split_1_2.webp",
		leaguepediaUrl: "https://lol.fandom.com/wiki/Closer_(Can_Çelik)",
		team: "GIANTX",
		region: PlayerRegion.EU,
		status: PlayerStatus.ACTIVE,
		isActive: true,
	},
	{
		pseudo: "Jackies",
		firstName: "Adam",
		lastName: "Jeřábek",
		birthDate: new Date("2004-10-06"),
		country: "CZ",
		role: PlayerRole.MID,
		imagePath: "/players/GX_Jackies_2025_Split_1_2.webp",
		leaguepediaUrl: "https://lol.fandom.com/wiki/Jackies",
		team: "GIANTX",
		region: PlayerRegion.EU,
		status: PlayerStatus.ACTIVE,
		isActive: true,
	},
	{
		pseudo: "Noah",
		firstName: "Oh",
		lastName: "Hyeon-taek",
		birthDate: new Date("2001-10-04"),
		country: "KR",
		role: PlayerRole.BOT,
		imagePath: "/players/GX_Noah_2025_Split_1_2.webp",
		leaguepediaUrl: "https://lol.fandom.com/wiki/Noah_(Oh_Hyeon-taek)",
		team: "GIANTX",
		region: PlayerRegion.EU,
		status: PlayerStatus.ACTIVE,
		isActive: true,
	},
	{
		pseudo: "Jun",
		firstName: "Yoon",
		lastName: "Se-jun",
		birthDate: new Date("2000-08-02"),
		country: "KR",
		role: PlayerRole.SUPPORT,
		imagePath: "/players/GX_Jun_2025_Split_1_2.webp",
		leaguepediaUrl: "https://lol.fandom.com/wiki/Jun_(Yoon_Se-jun)",
		team: "GIANTX",
		region: PlayerRegion.EU,
		status: PlayerStatus.ACTIVE,
		isActive: true,
	},
	{
		pseudo: "Canna",
		firstName: "Kim",
		lastName: "Chang-dong",
		birthDate: new Date("2000-02-11"),
		country: "KR",
		role: PlayerRole.TOP,
		imagePath: "/players/KC_Canna_2025_Split_1.webp",
		leaguepediaUrl: "https://lol.fandom.com/wiki/Canna",
		team: "Karmine Corp",
		region: PlayerRegion.EU,
		status: PlayerStatus.ACTIVE,
		isActive: true,
	},
	{
		pseudo: "Yike",
		firstName: "Martin",
		lastName: "Sundelin",
		birthDate: new Date("2000-11-11"),
		country: "SE",
		role: PlayerRole.JUNGLE,
		imagePath: "/players/KC_Yike_2025_Split_1.webp",
		leaguepediaUrl: "https://lol.fandom.com/wiki/Yike",
		team: "Karmine Corp",
		region: PlayerRegion.EU,
		status: PlayerStatus.ACTIVE,
		isActive: true,
	},
	{
		pseudo: "Vladi",
		firstName: "Vladimiros",
		lastName: "Kourtidis",
		birthDate: new Date("2005-11-19"),
		country: "GR",
		role: PlayerRole.MID,
		imagePath: "/players/KC_Vladi_2025_Split_1.webp",
		leaguepediaUrl: "https://lol.fandom.com/wiki/Vladi",
		team: "Karmine Corp",
		region: PlayerRegion.EU,
		status: PlayerStatus.ACTIVE,
		isActive: true,
	},
	{
		pseudo: "Caliste",
		firstName: "Caliste",
		lastName: "Henry-Hennebert",
		birthDate: new Date("2006-08-28"),
		country: "FR",
		role: PlayerRole.BOT,
		imagePath: "/players/KC_Caliste_2025_Split_1.webp",
		leaguepediaUrl: "https://lol.fandom.com/wiki/Caliste",
		team: "Karmine Corp",
		region: PlayerRegion.EU,
		status: PlayerStatus.ACTIVE,
		isActive: true,
	},
	{
		pseudo: "Targamas",
		firstName: "Raphaël",
		lastName: "Crabbé",
		birthDate: new Date("2000-06-30"),
		country: "BE",
		role: PlayerRole.SUPPORT,
		imagePath: "/players/KC_Targamas_2025_Split_1.webp",
		leaguepediaUrl: "https://lol.fandom.com/wiki/Targamas",
		team: "Karmine Corp",
		region: PlayerRegion.EU,
		status: PlayerStatus.ACTIVE,
		isActive: true,
	},
	{
		pseudo: "Myrwn",
		firstName: "Alex",
		lastName: "Pastor",
		birthDate: new Date("2003-06-13"),
		country: "ES",
		role: PlayerRole.TOP,
		imagePath: "/players/MKOI_Myrwn_2025_Split_1.webp",
		leaguepediaUrl: "https://lol.fandom.com/wiki/Myrwn",
		team: "Mad Lions KOI",
		region: PlayerRegion.EU,
		status: PlayerStatus.ACTIVE,
		isActive: true,
	},
	{
		pseudo: "Elyoya",
		firstName: "Javier",
		lastName: "Prades Batalla",
		birthDate: new Date("2000-03-13"),
		country: "ES",
		role: PlayerRole.JUNGLE,
		imagePath: "/players/MKOI_Elyoya_2025_Split_1.webp",
		leaguepediaUrl: "https://lol.fandom.com/wiki/Elyoya",
		team: "Mad Lions KOI",
		region: PlayerRegion.EU,
		status: PlayerStatus.ACTIVE,
		isActive: true,
	},
	{
		pseudo: "Jojopyun",
		firstName: "Joseph Joon",
		lastName: "Pyun",
		birthDate: new Date("2004-10-01"),
		country: "CA",
		role: PlayerRole.MID,
		imagePath: "/players/MKOI_Jojopyun_2025_Split_1.webp",
		leaguepediaUrl: "https://lol.fandom.com/wiki/Jojopyun",
		team: "Mad Lions KOI",
		region: PlayerRegion.EU,
		status: PlayerStatus.ACTIVE,
		isActive: true,
	},
	{
		pseudo: "Supa",
		firstName: "David",
		lastName: "Martínez García",
		birthDate: new Date("2000-10-23"),
		country: "ES",
		role: PlayerRole.BOT,
		imagePath: "/players/MKOI_Supa_2025_Split_1.webp",
		leaguepediaUrl: "https://lol.fandom.com/wiki/Supa",
		team: "Mad Lions KOI",
		region: PlayerRegion.EU,
		status: PlayerStatus.ACTIVE,
		isActive: true,
	},
	{
		pseudo: "Alvaro",
		firstName: "Álvaro",
		lastName: "Fernández del Amo",
		birthDate: new Date("2003-07-15"),
		country: "ES",
		role: PlayerRole.SUPPORT,
		imagePath: "/players/MKOI_Alvaro_2025_Split_1.webp",
		leaguepediaUrl: "https://lol.fandom.com/wiki/Alvaro_(Álvaro_Fernández)",
		team: "Mad Lions KOI",
		region: PlayerRegion.EU,
		status: PlayerStatus.ACTIVE,
		isActive: true,
	},
	{
		pseudo: "Adam",
		firstName: "Adam",
		lastName: "Maanane",
		birthDate: new Date("2001-12-30"),
		country: "FR",
		role: PlayerRole.TOP,
		imagePath: "/players/RGE_Adam_2025_Split_1.webp",
		leaguepediaUrl: "https://lol.fandom.com/wiki/Adam_(Adam_Maanane)",
		team: "Rogue",
		region: PlayerRegion.EU,
		status: PlayerStatus.ACTIVE,
		isActive: true,
	},
	{
		pseudo: "Malrang",
		firstName: "Kim",
		lastName: "Geun-seong",
		birthDate: new Date("2000-02-09"),
		country: "KR",
		role: PlayerRole.JUNGLE,
		imagePath: "/players/RGE_Malrang_2025_Split_1.webp",
		leaguepediaUrl: "https://lol.fandom.com/wiki/Malrang",
		team: "Rogue",
		region: PlayerRegion.EU,
		status: PlayerStatus.ACTIVE,
		isActive: true,
	},
	{
		pseudo: "Larssen",
		firstName: "Emil",
		lastName: "Larsson",
		birthDate: new Date("2000-03-30"),
		country: "SE",
		role: PlayerRole.MID,
		imagePath: "/players/RGE_Larssen_2025_Split_1.webp",
		leaguepediaUrl: "https://lol.fandom.com/wiki/Larssen",
		team: "Rogue",
		region: PlayerRegion.EU,
		status: PlayerStatus.ACTIVE,
		isActive: true,
	},
	{
		pseudo: "Patrik",
		firstName: "Patrik",
		lastName: "Jírů",
		birthDate: new Date("2000-04-07"),
		country: "CZ",
		role: PlayerRole.BOT,
		imagePath: "/players/RGE_Patrik_2025_Split_1.webp",
		leaguepediaUrl: "https://lol.fandom.com/wiki/Patrik",
		team: "Rogue",
		region: PlayerRegion.EU,
		status: PlayerStatus.ACTIVE,
		isActive: true,
	},
	{
		pseudo: "Execute",
		firstName: "Lee",
		lastName: "Jeong-hoon",
		birthDate: new Date("2000-02-22"),
		country: "KR",
		role: PlayerRole.SUPPORT,
		imagePath: "/players/RGE_Execute_2025_Split_1.webp",
		leaguepediaUrl: "https://lol.fandom.com/wiki/Execute",
		team: "Rogue",
		region: PlayerRegion.EU,
		status: PlayerStatus.ACTIVE,
		isActive: true,
	},
	{
		pseudo: "JNX",
		firstName: "Janik",
		lastName: "Bartels",
		birthDate: new Date("1998-12-26"),
		country: "DE",
		role: PlayerRole.TOP,
		imagePath: "/players/SK_JNX_2025_Split_1.webp",
		leaguepediaUrl: "https://lol.fandom.com/wiki/JNX",
		team: "SK Gaming",
		region: PlayerRegion.EU,
		status: PlayerStatus.ACTIVE,
		isActive: true,
	},
	{
		pseudo: "ISMA",
		firstName: "Ismaïl",
		lastName: "Boualem",
		birthDate: new Date("2001-06-20"),
		country: "BE",
		role: PlayerRole.JUNGLE,
		imagePath: "/players/SK_ISMA_2025_Split_1.webp",
		leaguepediaUrl: "https://lol.fandom.com/wiki/ISMA",
		team: "SK Gaming",
		region: PlayerRegion.EU,
		status: PlayerStatus.ACTIVE,
		isActive: true,
	},
	{
		pseudo: "RKR",
		firstName: "Steven",
		lastName: "Chen",
		birthDate: new Date("2001-05-15"),
		country: "DE",
		role: PlayerRole.MID,
		imagePath: "/players/SK_RKR_2025_Split_1.webp",
		leaguepediaUrl: "https://lol.fandom.com/wiki/RKR",
		team: "SK Gaming",
		region: PlayerRegion.EU,
		status: PlayerStatus.ACTIVE,
		isActive: true,
	},
	{
		pseudo: "Rahel",
		firstName: "Cho",
		lastName: "Min-seong",
		birthDate: new Date("2004-02-13"),
		country: "KR",
		role: PlayerRole.BOT,
		imagePath: "/players/SK_Rahel_2025_Split_1.webp",
		leaguepediaUrl: "https://lol.fandom.com/wiki/Rahel",
		team: "SK Gaming",
		region: PlayerRegion.EU,
		status: PlayerStatus.ACTIVE,
		isActive: true,
	},
	{
		pseudo: "Loopy",
		firstName: "Kim",
		lastName: "Dong-hyeon",
		birthDate: new Date("2004-06-09"),
		country: "KR",
		role: PlayerRole.SUPPORT,
		imagePath: "/players/SK_Loopy_2025_Split_1.webp",
		leaguepediaUrl: "https://lol.fandom.com/wiki/Loopy",
		team: "SK Gaming",
		region: PlayerRegion.EU,
		status: PlayerStatus.ACTIVE,
		isActive: true,
	},
	{
		pseudo: "Irrelevant",
		firstName: "Joel",
		lastName: "Miro Scharol",
		birthDate: new Date("2001-10-22"),
		country: "DE",
		role: PlayerRole.TOP,
		imagePath: "/players/BDS_Irrelevant_2025_Split_1.webp",
		leaguepediaUrl: "https://lol.fandom.com/wiki/Irrelevant",
		team: "BDS",
		region: PlayerRegion.EU,
		status: PlayerStatus.ACTIVE,
		isActive: true,
	},
	{
		pseudo: "113",
		firstName: "Doğukan",
		lastName: "Balcı",
		birthDate: new Date("2004-08-12"),
		country: "TR",
		role: PlayerRole.JUNGLE,
		imagePath: "/players/BDS_113_2025_Split_1.webp",
		leaguepediaUrl: "https://lol.fandom.com/wiki/113",
		team: "BDS",
		region: PlayerRegion.EU,
		status: PlayerStatus.ACTIVE,
		isActive: true,
	},
	{
		pseudo: "nuc",
		firstName: "Ilias",
		lastName: "Bizriken",
		birthDate: new Date("2002-10-17"),
		country: "FR",
		role: PlayerRole.MID,
		imagePath: "/players/BDS_nuc_2025_Split_1.webp",
		leaguepediaUrl: "https://lol.fandom.com/wiki/Nuc",
		team: "BDS",
		region: PlayerRegion.EU,
		status: PlayerStatus.ACTIVE,
		isActive: true,
	},
	{
		pseudo: "Ice",
		firstName: "Yoon",
		lastName: "Sang-hoon",
		birthDate: new Date("2001-04-09"),
		country: "KR",
		role: PlayerRole.BOT,
		imagePath: "/players/BDS_Ice_2025_Split_1.webp",
		leaguepediaUrl: "https://lol.fandom.com/wiki/Ice_(Yoon_Sang-hoon)",
		team: "BDS",
		region: PlayerRegion.EU,
		status: PlayerStatus.ACTIVE,
		isActive: true,
	},
	{
		pseudo: "Parus",
		firstName: "Polat",
		lastName: "Furkan Çiçek",
		birthDate: new Date("2003-02-22"),
		country: "TR",
		role: PlayerRole.SUPPORT,
		imagePath: "/players/BDS_Parus_2025_Split_1.webp",
		leaguepediaUrl: "https://lol.fandom.com/wiki/Parus",
		team: "BDS",
		region: PlayerRegion.EU,
		status: PlayerStatus.ACTIVE,
		isActive: true,
	},
	{
		pseudo: "Carlsen",
		firstName: "Carl Ulsted",
		lastName: "Carlsen",
		birthDate: new Date("2005-12-15"),
		country: "DK",
		role: PlayerRole.TOP,
		imagePath: "/players/TH_Carlsen_2025_Split_1.webp",
		leaguepediaUrl: "https://lol.fandom.com/wiki/Carlsen",
		team: "Team Heretics",
		region: PlayerRegion.EU,
		status: PlayerStatus.ACTIVE,
		isActive: true,
	},
	{
		pseudo: "Sheo",
		firstName: "Théo",
		lastName: "Borile",
		birthDate: new Date("2001-07-05"),
		country: "FR",
		role: PlayerRole.JUNGLE,
		imagePath: "/players/TH_Sheo_2025_Split_1.webp",
		leaguepediaUrl: "https://lol.fandom.com/wiki/Sheo",
		team: "Team Heretics",
		region: PlayerRegion.EU,
		status: PlayerStatus.ACTIVE,
		isActive: true,
	},
	{
		pseudo: "Kamiloo",
		firstName: "Kamil",
		lastName: "Haudegond",
		birthDate: new Date("2005-07-20"),
		country: "FR",
		role: PlayerRole.MID,
		imagePath: "/players/TH_Kamiloo_2025_Split_1.webp",
		leaguepediaUrl: "https://lol.fandom.com/wiki/Kamiloo",
		team: "Team Heretics",
		region: PlayerRegion.EU,
		status: PlayerStatus.ACTIVE,
		isActive: true,
	},
	{
		pseudo: "Flakked",
		firstName: "Víctor",
		lastName: "Lirola Tortosa",
		birthDate: new Date("2001-04-25"),
		country: "ES",
		role: PlayerRole.BOT,
		imagePath: "/players/TH_Flakked_2025_Split_1.webp",
		leaguepediaUrl: "https://lol.fandom.com/wiki/Flakked",
		team: "Team Heretics",
		region: PlayerRegion.EU,
		status: PlayerStatus.ACTIVE,
		isActive: true,
	},
	{
		pseudo: "Stend",
		firstName: "Paul",
		lastName: "Lardin",
		birthDate: new Date("2001-07-13"),
		country: "FR",
		role: PlayerRole.SUPPORT,
		imagePath: "/players/TH_Stend_2025_Split_1.webp",
		leaguepediaUrl: "https://lol.fandom.com/wiki/Stend",
		team: "Team Heretics",
		region: PlayerRegion.EU,
		status: PlayerStatus.ACTIVE,
		isActive: true,
	},
	{
		pseudo: "Naak Nako",
		firstName: "Kaan",
		lastName: "Okan",
		birthDate: new Date("2005-03-24"),
		country: "TR",
		role: PlayerRole.TOP,
		imagePath: "/players/VIT_Naak_Nako_2025_Split_1.webp",
		leaguepediaUrl: "https://lol.fandom.com/wiki/Naak_Nako",
		team: "Team Vitality",
		region: PlayerRegion.EU,
		status: PlayerStatus.ACTIVE,
		isActive: true,
	},
	{
		pseudo: "Lyncas",
		firstName: "Linas",
		lastName: "Nauncikas",
		birthDate: new Date("2003-12-10"),
		country: "LT",
		role: PlayerRole.JUNGLE,
		imagePath: "/players/VIT_Lyncas_2025_Split_1.webp",
		leaguepediaUrl: "https://lol.fandom.com/wiki/Lyncas",
		team: "Team Vitality",
		region: PlayerRegion.EU,
		status: PlayerStatus.ACTIVE,
		isActive: true,
	},
	{
		pseudo: "Czajek",
		firstName: "Mateusz",
		lastName: "Czajka",
		birthDate: new Date("2003-09-24"),
		country: "PL",
		role: PlayerRole.MID,
		imagePath: "/players/VIT_Czajek_2025_Split_1.webp",
		leaguepediaUrl: "https://lol.fandom.com/wiki/Czajek",
		team: "Team Vitality",
		region: PlayerRegion.EU,
		status: PlayerStatus.ACTIVE,
		isActive: true,
	},
	{
		pseudo: "Carzzy",
		firstName: "Matyáš",
		lastName: "Orság",
		birthDate: new Date("2002-01-31"),
		country: "CZ",
		role: PlayerRole.BOT,
		imagePath: "/players/VIT_Carzzy_2025_Split_1.webp",
		leaguepediaUrl: "https://lol.fandom.com/wiki/Carzzy",
		team: "Team Vitality",
		region: PlayerRegion.EU,
		status: PlayerStatus.ACTIVE,
		isActive: true,
	},
	{
		pseudo: "Hylissang",
		firstName: "Zdravets",
		lastName: "Iliev",
		birthDate: new Date("1995-04-30"),
		country: "BG",
		role: PlayerRole.SUPPORT,
		imagePath: "/players/VIT_Hylissang_2025_Split_1.webp",
		leaguepediaUrl: "https://lol.fandom.com/wiki/Hylissang",
		team: "Team Vitality",
		region: PlayerRegion.EU,
		status: PlayerStatus.ACTIVE,
		isActive: true,
	},
];

export const seed = async () => {
	const t0 = performance.now();
	console.log("🌱 Seeding database...");

	try {
		console.log("🗑️  Cleaning existing data...");
		await db.delete(playersTable);

		console.log("📥 Inserting new players...");
		await db.insert(playersTable).values(players);

		const t1 = performance.now();
		console.log(`✅ Seeding completed in ${Math.round(t1 - t0)}ms`);
	} catch (error) {
		console.error("❌ Error during seeding:", error);
		process.exit(1);
	}
};

seed()
	.then(() => {
		console.log("👋 Closing connection...");
		process.exit(0);
	})
	.catch((err) => {
		console.error("❌ Fatal error:", err);
		process.exit(1);
	});
