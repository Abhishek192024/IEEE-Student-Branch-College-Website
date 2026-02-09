import mongoose from "mongoose";

const heroSchema = new mongoose.Schema(
  {
    image: { type: String, required: true }, // /uploads/hero/xxx.png
    order: { type: Number, default: 0 }
  },
  { timestamps: true }
);

export default mongoose.model("Hero", heroSchema);
