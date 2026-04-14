import Team from "../models/Team.model.js";
import imagekit from "../config/imagekit.js";

// 1. READ: Get All Members (Sorted by Priority/Order)
export const getTeam = async (req, res) => {
  try {
    // 🔥 order: 1 ka matlab hai ascending order (1, 2, 3...) me data aayega
    const team = await Team.find().sort({ order: 1 });
    res.json(team);
  } catch (error) {
    res.status(500).json({ message: "Error fetching team data", error });
  }
};

// 2. CREATE: Add New Member
export const addMember = async (req, res) => {
  try {
    const { name, role, category, email, phone, linkedin, order } = req.body;
    let photoUrl = "";

    // ImageKit pe photo upload
    if (req.file) {
      const uploadRes = await imagekit.upload({
        file: req.file.buffer,
        fileName: `team-${Date.now()}-${req.file.originalname}`,
        folder: "/IEEE-VGU/Team"
      });
      photoUrl = uploadRes.url;
    }

    const newMember = await Team.create({
      name, role, category, email, phone, linkedin,
      image: photoUrl,
      order: order || 100 // Agar priority nahi di toh last me daal do
    });

    res.status(201).json(newMember);
  } catch (error) {
    res.status(500).json({ message: "Failed to add member", error });
  }
};

// 3. UPDATE: Update Member (Priority, Text, or Photo change karna)
export const updateMember = async (req, res) => {
  try {
    const { id } = req.params;
    let updateData = { ...req.body };

    // Agar update karte waqt nayi photo aayi hai, toh upload karo
    if (req.file) {
      const uploadRes = await imagekit.upload({
        file: req.file.buffer,
        fileName: `team-${Date.now()}-${req.file.originalname}`,
        folder: "/IEEE-VGU/Team"
      });
      updateData.image = uploadRes.url; // Nayi image ka link replace kar do
    }

    const updatedMember = await Team.findByIdAndUpdate(id, updateData, { new: true });
    
    if (!updatedMember) return res.status(404).json({ message: "Member not found" });
    res.json({ message: "Updated successfully", member: updatedMember });

  } catch (error) {
    res.status(500).json({ message: "Error updating member", error });
  }
};

// 4. DELETE: Remove Member
export const deleteMember = async (req, res) => {
  try {
    const deletedMember = await Team.findByIdAndDelete(req.params.id);
    if (!deletedMember) return res.status(404).json({ message: "Member not found" });
    
    res.json({ message: "Member deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting member", error });
  }
};