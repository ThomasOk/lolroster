import { Request, Response, NextFunction } from "express";
import { AppError } from "@/utils/error";
import { StatusCodes } from "http-status-codes";
import {
	verifyAccessToken,
	verifyRefreshToken,
	sendAuthTokens,
} from "@/utils/auth";
import { AuthService } from "@/services/auth-service";
import { db } from "@/db";
import { eq } from "drizzle-orm";
import { usersTable } from "@/db/schema/users";

declare global {
	namespace Express {
		interface Request {
			userId?: number;
		}
	}
}

export const requireAuth = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const accessToken = req.cookies.id;
		const refreshToken = req.cookies.rid;

		if (!accessToken && !refreshToken) {
			throw new AppError(StatusCodes.UNAUTHORIZED, "Non authentifié");
		}

		try {
			// verify access token
			const decoded = verifyAccessToken(accessToken);
			req.userId = decoded.userId;
			return next();
		} catch (error) {
			// try refresh token instead
			if (!refreshToken) {
				throw new AppError(StatusCodes.UNAUTHORIZED, "Non authentifié");
			}

			const decoded = verifyRefreshToken(refreshToken);

			// verify refresh token version
			const user = await db
				.select()
				.from(usersTable)
				.where(eq(usersTable.id, decoded.userId))
				.limit(1);

			if (
				!user[0] ||
				user[0].refreshTokenVersion !== decoded.refreshTokenVersion
			) {
				throw new AppError(StatusCodes.UNAUTHORIZED, "Token invalide");
			}

			// generate new tokens
			req.userId = decoded.userId;
			sendAuthTokens(res, user[0], "refresh");
			return next();
		}
	} catch (error) {
		next(error);
	}
};
