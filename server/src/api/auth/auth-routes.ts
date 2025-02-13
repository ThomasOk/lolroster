import express from "express";
import passport from "passport";
import { Strategy, Profile } from "passport-discord-auth";
//import { OAuth2Strategy as GoogleStrategy } from "passport-google-oauth20";
import { sendAuthTokens, clearAuthTokens } from "@/utils/auth";
import { AuthService } from "@/services/auth-service";
import { asyncHandler } from "@/utils/async-handler";

const router = express.Router();

// Config Passport Discord
passport.use(
	new Strategy(
		{
			clientId: process.env.DISCORD_CLIENT_ID!,
			clientSecret: process.env.DISCORD_CLIENT_SECRET!,
			callbackUrl: `${process.env.API_URL}/auth/discord/callback`,
			scope: ["identify", "email"],
		},
		async (_accessToken, _refreshToken, profile: Profile, done) => {
			try {
				const user = await AuthService.findOrCreateUser(
					profile._json.id as string,
					"discord",
					{
						email: profile._json.email,
						username: profile._json.username,
						...profile._json,
					}
				);
				done(null, { user, provider: "discord" });
			} catch (error) {
				done(error);
			}
		}
	)
);

// Routes
router.get("/discord", passport.authenticate("discord", { session: false }));

router.get(
	"/discord/callback",
	passport.authenticate("discord", { session: false }),
	(req, res) => {
		const { user, provider } = req.user as any;
		sendAuthTokens(res, user, provider);
		// Redirect to user info setup if needed
		const redirectUrl = user.displayName
			? process.env.FRONTEND_URL
			: `${process.env.FRONTEND_URL}/user-info-setup`;

		res.redirect(redirectUrl);
	}
);

router.post(
	"/logout",
	asyncHandler(async (req, res) => {
		if (req.userId) {
			await AuthService.invalidateRefreshToken(req.userId);
		}
		clearAuthTokens(res);
		res.json({ success: true });
	})
);

export default router;
