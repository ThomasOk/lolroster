import express from "express";
import { asyncHandler } from "@/utils/async-handler";
import * as matchupsHandlers from "@/api/matchups/matchups-handlers";
import { authOptional } from "@/middleware/auth";
//import { requireAuth } from "@/middleware/auth";

const router = express.Router();

router.get(
	"/current",
	authOptional,
	asyncHandler(matchupsHandlers.getCurrentMatchup)
);

//router.post("/vote", asyncHandler(matchupsHandlers.updateVotes));
//router.post("/vote", requireAuth, asyncHandler(matchupsHandlers.updateVotes));

export default router;
