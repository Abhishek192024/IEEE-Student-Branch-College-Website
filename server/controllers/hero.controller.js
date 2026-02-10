import Hero from "../models/Hero.model.js";
import fs from "fs";
import path from "path";

// ✅ GET HEROES
export const getHeroes = async (req, res) => {
  const heroes = await Hero.find().sort({ order: 1 });
  res.json(heroes);
};

// ✅ ADD HERO
export const addHero = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ msg: "Image is required" });
    }

    // order set
    const last = await Hero.findOne().sort({ order: -1 });
    const nextOrder = last ? last.order + 1 : 1;

    // ✅ IMPORTANT: save path that matches server static
    const hero = await Hero.create({
      image: `/uploads/hero/${req.file.filename}`,
      order: nextOrder,
    });

    res.json(hero);
  } catch (error) {
    res.status(500).json({ msg: "Server error", error: error.message });
  }
};

// ✅ DELETE HERO
export const deleteHero = async (req, res) => {
  try {
    const hero = await Hero.findById(req.params.id);

    if (!hero) {
      return res.status(404).json({ msg: "Not found" });
    }

    // hero.image = "/uploads/hero/xxx.jpg"
    // Actual file is in: server/uploads/hero/xxx.jpg
    const filePath = path.join(
      process.cwd(),
      "server",
      hero.image.replace("/uploads/", "uploads/")
    );

    // ✅ no crash
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    } else {
      console.log("⚠️ File not found:", filePath);
    }

    await hero.deleteOne();
    res.json({ success: true });
  } catch (error) {
    console.log("❌ Delete Error:", error.message);
    res.status(500).json({ msg: "Server error", error: error.message });
  }
};

// ✅ REORDER
export const reorderHero = async (req, res) => {
  try {
    const { id, order } = req.body;

    await Hero.findByIdAndUpdate(id, { order });

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ msg: "Server error", error: error.message });
  }
};
