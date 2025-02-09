import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import { AppError } from "@/utils/error";
import { StatusCodes } from "http-status-codes";

export const errorHandler: ErrorRequestHandler = (
	err: Error | AppError,
	_req: Request,
	res: Response,
	_next: NextFunction
): void => {
	if (err instanceof AppError) {
		res.status(err.statusCode).json({
			status: "error",
			message: err.message,
		});
	}

	console.error("Unhandled error:", err);
	res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
		status: "error",
		message: "Internal server error",
	});
};
