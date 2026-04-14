import mongoose from "mongoose";

const upcomingEventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  googleFormLink: { type: String },
  poster: { type: String },
  deadline: { type: Date, required: true },
}, { timestamps: true });

export default mongoose.model("UpcomingEvent", upcomingEventSchema);