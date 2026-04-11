import express from "express";
import {
  getEvents,
  getSingleEvent, // ✅ Imported
  createEvent,
  updateEvent,
  deleteEvent,
} from "../controllers/event.controller.js";

import { protect, adminOnly } from "../middleware/auth.middleware.js";
import upload from "../middleware/upload.middleware.js"; // ✅ Upload middleware import

const router = express.Router();

/* PUBLIC */
router.get("/", getEvents);
router.get("/:id", getSingleEvent); // ✅ Single event ke liye route

/* ADMIN */
// ✅ POST me multer fields configure kiye hain
router.post(
  "/",
  protect,
  adminOnly,
  upload.fields([
    { name: "poster", maxCount: 1 },
    { name: "pdfReport", maxCount: 1 },
    { name: "images", maxCount: 10 }, // 10 tak event photos upload ki limit
  ]),
  createEvent
);

router.put("/:id", protect, adminOnly, updateEvent);
router.delete("/:id", protect, adminOnly, deleteEvent);

export default router;