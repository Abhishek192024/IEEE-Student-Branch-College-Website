import Gallery from "../models/Gallery.model.js";

export const addImage = async (req, res) => {
  const image = await Gallery.create(req.body);
  res.json(image);
};

export const getGallery = async (req, res) => {
  const images = await Gallery.find().sort({ createdAt: -1 });
  res.json(images);
};

export const deleteImage = async (req, res) => {
  await Gallery.findByIdAndDelete(req.params.id);
  res.json({ message: "Image deleted" });
};
