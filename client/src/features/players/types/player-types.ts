export const PlayerRole = {
	TOP: "TOP",
	JUNGLE: "JUNGLE",
	MID: "MID",
	BOT: "BOT",
	SUPPORT: "SUPPORT",
} as const;

export const PlayerRegion = {
	EU: "EU",
	NA: "NA",
	KR: "KR",
	CN: "CN",
	VN: "VN",
	TW: "TW",
} as const;

export const PlayerStatus = {
	ACTIVE: "ACTIVE",
	INACTIVE: "INACTIVE",
	RETIRED: "RETIRED",
	SUBSTITUTE: "SUBSTITUTE",
} as const;

export type PlayerRoleType = keyof typeof PlayerRole;
export type PlayerRegionType = keyof typeof PlayerRegion;
export type PlayerStatusType = keyof typeof PlayerStatus;

export type Player = {
	id: number;
	pseudo: string;
	firstName: string | null;
	lastName: string | null;
	birthDate: Date | null;
	country: string | null;
	role: PlayerRoleType;
	imagePath: string | null;
	leaguepediaUrl: string | null;
	team: string | null;
	region: PlayerRegionType;
	status: PlayerStatusType;
	createdAt: Date;
	updatedAt: Date;
	isActive: boolean;
};
