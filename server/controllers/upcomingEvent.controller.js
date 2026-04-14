import UpcomingEvent from "../models/UpcomingEvent.model.js";
import imagekit from "../config/imagekit.js";

export const updateUpcomingEvent = async (req, res) => {
  try {
    const { title, description, googleFormLink, deadline } = req.body;
    let updateData = { title, description, googleFormLink, deadline };

    if (req.file) {
      const uploadRes = await imagekit.upload({
        file: req.file.buffer,
        fileName: `upcoming-${Date.now()}`,
        folder: "/IEEE-VGU/Upcoming"
      });
      updateData.poster = uploadRes.url;
    }

    const event = await UpcomingEvent.findOneAndUpdate({}, updateData, {
      upsert: true,
      new: true,
    });
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUpcomingEvent = async (req, res) => {
  try {
    const event = await UpcomingEvent.findOne();
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: "Error fetching event" });
  }
};

// 🔥 Delete (Cancel) karne ka logic add kiya
export const deleteUpcomingEvent = async (req, res) => {
  try {
    await UpcomingEvent.deleteMany({});
    res.status(200).json({ message: "Event Cancelled & Deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting event" });
  }
};