import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import heroRoutes from "./routes/hero.routes.js";
import authRoutes from "./routes/auth.routes.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use("/api/hero", heroRoutes);
app.use("/api/auth", authRoutes);

app.listen(5000, () => {
  console.log("🚀 Server running on 5000");
});
