import express from "express";
import { asyncHandler } from "@/utils/async-handler";
import * as matchupsHandlers from "@/api/matchups/matchups-handlers";

const router = express.Router();

router.get("/current", asyncHandler(matchupsHandlers.getCurrentMatchup));

router.post("/vote", asyncHandler(matchupsHandlers.updateVotes));

export default router;
