import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: "uploads/hero",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({
  storage,
  fileFilter: (_, file, cb) => {
    const allowed = /jpg|jpeg|png|webp/;
    allowed.test(file.mimetype) ? cb(null, true) : cb("Invalid image");
  }
});

export default upload;
