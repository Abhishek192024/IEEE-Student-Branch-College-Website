import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import api from "../api"; // axios instance (baseURL: "/api")

export default function Gallery() {
  const [gallery, setGallery] = useState([]);

  // ✅ Local dev: images backend se aayengi (5000)
  // ✅ Render: same domain, so empty
  const IMG_BASE =
    import.meta.env.MODE === "development" ? "http://localhost:5000" : "";

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await api.get("/gallery");

        // ✅ always array
        const data = Array.isArray(res.data) ? res.data : [];

        setGallery(data);
      } catch (error) {
        console.log("❌ Gallery fetch error:", error.response?.data || error.message);
        setGallery([]);
      }
    };

    fetchGallery();
  }, []);

  return (
    <section className="px-8 py-16 text-white">
      <h1 className="text-4xl mb-10 text-center font-bold">Gallery</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {gallery.map((g) => (
          <motion.div
            key={g._id}
            whileHover={{ y: -10, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative overflow-hidden rounded-xl shadow-xl group"
          >
            <img
              // ✅ FIX 1: g.image (NOT g.imageUrl)
              // ✅ FIX 2: local + render compatible
              src={`${IMG_BASE}${g.image}`}
              alt={g.title || "gallery"}
              className="h-64 w-full object-cover"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-center px-4">
              <p className="text-lg font-semibold">{g.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
