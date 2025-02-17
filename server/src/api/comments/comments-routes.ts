import express from "express";
import { asyncHandler } from "@/utils/async-handler";
import { requireAuth, authOptional } from "@/middleware/auth";
import * as commentsHandlers from "./comments-handlers";
import { validateRequest } from "@/middleware/validate";
import { createCommentSchema } from "@/db/schema/comments";

const router = express.Router();

// Routes publiques (accessible sans authentification)
router.get(
	"/matchup/:matchupId",
	authOptional,
	asyncHandler(commentsHandlers.getMatchupComments)
);

// Routes protégées (nécessite une authentification)
router.post(
	"/",
	requireAuth,
	validateRequest(createCommentSchema),
	asyncHandler(commentsHandlers.createComment)
);

router.delete(
	"/:commentId",
	requireAuth,
	asyncHandler(commentsHandlers.deleteComment)
);

export default router;
