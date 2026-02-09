import express from "express";
import upload from "../middleware/upload.middleware.js";
import { getTeam, addMember, deleteMember } from "../controllers/team.controller.js";

const router = express.Router();

router.get("/", getTeam);
router.post("/", upload.single("photo"), addMember);
router.delete("/:id", deleteMember);

export default router;
