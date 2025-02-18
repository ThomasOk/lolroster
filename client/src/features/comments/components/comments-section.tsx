import { useState } from "react";
import { useAuth } from "@/features/auth/context/auth-context";
import { AuthModal } from "@/features/auth/components/auth-modal";
import { Button } from "@/components/ui/button";
import { useComments } from "@/features/comments/hooks/use-comments";
import { CommentItem } from "@/features/comments/components/comment-item";
import EmojiPicker from "@/features/comments/components/emoji-picker";
import { Loader2 } from "lucide-react";

type CommentsSectionProps = {
	matchupId: number;
};

export const CommentsSection = ({ matchupId }: CommentsSectionProps) => {
	const auth = useAuth();
	const [newComment, setNewComment] = useState("");
	const [cursorPosition, setCursorPosition] = useState<number>(0);
	const {
		comments,
		isLoading,
		createComment,
		isCreating,
		deleteComment,
		isDeleting,
	} = useComments(matchupId);

	const handleEmojiSelect = (emoji: string) => {
		const comment = newComment;
		const newCursorPos = cursorPosition;
		const newText =
			comment.slice(0, newCursorPos) + emoji + comment.slice(newCursorPos);

		setNewComment(newText);
	};

	const handleTextareaSelect = (
		e: React.SyntheticEvent<HTMLTextAreaElement>
	) => {
		const textarea = e.target as HTMLTextAreaElement;
		setCursorPosition(textarea.selectionStart);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (newComment.trim()) {
			createComment(
				{ content: newComment },
				{
					onSuccess: () => {
						setNewComment("");
					},
				}
			);
		}
	};

	if (isLoading) {
		return (
			<div className="flex justify-center mt-8">
				<Loader2 className="h-8 w-8 animate-spin" />
			</div>
		);
	}

	return (
		<div className="mt-8 max-w-2xl mx-auto px-4">
			{auth?.user ? (
				<form onSubmit={handleSubmit} className="mb-8">
					<div className="relative">
						<textarea
							value={newComment}
							onChange={(e) => setNewComment(e.target.value)}
							onSelect={handleTextareaSelect}
							className="w-full p-3 border-2 border-border rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-black"
							placeholder="Write a comment..."
							rows={3}
						/>
						<div className="absolute bottom-3 right-3">
							<EmojiPicker onEmojiSelect={handleEmojiSelect} />
						</div>
					</div>
					<div className="flex justify-end mt-2">
						<Button type="submit" disabled={isCreating || !newComment.trim()}>
							{isCreating ? (
								<>
									<Loader2 className="h-4 w-4 animate-spin mr-2" />
									Posting...
								</>
							) : (
								"Post Comment"
							)}
						</Button>
					</div>
				</form>
			) : (
				<div className="mb-8 p-4">
					<p className="text-sm text-center">
						You need to be{" "}
						<AuthModal>
							<button className="underline font-medium hover:text-gray-600 transition-colors">
								logged in
							</button>
						</AuthModal>{" "}
						to comment.
					</p>
				</div>
			)}

			<div className="space-y-3">
				{comments.map((comment) => (
					<CommentItem
						key={comment.id}
						comment={comment}
						onDelete={deleteComment}
						isDeleting={isDeleting}
					/>
				))}

				{comments.length === 0 && (
					<p className="text-center text-gray-500 py-4">
						No comments yet. Be the first to comment!
					</p>
				)}
			</div>
		</div>
	);
};
