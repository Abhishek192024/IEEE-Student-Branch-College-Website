import multer from "multer";

// ✅ Multer memory storage (File ab RAM me save hogi, Disk pe nahi)
const storage = multer.memoryStorage();

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
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
});

export default upload;