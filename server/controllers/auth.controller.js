import jwt from "jsonwebtoken";
import Admin from "../models/Admin.model.js";

export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // ⚠️ If you use bcrypt, replace this line
    if (admin.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: admin._id, role: "admin" },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      message: "Login success",
      token,
      role: "admin",
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// ✅ verify admin route
export const verifyAdmin = (req, res) => {
  res.json({
    ok: true,
    user: req.user,
  });
};
