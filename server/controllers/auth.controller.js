// import Admin from "../models/Admin.model.js";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";

// export const adminLogin = async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     const admin = await Admin.findOne({ username });
//     if (!admin) {
//       return res.status(401).json({ message: "Invalid username or password" });
//     }

//     const isMatch = await bcrypt.compare(password, admin.password);
//     if (!isMatch) {
//       return res.status(401).json({ message: "Invalid username or password" });
//     }

//     const token = jwt.sign(
//       { id: admin._id, role: "admin" },
//       process.env.JWT_SECRET,
//       { expiresIn: "7d" }
//     );

//     res.json({
//       success: true,
//       token
//     });

//   } catch (err) {
//     res.status(500).json({ message: "Server error" });
//   }
// };

import Admin from "../models/Admin.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const adminLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
      { id: admin._id, role: "admin" },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
