import { Request, Response } from "express";
import * as playerService from "./players-service";
import { insertPlayerSchema } from "../../db/schema/players";
import { AppError } from "@/utils/error";
import { StatusCodes } from "http-status-codes";

export const getAllPlayers = async (_req: Request, res: Response) => {
	const players = await playerService.getAllPlayers();
	res.json(players);
};

export const getPlayerById = async (req: Request, res: Response) => {
	const id = parseInt(req.params.id, 10);
	if (isNaN(id)) {
		throw new AppError(StatusCodes.BAD_REQUEST, "Invalid ID format");
	}
	const player = await playerService.getPlayerById(id);
	if (!player) {
		throw new AppError(StatusCodes.NOT_FOUND, "Player not found");
	}
	res.json(player);
};

export const createPlayer = async (req: Request, res: Response) => {
	const validatedData = insertPlayerSchema.parse(req.body);
	const newPlayer = await playerService.createPlayer(validatedData);
	res.status(StatusCodes.CREATED).json(newPlayer);
};

export const updatePlayer = async (req: Request, res: Response) => {
	const id = parseInt(req.params.id, 10);
	if (isNaN(id)) {
		throw new AppError(StatusCodes.BAD_REQUEST, "Invalid ID format");
	}
	const validatedData = insertPlayerSchema.partial().parse(req.body);
	const updatedPlayer = await playerService.updatePlayer(id, validatedData);
	if (!updatedPlayer) {
		throw new AppError(StatusCodes.NOT_FOUND, "Player not found");
	}
	res.json(updatedPlayer);
};

export const deletePlayer = async (req: Request, res: Response) => {
	const id = parseInt(req.params.id, 10);
	if (isNaN(id)) {
		throw new AppError(StatusCodes.BAD_REQUEST, "Invalid ID format");
	}
	const isDeleted = await playerService.deletePlayer(id);
	if (!isDeleted) {
		throw new AppError(StatusCodes.NOT_FOUND, "Player not found");
	}
	res.status(StatusCodes.NO_CONTENT).send();
};
