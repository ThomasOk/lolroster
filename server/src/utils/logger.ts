import pino from "pino";

const transport = pino.transport({
	targets: [
		// logs production
		process.env.NODE_ENV === "production"
			? {
					target: "pino/file",
					options: {
						destination: "logs/app.log",
						mkdir: true,
					},
			  }
			: {
					// Pretty printing en développement
					target: "pino-pretty",
					options: {
						colorize: true,
						levelFirst: true,
						translateTime: "yyyy-mm-dd HH:MM:ss",
					},
			  },
		// Logs d'erreurs séparés
		{
			target: "pino/file",
			options: {
				destination: "logs/error.log",
				mkdir: true,
				level: "error",
			},
		},
	],
});

export const logger = pino(
	{
		level: process.env.NODE_ENV === "production" ? "info" : "debug",
		redact: {
			paths: ["password", "token", "auth", "*.password", "*.token", "*.auth"],
			remove: true,
		},
	},
	transport
);

// Gestionnaire d'erreurs non interceptées
process.on("uncaughtException", (error) => {
	logger.fatal(error, "Uncaught exception");
	process.exit(1);
});

process.on("unhandledRejection", (error, promise) => {
	logger.fatal(
		{
			error,
			promise,
		},
		"Unhandled rejection"
	);
	process.exit(1);
});
