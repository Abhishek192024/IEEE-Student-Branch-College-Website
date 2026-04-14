import Event from "../models/Event.model.js";
import imagekit from "../config/imagekit.js"; // 🔥 NAYA: ImageKit import kiya

/* GET ALL EVENTS */
export const getEvents = async (req, res) => {
  try {
    const events = await Event.find().sort({ createdAt: -1 });
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: "Error fetching events", error });
  }
};

/* GET SINGLE EVENT */
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

    // ✅ ImageKit pe files upload karna
    if (req.files) {
      // 1. Upload Poster
      if (req.files.poster) {
        const posterRes = await imagekit.upload({
          file: req.files.poster[0].buffer,
          fileName: `poster-${Date.now()}-${req.files.poster[0].originalname}`,
          folder: "/IEEE-VGU/Events"
        });
        posterUrl = posterRes.url;
      }
      
      // 2. Upload PDF Report
      if (req.files.pdfReport) {
        const pdfRes = await imagekit.upload({
          file: req.files.pdfReport[0].buffer,
          fileName: `pdf-${Date.now()}-${req.files.pdfReport[0].originalname}`,
          folder: "/IEEE-VGU/Events"
        });
        pdfUrl = pdfRes.url;
      }
      
      // 3. Upload Multiple Images (Gallery inside event)
      if (req.files.images) {
        const uploadPromises = req.files.images.map(file => 
          imagekit.upload({
            file: file.buffer,
            fileName: `img-${Date.now()}-${file.originalname}`,
            folder: "/IEEE-VGU/Events"
          })
        );
        const imgResults = await Promise.all(uploadPromises); // Sab ek sath upload honge
        imagesArr = imgResults.map(res => res.url);
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

    // ✅ fs.unlink hata diya gaya hai kyunki file local me nahi cloud me hai.
    // Database se event delete ho jayega. (ImageKit me file safe rahegi, manual delete ya API se baad me handle kar sakte hain).

    await Event.findByIdAndDelete(req.params.id);
    res.json({ message: "Event deleted from Database" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting event", error });
  }
};