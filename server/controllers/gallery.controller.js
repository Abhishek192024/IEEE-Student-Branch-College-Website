import Gallery from "../models/Gallery.model.js";

// GET all images
export const getGallery = async (req, res) => {
  const images = await Gallery.find().sort({ createdAt: -1 });
  res.json(images);
};

// UPLOAD
export const uploadGallery = async (req, res) => {
  const { title } = req.body;

  if (!req.file || !title) {
    return res.status(400).json({ message: "Image & title required" });
  }

  const newImage = await Gallery.create({
    image: `/uploads/gallery/${req.file.filename}`,
    title
  });

  res.json(newImage);
};

// DELETE
export const deleteGallery = async (req, res) => {
  await Gallery.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};
