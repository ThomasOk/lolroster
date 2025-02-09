import express from "express";
import * as playersHandlers from "@/api/players/players-handlers";
import { validateRequest } from "@/middleware/validate";
import { insertPlayerSchema } from "@/db/schema/players";
import { asyncHandler } from "@/utils/async-handler";

const router = express.Router();

router.get("/", asyncHandler(playersHandlers.getAllPlayers));
router.get("/:id", asyncHandler(playersHandlers.getPlayerById));
router.post(
	"/",
	validateRequest(insertPlayerSchema),
	asyncHandler(playersHandlers.createPlayer)
);
router.patch(
	"/:id",
	validateRequest(insertPlayerSchema.partial()),
	asyncHandler(playersHandlers.updatePlayer)
);
router.delete("/:id", asyncHandler(playersHandlers.deletePlayer));

export default router;
