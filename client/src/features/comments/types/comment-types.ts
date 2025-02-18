export type Comment = {
	id: number;
	content: string;
	userId: number;
	matchupId: number;
	parentId?: number;
	createdAt: string;
	user: {
		id: number;
		displayName: string;
		userVote?: "blue" | "red" | null;
	};
};
