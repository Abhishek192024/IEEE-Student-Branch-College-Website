import React from "react";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen text-white px-8 py-10">
      <h1 className="text-4xl font-bold mb-10">Admin Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* 🔥 HERO SECTION CARD */}
        <div
          onClick={() => navigate("/admin-secret-vgu/hero")}
          className="cursor-pointer bg-black/40 hover:bg-black/60 transition rounded-xl p-6 shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-2">Hero Section</h2>
          <p className="text-gray-300 text-sm">
            Upload, delete & reorder hero images
          </p>
        </div>

        {/* 🖼️ GALLERY SECTION CARD */}
        <div
          onClick={() => navigate("/admin-secret-vgu/gallery")}
          className="cursor-pointer bg-black/40 hover:bg-black/60 transition rounded-xl p-6 shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-2">Gallery Section</h2>
          <p className="text-gray-300 text-sm">
            Upload & manage gallery photos
          </p>
        </div>

        {/* 📅 EVENTS SECTION CARD (future ready) */}
        <div
          onClick={() => navigate("/admin-secret-vgu/events")}
          className="cursor-pointer bg-black/40 hover:bg-black/60 transition rounded-xl p-6 shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-2">Events Section</h2>
          <p className="text-gray-300 text-sm">
            Create & manage events (Activities + Chapters)
          </p>
        </div>

        {/* 👥 TEAM SECTION CARD (future ready) */}
        <div
          onClick={() => navigate("/admin-secret-vgu/team")}
          className="cursor-pointer bg-black/40 hover:bg-black/60 transition rounded-xl p-6 shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-2">Team Section</h2>
          <p className="text-gray-300 text-sm">
            Add, update & remove team members
          </p>
        </div>

      </div>
    </div>
  );
}
