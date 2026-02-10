import multer from "multer";
import path from "path";
import fs from "fs";

// ✅ Ensure folder exists
const ensureDir = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

// ✅ Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Base folder: server/uploads/others
    let folder = path.join(process.cwd(), "server", "uploads", "others");

    // ✅ Route-based folder selection
    if (req.baseUrl.includes("hero")) {
      folder = path.join(process.cwd(), "server", "uploads", "hero");
    } else if (req.baseUrl.includes("gallery")) {
      folder = path.join(process.cwd(), "server", "uploads", "gallery");
    } else if (req.baseUrl.includes("events")) {
      folder = path.join(process.cwd(), "server", "uploads", "events");
    } else if (req.baseUrl.includes("team")) {
      folder = path.join(process.cwd(), "server", "uploads", "team");
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

// ✅ Allow only image files
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed!"), false);
  }
};

// ✅ Multer instance
const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB
  },
});

export default upload;
