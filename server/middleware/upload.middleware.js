import multer from "multer";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

// ✅ __dirname ko ES Modules mein use karne ka tareeka
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Ensure folder exists
const ensureDir = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

// ✅ Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // 🔥 Ab folder hamesha exact sahi jagah banega: server/uploads/
    let folder = path.join(__dirname, "..", "uploads", "others");

    if (req.baseUrl.includes("hero")) {
      folder = path.join(__dirname, "..", "uploads", "hero");
    } else if (req.baseUrl.includes("gallery")) {
      folder = path.join(__dirname, "..", "uploads", "gallery");
    } else if (req.baseUrl.includes("events")) {
      folder = path.join(__dirname, "..", "uploads", "events");
    } else if (req.baseUrl.includes("team")) {
      folder = path.join(__dirname, "..", "uploads", "team");
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

// ✅ Allow image and pdf files
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/") || file.mimetype === "application/pdf") {
    cb(null, true);
  } else {
    cb(new Error("Only images and PDF files are allowed!"), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
});

export default upload;