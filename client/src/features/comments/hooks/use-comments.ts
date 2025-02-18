import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import * as commentsService from "@/features/comments/api/comments-service";
import { toast } from "sonner";

export const useComments = (matchupId: number) => {
	const queryClient = useQueryClient();

	const {
		data: comments = [],
		isLoading,
		error,
	} = useQuery({
		queryKey: ["comments", matchupId],
		queryFn: () => commentsService.getMatchupComments(matchupId),
		refetchInterval: 30000,
		staleTime: 30000,
	});

	const createCommentMutation = useMutation({
		mutationFn: (params: { content: string; parentId?: number }) =>
			commentsService.createComment({
				matchupId,
				...params,
			}),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["comments", matchupId] });
			toast.success("Comment posted successfully!");
		},
		onError: () => {
			toast.error("Failed to post comment");
		},
	});

	const deleteCommentMutation = useMutation({
		mutationFn: commentsService.deleteComment,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["comments", matchupId] });
			toast.success("Comment deleted");
		},
		onError: () => {
			toast.error("Failed to delete comment");
		},
	});

	return {
		comments,
		isLoading,
		error,
		createComment: createCommentMutation.mutate,
		isCreating: createCommentMutation.isPending,
		deleteComment: deleteCommentMutation.mutate,
		isDeleting: deleteCommentMutation.isPending,
	};
};
