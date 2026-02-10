import React, { useEffect, useState } from "react";
import axios from "axios";

const API = "https://vgu-ieee-student-branch.onrender.com/api/hero"; // ✅ API URL
const IMG = "https://vgu-ieee-student-branch.onrender.com";

export default function AdminHero() {
  const [file, setFile] = useState(null);
  const [heroes, setHeroes] = useState([]);

  // 🔁 FETCH HERO IMAGES
  const fetchHeroes = async () => {
    const res = await axios.get(API);
    // order ASC so admin sees real sequence
    const sorted = res.data.sort((a, b) => a.order - b.order);
    setHeroes(sorted);
  };

  useEffect(() => {
    fetchHeroes();
  }, []);

  // ⬆ UPLOAD
  const uploadHero = async () => {
    if (!file) return alert("Please select image");

    const formData = new FormData();
    formData.append("image", file);

    await axios.post(API, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    setFile(null);
    fetchHeroes();
  };

  // ❌ DELETE
  const deleteHero = async (id) => {
    if (!window.confirm("Delete this hero image?")) return;
    await axios.delete(`${API}/${id}`);
    fetchHeroes();
  };

  // 🔼🔽 CHANGE ORDER
  const changeOrder = async (id, order) => {
    await axios.put(`${API}/order`, { id, order });
    fetchHeroes();
  };

  return (
    <div className="p-8 text-white max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Admin – Hero Section</h1>

      {/* UPLOAD */}
      <div className="flex items-center gap-4 mb-8">
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
          className="text-sm"
        />
        <button
          onClick={uploadHero}
          className="px-6 py-2 bg-blue-600 rounded hover:bg-blue-700"
        >
          Upload
        </button>
      </div>

      {/* HERO GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {heroes.map((h, index) => (
          <div
            key={h._id}
            className="bg-black/40 rounded-xl p-3 shadow-lg"
          >
            <img
              src={`${IMG}${h.image}`}
              alt="hero"
              className="h-44 w-full object-cover rounded-lg border"
            />

            <div className="mt-3 text-sm">
              <p>Order: <b>{h.order}</b></p>
            </div>

            <div className="flex gap-2 mt-3">
              <button
                onClick={() => changeOrder(h._id, h.order - 1)}
                className="px-3 py-1 bg-gray-600 rounded"
              >
                ↑
              </button>

              <button
                onClick={() => changeOrder(h._id, h.order + 1)}
                className="px-3 py-1 bg-gray-600 rounded"
              >
                ↓
              </button>

              <button
                onClick={() => deleteHero(h._id)}
                className="px-4 py-1 bg-red-600 rounded ml-auto"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
