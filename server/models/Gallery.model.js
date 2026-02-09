import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema(
  {
    image: { type: String, required: true },
    title: { type: String, required: true }, // 👈 EVENT NAME / TEXT
    createdAt: { type: Date, default: Date.now }
  }
);

export default mongoose.model("Gallery", gallerySchema);
