import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AdminEvents() {
  const [events, setEvents] = useState([]);

  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("computer");
  const [color, setColor] = useState("blue"); // 🔵 default

  // ✅ TOKEN
  const token = localStorage.getItem("adminToken");

  // ✅ AXIOS CONFIG WITH AUTH
  const authConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  // ================= FETCH EVENTS =================
  const fetchEvents = async () => {
    try {
      const { data } = await axios.get(
        "https://vguieee-student-branch-college-website.onrender.com/api/events"
      );
      setEvents(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // ================= ADD EVENT =================
  const addEvent = async () => {
    if (!title || !desc || !tag) {
      alert("All fields required");
      return;
    }

    try {
      await axios.post(
        "http://localhost:5000/api/events",
        {
          title,
          desc,
          tag,
          category,
          color,
        },
        authConfig // 🔥 MOST IMPORTANT
      );

      setTitle("");
      setDesc("");
      setTag("");
      setCategory("computer");
      setColor("blue");

      fetchEvents();
    } catch (err) {
      console.error("ADD EVENT ERROR", err);
      alert("Unauthorized – please login again");
    }
  };

  // ================= DELETE EVENT =================
  const deleteEvent = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/events/${id}`,
        authConfig
      );
      fetchEvents();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen px-8 py-10 text-white">
      <h1 className="text-4xl font-bold mb-10">Event Management</h1>

      {/* ================= FORM ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mb-10">
        <input
          className="p-3 rounded text-black"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className="p-3 rounded text-black"
          placeholder="Tag (Workshop, Seminar...)"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
        />

        <textarea
          className="p-3 rounded text-black md:col-span-2"
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <select
          className="p-3 rounded text-black"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="computer">Computer Society</option>
          <option value="wie">WIE</option>
          <option value="mtt">MTT</option>
        </select>

        <select
          className="p-3 rounded text-black"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        >
          <option value="blue">Blue (Default)</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
          <option value="red">Red</option>
        </select>

        <button
          onClick={addEvent}
          className="md:col-span-2 bg-blue-600 hover:bg-blue-700 py-3 rounded font-semibold"
        >
          Add Event
        </button>
      </div>

      {/* ================= EVENTS LIST ================= */}
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
        {events.map((e) => (
          <div
            key={e._id}
            className="bg-black/40 p-6 rounded-xl shadow"
          >
            <h3 className="text-xl font-semibold">{e.title}</h3>
            <p className="text-gray-300 mt-2">{e.desc}</p>
            <p className="text-sm mt-2 text-blue-400">{e.tag}</p>

            <button
              onClick={() => deleteEvent(e._id)}
              className="mt-4 bg-red-600 px-4 py-2 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
