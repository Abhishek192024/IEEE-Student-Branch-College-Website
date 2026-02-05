import express from "express";
import { protect } from "../middleware/auth.middleware.js";
import {
  addMember,
  getTeam,
  deleteMember
} from "../controllers/team.controller.js";

const router = express.Router();

router.get("/", getTeam);
router.post("/", protect, addMember);
router.delete("/:id", protect, deleteMember);

export default router;
