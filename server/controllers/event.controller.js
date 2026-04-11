import Event from "../models/Event.model.js";
import fs from "fs";
import path from "path";

/* GET ALL EVENTS */
export const getEvents = async (req, res) => {
  try {
    const events = await Event.find().sort({ createdAt: -1 });
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: "Error fetching events", error });
  }
};

/* GET SINGLE EVENT (🔥 NEW) */
export const getSingleEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: "Event not found" });
    res.json(event);
  } catch (error) {
    res.status(500).json({ message: "Error fetching event details", error });
  }
};

/* CREATE EVENT (ADMIN) */
export const createEvent = async (req, res) => {
  try {
    const { title, desc, tag, category, color } = req.body;
    
    let posterUrl = "";
    let pdfUrl = "";
    let imagesArr = [];

    // ✅ Files handling
    if (req.files) {
      if (req.files.poster) {
        posterUrl = `/uploads/events/${req.files.poster[0].filename}`;
      }
      if (req.files.pdfReport) {
        pdfUrl = `/uploads/events/${req.files.pdfReport[0].filename}`;
      }
      if (req.files.images) {
        imagesArr = req.files.images.map(file => `/uploads/events/${file.filename}`);
      }
    }

    const event = await Event.create({
      title,
      desc,
      tag,
      category,
      color,
      poster: posterUrl,
      pdfReport: pdfUrl,
      images: imagesArr
    });
    
    res.status(201).json(event);
  } catch (error) {
    console.log("Create Event Error:", error);
    res.status(500).json({ message: "Server Error during creation", error });
  }
};

/* UPDATE EVENT */
export const updateEvent = async (req, res) => {
  try {
    const updated = await Event.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: "Error updating event", error });
  }
};

/* DELETE EVENT */
export const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: "Event not found" });

    // ✅ Server se physical file delete karne ka function
    const deleteFile = (filePath) => {
      if (filePath) {
        const fullPath = path.join(process.cwd(), "server", filePath);
        if (fs.existsSync(fullPath)) fs.unlinkSync(fullPath);
      }
    };

    deleteFile(event.poster);
    deleteFile(event.pdfReport);
    if (event.images && event.images.length > 0) {
      event.images.forEach(img => deleteFile(img));
    }

    await Event.findByIdAndDelete(req.params.id);
    res.json({ message: "Event and associated files deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting event", error });
  }
};