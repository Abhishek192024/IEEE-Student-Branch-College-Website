import express from "express";
import upload from "../middleware/upload.middleware.js";
import {
  getGallery,
  uploadGallery,
  deleteGallery
} from "../controllers/gallery.controller.js";

const router = express.Router();

router.get("/", getGallery);
router.post("/", upload.single("image"), uploadGallery);
router.delete("/:id", deleteGallery);

export default router;
