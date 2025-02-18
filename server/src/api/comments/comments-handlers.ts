import { Request, Response } from "express";
import * as commentService from "./comments-service";
import { AppError } from "@/utils/error";
import { StatusCodes } from "http-status-codes";
import { usersTable } from "@/db/schema/users";
import { db } from "@/db";
import { and, eq } from "drizzle-orm";
import { votesTable } from "@/db/schema";

export const getMatchupComments = async (req: Request, res: Response) => {
	const matchupId = parseInt(req.params.matchupId);

	if (isNaN(matchupId)) {
		throw new AppError(StatusCodes.BAD_REQUEST, "Invalid matchup ID");
	}

	const comments = await commentService.getMatchupComments(matchupId);

	const commentsWithUserInfo = await Promise.all(
		comments.map(async (comment) => {
			const user = await db
				.select({
					id: usersTable.id,
					displayName: usersTable.displayName,
				})
				.from(usersTable)
				.where(eq(usersTable.id, comment.userId))
				.limit(1);

			const vote = await db
				.select({
					team: votesTable.team,
				})
				.from(votesTable)
				.where(
					and(
						eq(votesTable.userId, comment.userId),
						eq(votesTable.matchupId, matchupId)
					)
				)
				.limit(1);

			return {
				...comment,
				user: {
					...user[0],
					userVote: vote[0]?.team || null,
				},
			};
		})
	);

	res.json(commentsWithUserInfo);
};

export const createComment = async (req: Request, res: Response) => {
	const { matchupId, content, parentId } = req.body;
	const userId = req.userId;

	if (!userId) {
		throw new AppError(
			StatusCodes.UNAUTHORIZED,
			"You must be logged in to comment"
		);
	}

	if (!content || content.trim().length === 0) {
		throw new AppError(
			StatusCodes.BAD_REQUEST,
			"Comment content cannot be empty"
		);
	}

	if (!matchupId) {
		throw new AppError(StatusCodes.BAD_REQUEST, "Matchup ID is required");
	}

	const comment = await commentService.createComment(
		userId,
		matchupId,
		content.trim(),
		parentId
	);

	const user = await db
		.select({
			id: usersTable.id,
			displayName: usersTable.displayName,
		})
		.from(usersTable)
		.where(eq(usersTable.id, userId))
		.limit(1);

	const commentWithUser = {
		...comment,
		user: user[0],
	};

	res.status(StatusCodes.CREATED).json(commentWithUser);
};

export const deleteComment = async (req: Request, res: Response) => {
	const commentId = parseInt(req.params.commentId);
	const userId = req.userId;

	if (!userId) {
		throw new AppError(
			StatusCodes.UNAUTHORIZED,
			"You must be logged in to delete a comment"
		);
	}

	if (isNaN(commentId)) {
		throw new AppError(StatusCodes.BAD_REQUEST, "Invalid comment ID");
	}

	const deletedComment = await commentService.deleteComment(userId, commentId);

	if (!deletedComment) {
		throw new AppError(
			StatusCodes.NOT_FOUND,
			"Comment not found or you're not authorized to delete it"
		);
	}

	res.status(StatusCodes.NO_CONTENT).send();
};
