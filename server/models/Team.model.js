import mongoose from "mongoose";

const teamSchema = new mongoose.Schema(
  {
    name: String,
    role: String,
    chapter: {
      type: String,
      enum: ["main", "cs", "wie", "mtt"],
      default: "main"
    },
    photo: String,
    order: { type: Number, default: 0 }
  },
  { timestamps: true }
);

export default mongoose.model("Team", teamSchema);
