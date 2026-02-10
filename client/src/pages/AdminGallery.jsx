import React, { useEffect, useState } from "react";
import axios from "axios";

const API = "https://vguieee-student-branch-college-1.onrender.com"; // ✅ API URL

export default function AdminGallery() {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [gallery, setGallery] = useState([]);

  // ✅ token localStorage se
  const token = localStorage.getItem("adminToken");

  // ✅ headers config
  const authHeaders = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  // ✅ FETCH GALLERY
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

  // ✅ UPLOAD IMAGE
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
          Authorization: `Bearer ${token}`, // ✅ token added
        },
      });

      setFile(null);
      setTitle("");
      fetchGallery();
    } catch (error) {
      console.log("Upload error:", error);
      alert("Upload failed! Check console.");
    }
  };

  // ✅ DELETE IMAGE
  const deleteImage = async (id) => {
    try {
      await axios.delete(`${API}/api/gallery/${id}`, authHeaders); // ✅ token added
      fetchGallery();
    } catch (error) {
      console.log("Delete error:", error);
      alert("Delete failed! Check console.");
    }
  };

  return (
    <div className="p-8 text-white">
      <h1 className="text-3xl mb-4">Gallery Management</h1>

      <div className="flex gap-3 mb-6">
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />

        <input
          type="text"
          placeholder="Event name / description"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="px-3 py-2 rounded text-black"
        />

        <button
          onClick={uploadImage}
          className="px-4 py-2 bg-blue-600 rounded"
        >
          Upload
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {gallery.map((g) => (
          <div key={g._id} className="bg-black/40 p-3 rounded">
            <img
              src={`${API}${g.image}`}
              className="h-40 w-full object-cover rounded"
              alt={g.title}
            />

            <p className="mt-2 text-sm">{g.title}</p>

            <button
              onClick={() => deleteImage(g._id)}
              className="mt-2 w-full bg-red-600 py-1 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
