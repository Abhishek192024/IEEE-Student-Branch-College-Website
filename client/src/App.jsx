import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ================= COMPONENTS =================
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./components/ThemeContext"; // Agar aapne ThemeContext default export kiya hai toh brackets {} hata dena
import AdminRoute from "./components/AdminRoute"; // Admin panel ko secure karne ke liye (agar use kar rahe hain)

// ================= PUBLIC PAGES =================
import Home from "./pages/Home";
import About from "./pages/About";
import Chapters from "./pages/Chapters";
import ComputerSociety from "./pages/ComputerSociety";
import WIE from "./pages/WIE";
import MTT from "./pages/MTT";
import Team from "./pages/Team";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails"; 
import Gallery from "./pages/Gallery";

// ================= ADMIN PAGES =================
import AdminLogin from "./pages/AdminLogin";
import Admin from "./pages/Admin";
import AdminHero from "./pages/AdminHero";
import AdminGallery from "./pages/AdminGallery";
import AdminEvents from "./pages/AdminEvents";
import AdminTeam from "./pages/AdminTeam";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        
        {/* 🔥 YAHAN UPDATE KIYA HAI: pt-20 add kar diya gaya hai */}
        <div className="min-h-screen pt-20">
          <Routes>
            {/* 🟢 PUBLIC ROUTES */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            
            {/* Chapters */}
            <Route path="/chapters" element={<Chapters />} />
            <Route path="/chapters/computer-society" element={<ComputerSociety />} />
            <Route path="/chapters/wie" element={<WIE />} />
            <Route path="/chapters/mtt" element={<MTT />} />
            
            <Route path="/team" element={<Team />} />
            <Route path="/gallery" element={<Gallery />} />
            
            {/* Events */}
            <Route path="/events" element={<Events />} />
            <Route path="/event/:id" element={<EventDetails />} /> 

            {/* 🔴 ADMIN ROUTES */}
            <Route path="/admin-secret-vgu" element={<AdminLogin />} />
            
            {/* Protected Admin Routes (Agar AdminRoute configured hai toh) */}
            <Route path="/admin-secret-vgu/dashboard" element={<Admin />} />
            <Route path="/admin-secret-vgu/hero" element={<AdminHero />} />
            <Route path="/admin-secret-vgu/gallery" element={<AdminGallery />} />
            <Route path="/admin-secret-vgu/events" element={<AdminEvents />} />
            <Route path="/admin-secret-vgu/team" element={<AdminTeam />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;