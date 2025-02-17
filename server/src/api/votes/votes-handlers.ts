import { Request, Response } from "express";
import { AppError } from "@/utils/error";
import { StatusCodes } from "http-status-codes";
import * as voteService from "./votes-service";
import * as matchupService from "../matchups/matchups-service";
import { db } from "@/db";

export const addVote = async (req: Request, res: Response) => {
	const { matchupId, team } = req.body;
	const userId = req.userId;

	if (!userId) {
		throw new AppError(
			StatusCodes.UNAUTHORIZED,
			"You must be logged in to vote"
		);
	}

	if (!matchupId) {
		throw new AppError(StatusCodes.BAD_REQUEST, "Missing matchupId");
	}

	if (team !== "blue" && team !== "red") {
		throw new AppError(StatusCodes.BAD_REQUEST, "Invalid team value");
	}

	const hasVoted = await voteService.hasUserVoted(userId, matchupId);
	if (hasVoted) {
		throw new AppError(
			StatusCodes.BAD_REQUEST,
			"You have already voted for this matchup"
		);
	}

	const updatedMatchup = await voteService.createVote(userId, matchupId, team);

	// Récupérer l'information complète du matchup
	const team1 = await matchupService.getTeamPlayers(updatedMatchup.team1);
	const team2 = await matchupService.getTeamPlayers(updatedMatchup.team2);
	const userVote = await voteService.getUserVote(userId, matchupId);

	res.json({
		...updatedMatchup,
		team1,
		team2,
		userVote: userVote?.team,
	});
};

export const getUserVoteForMatchup = async (req: Request, res: Response) => {
	const matchupId = parseInt(req.params.matchupId);
	const userId = req.userId;

	if (!userId) {
		throw new AppError(StatusCodes.UNAUTHORIZED, "You must be logged in");
	}

	if (isNaN(matchupId)) {
		throw new AppError(StatusCodes.BAD_REQUEST, "Invalid matchup ID");
	}

	const vote = await voteService.getUserVote(userId, matchupId);
	res.json(vote);
};
