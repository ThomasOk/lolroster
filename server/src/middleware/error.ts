import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import { AppError } from "@/utils/error";
import { StatusCodes } from "http-status-codes";
import { logger } from "@/utils/logger";
import { ZodError } from "zod";

export const errorHandler: ErrorRequestHandler = (
	err: Error | AppError | ZodError,
	req: Request,
	res: Response,
	_next: NextFunction
): void => {
	// Log error details avec contexte
	const logContext = {
		err,
		path: req.path,
		method: req.method,
		params: req.params,
		query: req.query,
		body: req.body,
		userId: req.userId,
		ip: req.ip,
		userAgent: req.get("user-agent"),
	};

	if (err instanceof AppError) {
		logger.error(logContext, `AppError: ${err.message}`);
		res.status(err.statusCode).json({
			status: "error",
			message: err.message,
			code: err.statusCode,
		});
		return;
	}

	if (err instanceof ZodError) {
		logger.error(logContext, `Validation Error: ${err.message}`);
		res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
			status: "error",
			message: "Validation error",
			errors: err.errors,
			code: StatusCodes.UNPROCESSABLE_ENTITY,
		});
		return;
	}

	// Erreurs inconnues
	logger.error(logContext, `Unhandled Error: ${err.message}`);
	const isProduction = process.env.NODE_ENV === "production";
	res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
		status: "error",
		message: isProduction ? "Internal server error" : err.message,
		code: StatusCodes.INTERNAL_SERVER_ERROR,
		...(isProduction ? {} : { stack: err.stack }),
	});
};
