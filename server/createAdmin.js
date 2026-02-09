import mongoose from "mongoose";
import dotenv from "dotenv";
import Admin from "./models/Admin.model.js";

dotenv.config();

await mongoose.connect(process.env.MONGO_URI);

await Admin.create({
  username: "auas",
  password: "auas1234"
});

console.log("✅ Admin user created successfully");
process.exit();
