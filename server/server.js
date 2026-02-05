import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import authRoutes from "./routes/auth.routes.js";
import eventRoutes from "./routes/event.routes.js";
import teamRoutes from "./routes/team.routes.js";
import galleryRoutes from "./routes/gallery.routes.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/team", teamRoutes);
app.use("/api/gallery", galleryRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Server running on ${process.env.PORT} 🚀`)
);
