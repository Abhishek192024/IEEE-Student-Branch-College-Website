import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export default function Gallery() {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/gallery")
      .then((res) => setGallery(res.data));
  }, []);

  return (
    <section className="px-8 py-16 text-white">
      <h1 className="text-4xl mb-10 text-center">Gallery</h1>

      <div className="grid grid-cols-3 gap-8">
        {gallery.map((g) => (
          <motion.div
            key={g._id}
            whileHover={{ y: -10, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative overflow-hidden rounded-xl shadow-xl group"
          >
            <img
              src={`http://localhost:5000${g.image}`}
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
