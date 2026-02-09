import mongoose from "mongoose";
import dotenv from "dotenv";
import Hero from "./models/Hero.model.js";

dotenv.config();

const seedHeroes = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    await Hero.deleteMany(); // purana hero data clear

    const heroes = [
      { image: "hero1.png" },
      { image: "hero2.png" },
      { image: "hero3.png" },
      { image: "hero4.png" },
    ];

    await Hero.insertMany(heroes);

    console.log("✅ Hero images seeded successfully");
    process.exit();
  } catch (error) {
    console.error("❌ Seeding failed", error);
    process.exit(1);
  }
};

seedHeroes();
