import mongoose from "mongoose";

const TeamSchema = new mongoose.Schema({
  name: String,
  role: String
});

export default mongoose.model("Team", TeamSchema);
