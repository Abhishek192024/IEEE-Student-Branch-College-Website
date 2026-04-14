import React, { useEffect, useState } from "react";
import axios from "axios";

// Ye sirf POST, GET, DELETE requests ke liye chahiye, Image dikhane ke liye nahi
const API = "http://localhost:5000"; 

export default function AdminGallery() {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [gallery, setGallery] = useState([]);

  // Token localStorage se
  const token = localStorage.getItem("adminToken");

  const authHeaders = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  // FETCH GALLERY
  const fetchGallery = async () => {
    try {
      const { data } = await axios.get(`${API}/api/gallery`);
      setGallery(data);
    } catch (error) {
      console.log("Fetch gallery error:", error);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  // UPLOAD IMAGE
  const uploadImage = async () => {
    try {
      if (!file) {
        alert("Please choose a file!");
        return;
      }

      if (!title.trim()) {
        alert("Please enter title!");
        return;
      }

      const formData = new FormData();
      formData.append("image", file);
      formData.append("title", title);

      await axios.post(`${API}/api/gallery`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`, 
        },
      });

      setFile(null);
      setTitle("");
      // 🔥 Upload successful hote hi list dobara fetch hogi
      fetchGallery(); 
      alert("Image uploaded successfully!");
    } catch (error) {
      console.log("Upload error:", error);
      alert("Upload failed! Check console.");
    }
  };

  // DELETE IMAGE
  const deleteImage = async (id) => {
    if(!window.confirm("Are you sure you want to delete this image?")) return;
    try {
      await axios.delete(`${API}/api/gallery/${id}`, authHeaders); 
      fetchGallery();
    } catch (error) {
      console.log("Delete error:", error);
      alert("Delete failed! Check console.");
    }
  };

  return (
    <div className="p-8 text-white min-h-screen bg-[#020617]">
      <h1 className="text-3xl font-bold mb-8 text-blue-400">Gallery Management</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-10 bg-white/5 p-6 rounded-xl border border-white/10">
        <input 
          type="file" 
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])} 
          className="text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
        />

        <input
          type="text"
          placeholder="Event name / description"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="px-4 py-2 rounded text-black flex-1 outline-none"
        />

        <button
          onClick={uploadImage}
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 transition font-bold rounded"
        >
          Upload
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {gallery.map((g) => (
          <div key={g._id} className="bg-black/40 p-4 rounded-xl border border-white/10 shadow-lg">
            {/* 🔥 YAHAN FIX KIYA HAI: Direct ImageKit ka g.image url use ho raha hai */}
            <img
              src={g.image}
              className="h-48 w-full object-cover rounded-lg"
              alt={g.title}
            />

            <p className="mt-3 text-lg font-medium text-center">{g.title}</p>

            <button
              onClick={() => deleteImage(g._id)}
              className="mt-4 w-full bg-red-600/80 hover:bg-red-600 transition py-2 font-bold rounded-lg"
            >
              Delete Image
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}