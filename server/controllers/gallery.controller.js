import Gallery from "../models/Gallery.model.js";
import imagekit from "../config/imagekit.js"; // 🔥 NAYA

// GET all images
export const getGallery = async (req, res) => {
  const images = await Gallery.find().sort({ createdAt: -1 });
  res.json(images);
};

// UPLOAD
export const uploadGallery = async (req, res) => {
  try {
    const { title } = req.body;

    if (!req.file || !title) {
      return res.status(400).json({ message: "Image & title required" });
    }

    // ✅ ImageKit pe image upload karein
    const uploadRes = await imagekit.upload({
      file: req.file.buffer,
      fileName: `gallery-${Date.now()}-${req.file.originalname}`,
      folder: "/IEEE-VGU/Gallery"
    });

    const newImage = await Gallery.create({
      image: uploadRes.url, // Cloud URL save karein
      title
    });

    res.json(newImage);
  } catch (error) {
    res.status(500).json({ message: "Gallery upload failed", error });
  }
};

// DELETE
export const deleteGallery = async (req, res) => {
  await Gallery.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};