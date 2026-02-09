import Hero from "../models/Hero.model.js";
import fs from "fs";

export const getHeroes = async (req, res) => {
  const heroes = await Hero.find().sort({ order: -1 });
  res.json(heroes);
};

export const addHero = async (req, res) => {
  const count = await Hero.countDocuments();
  const hero = await Hero.create({
    image: `/uploads/hero/${req.file.filename}`,
    order: count + 1
  });
  res.json(hero);
};

export const deleteHero = async (req, res) => {
  const hero = await Hero.findById(req.params.id);
  if (!hero) return res.status(404).json({ msg: "Not found" });

  fs.unlinkSync(`.${hero.image}`);
  await hero.deleteOne();
  res.json({ success: true });
};

export const reorderHero = async (req, res) => {
  const { id, order } = req.body;
  await Hero.findByIdAndUpdate(id, { order });
  res.json({ success: true });
};
