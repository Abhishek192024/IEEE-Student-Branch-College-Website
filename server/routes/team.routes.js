import express from "express";
import { getTeam, addMember, updateMember, deleteMember } from "../controllers/team.controller.js";
import upload from "../middleware/upload.middleware.js"; 

// 🔥 YAHAN FIX KIYA HAI: Sahi file (adminAuth.middleware.js) aur sahi function (adminAuth) import kiya
import { adminAuth } from "../middleware/adminAuth.middleware.js"; 

const router = express.Router();

router.get("/", getTeam);

// 🔥 YAHAN BHI FIX KIYA HAI: verifyAdmin ki jagah adminAuth laga diya
router.post("/", adminAuth, upload.single("image"), addMember);
router.put("/:id", adminAuth, upload.single("image"), updateMember);
router.delete("/:id", adminAuth, deleteMember);

export default router;