import express from "express";
import { protect } from "../middleware/auth.middleware.js";
import {
  createEvent,
  getEvents,
  deleteEvent
} from "../controllers/event.controller.js";

const router = express.Router();

router.get("/", getEvents);
router.post("/", protect, createEvent);
router.delete("/:id", protect, deleteEvent);

export default router;
