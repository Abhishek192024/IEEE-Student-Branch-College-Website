import React from "react";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  const navigate = useNavigate();

  // ✅ LOGOUT FUNCTION
  const handleLogout = () => {
    localStorage.removeItem("adminToken"); // session end
    navigate("/admin-secret-vgu"); // back to login
  };

  return (
    <div className="min-h-screen text-white px-8 py-10">

      {/* TOP BAR */}
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-4xl font-bold">Admin Dashboard</h1>

        {/* ✅ LOGOUT BUTTON */}
        <button
          onClick={handleLogout}
          className="px-5 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        <div
          onClick={() => navigate("/admin-secret-vgu/hero")}
          className="cursor-pointer bg-black/40 hover:bg-black/60 transition rounded-xl p-6 shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-2">Hero Section</h2>
          <p className="text-gray-300 text-sm">Upload, delete & reorder hero images</p>
        </div>

        <div
          onClick={() => navigate("/admin-secret-vgu/gallery")}
          className="cursor-pointer bg-black/40 hover:bg-black/60 transition rounded-xl p-6 shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-2">Gallery Section</h2>
          <p className="text-gray-300 text-sm">Upload & manage gallery photos</p>
        </div>

        <div
          onClick={() => navigate("/admin-secret-vgu/events")}
          className="cursor-pointer bg-black/40 hover:bg-black/60 transition rounded-xl p-6 shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-2">Events Section</h2>
          <p className="text-gray-300 text-sm">Create & manage events</p>
        </div>

        <div
          onClick={() => navigate("/admin-secret-vgu/team")}
          className="cursor-pointer bg-black/40 hover:bg-black/60 transition rounded-xl p-6 shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-2">Team Section</h2>
          <p className="text-gray-300 text-sm">Add & manage team members</p>
        </div>

      </div>
    </div>
  );
}
