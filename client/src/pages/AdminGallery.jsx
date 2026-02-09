import React, { useEffect, useState } from "react";import axios from "axios";
export default function AdminGallery() {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [gallery, setGallery] = useState([]);

  const fetchGallery = async () => {
    const { data } = await axios.get("http://localhost:5000/api/gallery");
    setGallery(data);
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  const uploadImage = async () => {
    const formData = new FormData();
    formData.append("image", file);
    formData.append("title", title);

    await axios.post("http://localhost:5000/api/gallery", formData);
    setFile(null);
    setTitle("");
    fetchGallery();
  };

  const deleteImage = async (id) => {
    await axios.delete(`http://localhost:5000/api/gallery/${id}`);
    fetchGallery();
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
        <button onClick={uploadImage} className="px-4 py-2 bg-blue-600 rounded">
          Upload
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {gallery.map((g) => (
          <div key={g._id} className="bg-black/40 p-3 rounded">
            <img
              src={`http://localhost:5000${g.image}`}
              className="h-40 w-full object-cover rounded"
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
