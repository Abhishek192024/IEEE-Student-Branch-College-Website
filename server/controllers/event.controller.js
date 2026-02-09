import Event from "../models/Event.model.js";

/* GET ALL EVENTS */
export const getEvents = async (req, res) => {
  const events = await Event.find().sort({ createdAt: -1 });
  res.json(events);
};

/* CREATE EVENT (ADMIN) */
export const createEvent = async (req, res) => {
  const event = await Event.create(req.body);
  res.status(201).json(event);
};

/* UPDATE EVENT */
export const updateEvent = async (req, res) => {
  const updated = await Event.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
};

/* DELETE EVENT */
export const deleteEvent = async (req, res) => {
  await Event.findByIdAndDelete(req.params.id);
  res.json({ message: "Event deleted" });
};
