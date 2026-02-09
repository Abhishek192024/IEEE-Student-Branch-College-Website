import express from "express";
import upload from "../middleware/upload.middleware.js";
import { getEvents, addEvent, deleteEvent } from "../controllers/event.controller.js";

const router = express.Router();

router.get("/", getEvents);
router.post("/", upload.single("image"), addEvent);
router.delete("/:id", deleteEvent);

export default router;
