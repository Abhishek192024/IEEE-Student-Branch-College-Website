import express from "express";
import { loginAdmin } from "../controllers/auth.controller.js";

const router = express.Router();

// Admin Login
// POST http://localhost:5000/api/auth/login
router.post("/login", loginAdmin);

export default router;
