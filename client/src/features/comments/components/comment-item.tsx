import { Comment } from "@/features/comments/types/comment-types";
import { format, formatDistanceToNowStrict } from "date-fns";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

type CommentItemProps = {
	comment: Comment;
	onDelete: (commentId: number) => void;
	isDeleting: boolean;
};

export const CommentItem = ({ comment }: CommentItemProps) => {
	const getRelativeTime = () => {
		const distance = formatDistanceToNowStrict(new Date(comment.createdAt), {
			addSuffix: true,
		});

		if (distance === "0 seconds ago") {
			return "now";
		}
		return distance;
	};

	const relativeTime = getRelativeTime();

	const fullDate = format(new Date(comment.createdAt), "PPpp"); // ex: "Apr 29, 2023, 9:30 AM"

	const getAvatarColor = () => {
		if (!comment.user.userVote) return "bg-gray-200";
		return comment.user.userVote === "blue" ? "bg-sky-200" : "bg-red-200";
	};

	return (
		<div className="min-w-[400px] md:min-w-[600px] max-w-3xl mx-auto">
			<div className="p-4 border-2 border-border rounded-xl bg-white shadow-md">
				<div className="flex items-start gap-3">
					<div
						className={`w-10 h-10 rounded-full flex-shrink-0 border-2 border-border ${getAvatarColor()}`}
					/>

					<div className="flex-1 min-w-0">
						<div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
							<span className="font-bold truncate">
								{comment.user.displayName}
							</span>
							<TooltipProvider>
								<Tooltip>
									<TooltipTrigger>
										<span className="text-sm text-gray-500 truncate cursor-default">
											{relativeTime}
										</span>
									</TooltipTrigger>
									<TooltipContent
										side="bottom"
										className="bg-white border-2 border-border"
									>
										<p className="text-black">{fullDate}</p>
									</TooltipContent>
								</Tooltip>
							</TooltipProvider>
						</div>
						<div className="max-w-[280px] sm:max-w-full mt-1">
							<p className="text-sm break-words">{comment.content}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
