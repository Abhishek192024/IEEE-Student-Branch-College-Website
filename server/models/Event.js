import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: String
});

export default mongoose.model("Event", EventSchema);
