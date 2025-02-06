export type Role = "Top" | "Jungle" | "Mid" | "Bot" | "Support";

export type Player = {
	pseudo: string;
	firstName: string;
	lastName: string;
	birthDate: string;
	country: string;
	role: Role;
	imageUrl: string;
	leaguepediaUrl: string;
};
