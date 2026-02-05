import express from "express";
import { protect } from "../middleware/auth.middleware.js";
import {
  addImage,
  getGallery,
  deleteImage
} from "../controllers/gallery.controller.js";

const router = express.Router();

router.get("/", getGallery);
router.post("/", protect, addImage);
router.delete("/:id", protect, deleteImage);

export default router;
