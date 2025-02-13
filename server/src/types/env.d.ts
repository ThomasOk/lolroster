declare global {
	namespace NodeJS {
		interface ProcessEnv {
			PORT: string;
			NODE_ENV: "development" | "production";
			DOMAIN: string;
			DATABASE_URL: string;
			DISCORD_CLIENT_ID: string;
			DISCORD_CLIENT_SECRET: string;
			GOOGLE_CLIENT_ID: string;
			GOOGLE_CLIENT_SECRET: string;
			ACCESS_TOKEN_SECRET: string;
			REFRESH_TOKEN_SECRET: string;
			FRONTEND_URL: string;
			API_URL: string;
		}
	}
}

export {};
