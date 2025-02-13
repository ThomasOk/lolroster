import { Request, Response } from "express";
import { AppError } from "@/utils/error";
import { StatusCodes } from "http-status-codes";
import * as userService from "@/api/users/users-service";

export const updateDisplayName = async (req: Request, res: Response) => {
	const { displayName } = req.body;
	const userId = req.userId;

	if (!userId) {
		throw new AppError(StatusCodes.UNAUTHORIZED, "Non authentifié");
	}

	const updatedUser = await userService.updateDisplayName(userId, displayName);
	res.json(updatedUser);
};

export const getCurrentUser = async (req: Request, res: Response) => {
	const userId = req.userId;

	if (!userId) {
		throw new AppError(StatusCodes.UNAUTHORIZED, "Non authentifié");
	}

	const user = await userService.getUserById(userId);
	res.json(user);
};
