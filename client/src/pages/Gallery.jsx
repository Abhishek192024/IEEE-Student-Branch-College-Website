import React from "react";

// 🔹 IMPORT LOCAL IMAGES (TEAM STYLE)
import g1 from "../assets/gallery/g1.png";
import g2 from "../assets/gallery/g2.png";
import g3 from "../assets/gallery/g3.png";

// 🔹 ONLY 3 IMAGES FOR NOW
const images = [
  { img: g1, title: "Campus Event" },
  { img: g2, title: "Workshop Session" },
  { img: g3, title: "Tech Talk" },
];

export default function Gallery() {
  return (
    <div
      className="
        min-h-screen pt-0 px-6
        bg-white text-gray-900
        dark:bg-[#020617] dark:text-white
        transition-colors duration-300
      "
    >
      {/* HEADING */}
      <h1
        className="
          text-4xl font-bold mb-4
          text-blue-800 dark:text-white
          transition-all duration-300
          hover:text-indigo-500 hover:tracking-wider
          cursor-pointer
        "
      >
        Gallery
      </h1>

      <p className="mb-12 max-w-xl text-blue-700/80 dark:text-gray-300">
        Glimpses from our events, workshops and activities.
      </p>

      {/* 🔹 GALLERY GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((item, i) => (
          <div
            key={i}
            className="
              group relative h-48 rounded-xl overflow-hidden
              bg-blue-50 border border-blue-100
              dark:bg-white/5 dark:border-white/10
              transition-all duration-300
              hover:-translate-y-2 hover:scale-[1.03]
              hover:shadow-[0_20px_50px_rgba(59,130,246,0.25)]
              dark:hover:shadow-[0_20px_50px_rgba(99,102,241,0.35)]
              cursor-pointer
            "
          >
            {/* IMAGE */}
            <img
              src={item.img}
              alt={item.title}
              className="
                h-full w-full object-cover
                transition-transform duration-500
                group-hover:scale-110
              "
            />

            {/* OVERLAY */}
            <div
              className="
                absolute inset-0
                bg-white/70 dark:bg-black/40
                opacity-0
                flex items-center justify-center
                transition-all duration-300
                group-hover:opacity-100
              "
            >
              <span className="text-sm font-semibold tracking-wide text-blue-800 dark:text-white">
                {item.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
