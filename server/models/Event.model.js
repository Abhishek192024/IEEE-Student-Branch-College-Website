import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    image: String,
    showInHero: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true } // 🔥 NEW event = HERO FIRST
);

export default mongoose.model("Event", eventSchema);
  