import express from "express";
import { asyncHandler } from "@/utils/async-handler";
import { requireAuth } from "@/middleware/auth";
import * as votesHandlers from "./votes-handlers";

const router = express.Router();

router.post("/", requireAuth, asyncHandler(votesHandlers.addVote));
router.get(
	"/matchup/:matchupId",
	requireAuth,
	asyncHandler(votesHandlers.getUserVoteForMatchup)
);

export default router;
