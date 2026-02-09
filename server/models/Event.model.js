import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    date: String,
    category: {
      type: String,
      enum: ["general", "cs", "wie", "mtt"],
      default: "general"
    },
    image: String
  },
  { timestamps: true }
);

export default mongoose.model("Event", eventSchema);
