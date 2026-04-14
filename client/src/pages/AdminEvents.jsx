import React, { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:5000";

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
      const { data } = await axios.get(`${API}/api/events`);
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
        `${API}/api/events`,
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
      
      // Reset file input UI
      document.getElementById("posterInput").value = "";
      document.getElementById("pdfInput").value = "";
      document.getElementById("imagesInput").value = "";

      alert("Event Added Successfully!");
      fetchEvents(); // 🔥 List refresh hogi
    } catch (err) {
      console.error("ADD EVENT ERROR", err);
      alert("Error adding event or Unauthorized");
    }
  };

  const deleteEvent = async (id) => {
    if(!window.confirm("Are you sure you want to delete this event?")) return;
    try {
      await axios.delete(
        `${API}/api/events/${id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchEvents();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen px-8 py-10 text-white bg-[#020617]">
      <h1 className="text-4xl font-bold mb-10 text-blue-400">Event Management</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mb-10 bg-white/5 p-8 rounded-2xl border border-white/10 shadow-xl">
        <input className="p-3 rounded-lg text-black outline-none" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input className="p-3 rounded-lg text-black outline-none" placeholder="Tag (Workshop, Seminar...)" value={tag} onChange={(e) => setTag(e.target.value)} />
        <textarea className="p-3 rounded-lg text-black md:col-span-2 outline-none h-32" placeholder="Description" value={desc} onChange={(e) => setDesc(e.target.value)} />
        
        <select className="p-3 rounded-lg text-black outline-none" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="computer">Computer Society</option>
          <option value="wie">WIE</option>
          <option value="mtt">MTT</option>
        </select>

        <select className="p-3 rounded-lg text-black outline-none" value={color} onChange={(e) => setColor(e.target.value)}>
          <option value="blue">Blue (Default)</option>
          <option value="green">Green</option>
          <option value="rose">Rose (Red)</option>
          <option value="purple">Purple</option>
        </select>

        {/* 📁 FILE UPLOADS */}
        <div className="md:col-span-2 flex flex-col gap-2 mt-4 bg-black/20 p-4 rounded-lg border border-white/10">
          <label className="text-sm font-semibold text-blue-300">1. Upload Poster (Main Image)</label>
          <input id="posterInput" type="file" accept="image/*" onChange={(e) => setPoster(e.target.files[0])} className="text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-blue-600 file:text-white" />
        </div>

        <div className="md:col-span-2 flex flex-col gap-2 bg-black/20 p-4 rounded-lg border border-white/10">
          <label className="text-sm font-semibold text-blue-300">2. Upload PDF Report</label>
          <input id="pdfInput" type="file" accept="application/pdf" onChange={(e) => setPdfReport(e.target.files[0])} className="text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-blue-600 file:text-white" />
        </div>

        <div className="md:col-span-2 flex flex-col gap-2 mb-4 bg-black/20 p-4 rounded-lg border border-white/10">
          <label className="text-sm font-semibold text-blue-300">3. Upload Event Gallery (Multiple Images)</label>
          <input id="imagesInput" type="file" accept="image/*" multiple onChange={(e) => setImages(e.target.files)} className="text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-blue-600 file:text-white" />
        </div>

        <button onClick={addEvent} className="md:col-span-2 bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-bold text-lg transition shadow-lg mt-2">
          Add New Event
        </button>
      </div>

      {/* EVENTS LIST */}
      <h2 className="text-2xl font-bold mb-6 text-blue-400">Manage Existing Events</h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
        {events.map((e) => (
          <div key={e._id} className="bg-white/5 p-6 rounded-xl shadow-lg border border-white/10 relative">
            <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-white bg-${e.color}-500`}>
              {e.category.toUpperCase()}
            </span>
            <h3 className="text-xl font-bold text-white pr-16">{e.title}</h3>
            <p className="text-gray-400 mt-3 text-sm line-clamp-3">{e.desc}</p>
            <span className="inline-block mt-4 px-3 py-1 bg-blue-500/20 text-blue-300 rounded text-xs border border-blue-500/30">
              #{e.tag}
            </span>
            <button onClick={() => deleteEvent(e._id)} className="mt-5 block w-full bg-red-600/80 hover:bg-red-600 py-2 rounded-lg font-bold transition">
              Delete Event
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}