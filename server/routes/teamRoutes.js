import express from "express";
import Team from "../models/Team.js";

const router = express.Router();

router.get("/", async (req, res) => {
  res.json(await Team.find());
});

router.post("/", async (req, res) => {
  res.json(await Team.create(req.body));
});

export default router;
