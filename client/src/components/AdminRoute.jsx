import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

const API = "https://vguieee-student-branch-college-1.onrender.com"; // ✅ backend URL

export default function AdminRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    const verifyAdmin = async () => {
      try {
        const token = localStorage.getItem("adminToken");

        if (!token) {
          setVerified(false);
          setLoading(false);
          return;
        }

        // ✅ backend verify
        await axios.get(`${API}/api/auth/verify`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setVerified(true);
      } catch (error) {
        localStorage.removeItem("adminToken");
        setVerified(false);
      } finally {
        setLoading(false);
      }
    };

    verifyAdmin();
  }, []);

  // ✅ loader
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Checking Admin...
      </div>
    );
  }

  // ❌ not verified
  if (!verified) {
    return <Navigate to="/admin-secret-vgu" replace />;
  }

  // ✅ verified
  return children;
}
