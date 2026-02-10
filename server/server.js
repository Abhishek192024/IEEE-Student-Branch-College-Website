import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import heroRoutes from "./routes/hero.routes.js";
import authRoutes from "./routes/auth.routes.js";
import galleryRoutes from "./routes/gallery.routes.js";
import eventRoutes from "./routes/event.routes.js";
import teamRoutes from "./routes/team.routes.js";

import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
connectDB();

const app = express();

// ✅ ESM me __dirname fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Render / Production me PORT automatic hota hai
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// ✅ uploads folder serve
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ✅ API routes
app.use("/api/hero", heroRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/team", teamRoutes);

// ==============================
// ✅ FRONTEND SERVE (Vite dist)
// ==============================
app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on ${PORT}`);
});
