import { Request, Response } from "express";
import * as matchupService from "@/api/matchups/matchups-service";
import { AppError } from "@/utils/error";
import { StatusCodes } from "http-status-codes";
import * as votesService from "@/api/votes/votes-service";

export const getCurrentMatchup = async (req: Request, res: Response) => {
	const matchup = await matchupService.getDailyMatchup();

	if (!matchup) {
		throw new AppError(StatusCodes.NOT_FOUND, "No matchup found");
	}

	const team1 = await matchupService.getTeamPlayers(matchup.team1);
	const team2 = await matchupService.getTeamPlayers(matchup.team2);

	let userVote = null;

	if (req.userId) {
		const vote = await votesService.getUserVote(req.userId, matchup.id);
		if (vote) {
			userVote = vote.team;
		}
	}

	res.json({
		...matchup,
		team1,
		team2,
		userVote,
	});
};

export const updateVotes = async (req: Request, res: Response) => {
	try {
		const { matchupId, team } = req.body;

		if (!matchupId) {
			throw new AppError(StatusCodes.BAD_REQUEST, "Missing matchupId");
		}

		if (team !== "blue" && team !== "red") {
			throw new AppError(StatusCodes.BAD_REQUEST, "Invalid team value");
		}

		const updatedMatchups = await matchupService.updateVotes(matchupId, team);

		if (!updatedMatchups || updatedMatchups.length === 0) {
			throw new AppError(StatusCodes.NOT_FOUND, "Matchup not found");
		}

		const updatedMatchup = updatedMatchups[0];
		const team1 = await matchupService.getTeamPlayers(updatedMatchup.team1);
		const team2 = await matchupService.getTeamPlayers(updatedMatchup.team2);

		return res.json({
			id: updatedMatchup.id,
			blueVotes: updatedMatchup.blueVotes,
			redVotes: updatedMatchup.redVotes,
		});
	} catch (error) {
		console.error("Error in updateVotes:", error);
		if (!res.headersSent) {
			if (error instanceof AppError) {
				return res.status(error.statusCode).json({
					status: "error",
					message: error.message,
				});
			}
			return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
				status: "error",
				message: "Internal server error",
			});
		}
	}
};
