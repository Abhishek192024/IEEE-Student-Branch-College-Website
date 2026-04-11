import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AdminEvents() {
  const [events, setEvents] = useState([]);

  // Text States
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("computer");
  const [color, setColor] = useState("blue");

  // File States
  const [poster, setPoster] = useState(null);
  const [pdfReport, setPdfReport] = useState(null);
  const [images, setImages] = useState(null);

  const token = localStorage.getItem("adminToken");

  const fetchEvents = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/api/events"
      );
      setEvents(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const addEvent = async () => {
    if (!title || !desc || !tag) {
      alert("Title, Description, and Tag are required");
      return;
    }

    try {
      // 📝 Use FormData for files
      const formData = new FormData();
      formData.append("title", title);
      formData.append("desc", desc);
      formData.append("tag", tag);
      formData.append("category", category);
      formData.append("color", color);
      
      // Append files if they exist
      if (poster) formData.append("poster", poster);
      if (pdfReport) formData.append("pdfReport", pdfReport);
      
      // Handle multiple images
      if (images) {
        for (let i = 0; i < images.length; i++) {
          formData.append("images", images[i]);
        }
      }

      await axios.post(
        "http://localhost:5000/api/events",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data", // 🔥 Important for files
          },
        }
      );

      // Reset states
      setTitle("");
      setDesc("");
      setTag("");
      setCategory("computer");
      setColor("blue");
      setPoster(null);
      setPdfReport(null);
      setImages(null);
      
      // Reset file input UI (optional but good UX)
      document.getElementById("posterInput").value = "";
      document.getElementById("pdfInput").value = "";
      document.getElementById("imagesInput").value = "";

      alert("Event Added Successfully!");
      fetchEvents();
    } catch (err) {
      console.error("ADD EVENT ERROR", err);
      alert("Error adding event or Unauthorized");
    }
  };

  const deleteEvent = async (id) => {
    if(!window.confirm("Are you sure you want to delete this event?")) return;
    try {
      await axios.delete(
        `http://localhost:5000/api/events/${id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchEvents();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen px-8 py-10 text-white">
      <h1 className="text-4xl font-bold mb-10">Event Management</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mb-10 bg-black/40 p-6 rounded-xl">
        <input className="p-3 rounded text-black" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input className="p-3 rounded text-black" placeholder="Tag (Workshop, Seminar...)" value={tag} onChange={(e) => setTag(e.target.value)} />
        <textarea className="p-3 rounded text-black md:col-span-2" placeholder="Description" value={desc} onChange={(e) => setDesc(e.target.value)} />
        
        <select className="p-3 rounded text-black" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="computer">Computer Society</option>
          <option value="wie">WIE</option>
          <option value="mtt">MTT</option>
        </select>

        <select className="p-3 rounded text-black" value={color} onChange={(e) => setColor(e.target.value)}>
          <option value="blue">Blue (Default)</option>
          <option value="green">Green</option>
          <option value="rose">Rose (Red)</option>
          <option value="purple">Purple</option>
        </select>

        {/* 📁 FILE UPLOADS */}
        <div className="md:col-span-2 flex flex-col gap-2 mt-4">
          <label className="text-sm text-gray-300">Upload Poster (Main Image)</label>
          <input id="posterInput" type="file" accept="image/*" onChange={(e) => setPoster(e.target.files[0])} className="p-2 bg-gray-800 rounded" />
        </div>

        <div className="md:col-span-2 flex flex-col gap-2">
          <label className="text-sm text-gray-300">Upload PDF Report</label>
          <input id="pdfInput" type="file" accept="application/pdf" onChange={(e) => setPdfReport(e.target.files[0])} className="p-2 bg-gray-800 rounded" />
        </div>

        <div className="md:col-span-2 flex flex-col gap-2 mb-4">
          <label className="text-sm text-gray-300">Upload Event Gallery (Multiple Images)</label>
          <input id="imagesInput" type="file" accept="image/*" multiple onChange={(e) => setImages(e.target.files)} className="p-2 bg-gray-800 rounded" />
        </div>

        <button onClick={addEvent} className="md:col-span-2 bg-blue-600 hover:bg-blue-700 py-3 rounded font-semibold transition">
          Add Event
        </button>
      </div>

      {/* EVENTS LIST */}
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
        {events.map((e) => (
          <div key={e._id} className="bg-black/40 p-6 rounded-xl shadow border border-gray-700">
            <h3 className="text-xl font-semibold">{e.title}</h3>
            <p className="text-gray-300 mt-2 text-sm">{e.desc}</p>
            <span className="inline-block mt-3 px-3 py-1 bg-gray-800 text-blue-400 rounded-full text-xs">{e.tag}</span>
            <button onClick={() => deleteEvent(e._id)} className="mt-4 block w-full bg-red-600/80 hover:bg-red-600 py-2 rounded transition">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}