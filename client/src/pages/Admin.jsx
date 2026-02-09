import React from "react";
import { Link } from "react-router-dom";

export default function Admin() {
  return (
    <div className="min-h-screen p-10 text-white">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <Link
          to="/admin-secret-vgu/hero"
          className="bg-black/40 p-6 rounded-xl hover:bg-black/60 transition"
        >
          <h2 className="text-xl font-semibold">Hero Section</h2>
          <p className="text-sm text-gray-400 mt-2">
            Upload, delete & reorder hero images
          </p>
        </Link>

      </div>
    </div>
  );
}
