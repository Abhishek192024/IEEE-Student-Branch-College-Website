import multer from "multer";
import path from "path";
import fs from "fs";

/**
 * Utility: ensure folder exists
 */
const ensureDir = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

/**
 * Multer storage
 * - Automatically decides folder based on route
 * - /api/hero      -> uploads/hero
 * - /api/gallery   -> uploads/gallery
 * - future (events/team) -> uploads/others
 */
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let folder = "uploads/others";

    // 👇 route-based folder selection (NO HERO BREAK)
    if (req.baseUrl.includes("hero")) {
      folder = "uploads/hero";
    } else if (req.baseUrl.includes("gallery")) {
      folder = "uploads/gallery";
    }

    ensureDir(folder);
    cb(null, folder);
  },

  filename: (req, file, cb) => {
    const uniqueName =
      Date.now() +
      "-" +
      Math.round(Math.random() * 1e9) +
      path.extname(file.originalname);

    cb(null, uniqueName);
  },
});

/**
 * File filter: only images allowed
 */
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed"), false);
  }
};

/**
 * Multer instance
 * 👉 DEFAULT EXPORT (important, warna crash hoga)
 */
const upload = multer({
  storage,
  fileFilter,
});

export default upload;
