import express from "express";
import upload from "../middleware/upload.middleware.js";
import { getTeam, addMember, deleteMember } from "../controllers/team.controller.js";

import { protect, adminOnly } from "../middleware/auth.middleware.js";

const router = express.Router();

// ✅ PUBLIC
router.get("/", getTeam);

// ✅ ADMIN ONLY
router.post("/", protect, adminOnly, upload.single("photo"), addMember);
router.delete("/:id", protect, adminOnly, deleteMember);

export default router;
