import pinoHttp, { HttpLogger, Options } from "pino-http";
import { IncomingMessage, ServerResponse } from "http";
import { logger } from "@/utils/logger";
import { LevelWithSilent } from "pino";

const options: Options = {
	logger,

	customLogLevel: (req, res, error): LevelWithSilent => {
		if (error) return "error";
		if (res.statusCode >= 500) return "error";
		if (res.statusCode >= 400) return "warn";
		if (res.statusCode >= 300) return "silent";
		return "info";
	},

	customProps: (req, res) => {
		return {
			userId: (req as any).userId,
			statusCode: res.statusCode,
			...(process.env.NODE_ENV !== "production" && {
				body: (req as any).body,
				query: (req as any).query,
				params: (req as any).params,
			}),
		};
	},

	redact: {
		paths: [
			"req.headers.authorization",
			"req.headers.cookie",
			"req.body.password",
			"req.body.token",
		],
		remove: true,
	},

	autoLogging: {
		ignore: (req) => req.url === "/health",
	},
};

export const requestLogger: HttpLogger = pinoHttp(options);
