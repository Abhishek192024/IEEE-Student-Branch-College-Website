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
    // 🔥 ENUM UPDATED (frontend options ke hisaab se)
    color: {
      type: String,
      enum: ["blue", "red", "green", "yellow", "rose", "purple", "emerald"],
      default: "blue",
    },

    // 🔥 NEW FIELDS FOR FILES
    poster: { type: String },       // Poster image ka path
    pdfReport: { type: String },    // PDF file ka path
    images: [{ type: String }],     // Multiple images ka array
  },
  { timestamps: true }
);

export default mongoose.model("Event", eventSchema);