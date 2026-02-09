import express from "express";
import { adminLogin, verifyAdmin } from "../controllers/auth.controller.js";
import { protect, adminOnly } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/login", adminLogin);

// ✅ verify route (admin verify)
router.get("/verify", protect, adminOnly, verifyAdmin);

export default router;
