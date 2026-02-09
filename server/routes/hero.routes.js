import express from "express";
import upload from "../middleware/upload.middleware.js";
import {
  getHeroes,
  addHero,
  deleteHero,
  reorderHero
} from "../controllers/hero.controller.js";

const router = express.Router();

router.get("/", getHeroes);
router.post("/", upload.single("image"), addHero);
router.delete("/:id", deleteHero);
router.put("/order", reorderHero);

export default router;
