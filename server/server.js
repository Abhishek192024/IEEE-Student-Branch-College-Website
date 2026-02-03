import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";
import teamRoutes from "./routes/teamRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"));

app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/team", teamRoutes);

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
