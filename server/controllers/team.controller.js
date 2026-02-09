import Team from "../models/Team.model.js";

export const getTeam = async (req, res) => {
  const team = await Team.find().sort({ order: 1 });
  res.json(team);
};

export const addMember = async (req, res) => {
  const count = await Team.countDocuments();
  const member = await Team.create({
    ...req.body,
    photo: `/uploads/team/${req.file.filename}`,
    order: count
  });
  res.json(member);
};

export const deleteMember = async (req, res) => {
  await Team.findByIdAndDelete(req.params.id);
  res.sendStatus(200);
};
