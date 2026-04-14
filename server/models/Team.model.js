import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, default: "Member" }, // Role (e.g., Chair, Advisor)
  category: { 
    type: String, 
    required: true,
    enum: ["advisor", "core", "supportive"] // 3 Categories
  },
  image: { type: String, default: "" }, // Cloudinary/ImageKit link ya local path
  email: { type: String },
  phone: { type: String },
  linkedin: { type: String },
  order: { type: Number, default: 0 } // Sort karne ke liye
}, { timestamps: true });

export default mongoose.model("Team", teamSchema);