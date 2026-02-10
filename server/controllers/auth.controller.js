import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import Admin from "../models/Admin.model.js";

export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // ✅ email ko normalize kar do
    const admin = await Admin.findOne({ email: email.toLowerCase().trim() });

    if (!admin) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // ✅ bcrypt password compare
    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
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
    console.log("Admin login error:", error);
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
