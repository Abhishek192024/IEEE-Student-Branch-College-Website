import express from "express";
import { updateUpcomingEvent, getUpcomingEvent, deleteUpcomingEvent } from "../controllers/upcomingEvent.controller.js";
import upload from "../middleware/upload.middleware.js";
import { adminAuth } from "../middleware/adminAuth.middleware.js";

const router = express.Router();

router.get("/", getUpcomingEvent);
router.post("/update", adminAuth, upload.single("image"), updateUpcomingEvent);
router.delete("/", adminAuth, deleteUpcomingEvent); // 🔥 Ab cancel button kaam karega

export default router;