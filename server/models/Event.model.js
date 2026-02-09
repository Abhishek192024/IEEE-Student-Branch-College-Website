import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    tag: { type: String, required: true },
    category: {
      type: String,
      enum: ["computer", "wie", "mtt"],
      required: true,
    },

    // 🔥 NEW FIELD
    color: {
      type: String,
      enum: ["blue", "red", "green", "yellow"],
      default: "blue",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Event", eventSchema);
