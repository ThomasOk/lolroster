import express from "express";
import { asyncHandler } from "@/utils/async-handler";
import { validateRequest } from "@/middleware/validate";
import { updateDisplayNameSchema } from "@/db/schema/users";
import { requireAuth } from "@/middleware/auth";
import * as userHandlers from "@/api/users/users-handlers";

const router = express.Router();

router.patch(
	"/me/user-update-info",
	requireAuth,
	validateRequest(updateDisplayNameSchema),
	asyncHandler(userHandlers.updateDisplayName)
);

router.get("/me", requireAuth, asyncHandler(userHandlers.getCurrentUser));

export default router;
