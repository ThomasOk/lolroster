import { api } from "@/lib/api-client";
import { Comment } from "@/features/comments/types/comment-types";

export const getMatchupComments = async (
	matchupId: number
): Promise<Comment[]> => {
	return api.get(`/comments/matchup/${matchupId}`);
};

export const createComment = async (params: {
	matchupId: number;
	content: string;
	parentId?: number;
}): Promise<Comment> => {
	return api.post("/comments", params);
};

export const deleteComment = async (commentId: number): Promise<void> => {
	return api.delete(`/comments/${commentId}`);
};
