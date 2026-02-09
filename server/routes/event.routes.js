import express from "express";
import {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} from "../controllers/event.controller.js";

import { protect, adminOnly } from "../middleware/auth.middleware.js";

const router = express.Router();

/* PUBLIC */
router.get("/", getEvents);

/* ADMIN */
router.post("/", protect, adminOnly, createEvent);
router.put("/:id", protect, adminOnly, updateEvent);
router.delete("/:id", protect, adminOnly, deleteEvent);

export default router;
