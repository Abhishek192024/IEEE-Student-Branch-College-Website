import Event from "../models/Event.model.js";

export const getEvents = async (req, res) => {
  const events = await Event.find().sort({ createdAt: -1 });
  res.json(events);
};

export const addEvent = async (req, res) => {
  const event = await Event.create({
    ...req.body,
    image: req.file ? `/uploads/events/${req.file.filename}` : ""
  });
  res.json(event);
};

export const deleteEvent = async (req, res) => {
  await Event.findByIdAndDelete(req.params.id);
  res.sendStatus(200);
};
