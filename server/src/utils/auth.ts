import * as jwt from "jsonwebtoken";
import { Response } from "express";
import { User } from "@/db/schema/users";

export type AccessTokenData = {
	userId: number;
	provider: string;
};

export type RefreshTokenData = {
	userId: number;
	refreshTokenVersion: number;
};

export const cookieOptions = {
	httpOnly: true,
	secure: process.env.NODE_ENV === "production",
	sameSite: "none" as const,
	path: "/",
	domain:
		process.env.NODE_ENV === "production"
			? `.${process.env.DOMAIN}`
			: undefined,
	maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
};

export const createTokens = (user: User, provider: string) => {
	const accessToken = jwt.sign(
		{ userId: user.id, provider },
		process.env.ACCESS_TOKEN_SECRET!,
		{ expiresIn: "15m" }
	);

	const refreshToken = jwt.sign(
		{ userId: user.id, refreshTokenVersion: user.refreshTokenVersion },
		process.env.REFRESH_TOKEN_SECRET!,
		{ expiresIn: "30d" }
	);

	return { accessToken, refreshToken };
};

export const sendAuthTokens = (res: Response, user: User, provider: string) => {
	const { accessToken, refreshToken } = createTokens(user, provider);
	res.cookie("id", accessToken, cookieOptions);
	res.cookie("rid", refreshToken, cookieOptions);
};

export const clearAuthTokens = (res: Response) => {
	res.clearCookie("id", cookieOptions);
	res.clearCookie("rid", cookieOptions);
};

export const verifyAccessToken = (token: string): AccessTokenData => {
	return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!) as AccessTokenData;
};

export const verifyRefreshToken = (token: string): RefreshTokenData => {
	return jwt.verify(
		token,
		process.env.REFRESH_TOKEN_SECRET!
	) as RefreshTokenData;
};
