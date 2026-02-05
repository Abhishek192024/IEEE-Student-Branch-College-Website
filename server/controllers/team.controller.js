import Team from "../models/Team.model.js";

export const addMember = async (req, res) => {
  const member = await Team.create(req.body);
  res.json(member);
};

export const getTeam = async (req, res) => {
  const team = await Team.find().sort({ createdAt: -1 });
  res.json(team);
};

export const deleteMember = async (req, res) => {
  await Team.findByIdAndDelete(req.params.id);
  res.json({ message: "Member removed" });
};
