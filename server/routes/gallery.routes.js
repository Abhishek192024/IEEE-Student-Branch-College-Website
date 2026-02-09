import express from "express";
import upload from "../middleware/upload.middleware.js";
import {
  getGallery,
  uploadGallery,
  deleteGallery
} from "../controllers/gallery.controller.js";

import { protect, adminOnly } from "../middleware/auth.middleware.js";

const router = express.Router();

// ✅ PUBLIC
router.get("/", getGallery);

// ✅ ADMIN ONLY
router.post("/", protect, adminOnly, upload.single("image"), uploadGallery);
router.delete("/:id", protect, adminOnly, deleteGallery);

export default router;
