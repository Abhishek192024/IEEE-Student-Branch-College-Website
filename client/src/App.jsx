import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ================= COMPONENTS =================
import Navbar from "./components/Navbar";
import AnnouncementBar from "./components/AnnouncementBar"; 
import { ThemeProvider } from "./context/ThemeContext"; 
import AdminRoute from "./components/AdminRoute"; 

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
import UpcomingEventPage from "./pages/UpcomingEventPage"; 
import Gallery from "./pages/Gallery";

// ================= ADMIN PAGES =================
import AdminLogin from "./pages/AdminLogin";
import Admin from "./pages/Admin";
import AdminHero from "./pages/AdminHero";
import AdminGallery from "./pages/AdminGallery";
import AdminEvents from "./pages/AdminEvents";
import AdminTeam from "./pages/AdminTeam";
import AdminUpcomingEvent from "./pages/AdminUpcomingEvent"; // 🔥 Naya Admin Page Import

function App() {
  return (
    <ThemeProvider>
      <Router>
        
        {/* 🔥 FIXED HEADER SECTION */}
        <div className="fixed top-0 w-full z-[100] flex flex-col">
          <AnnouncementBar />
          <Navbar />
        </div>
        
        {/* 🔥 CONTENT AREA */}
        <div className="min-h-screen pt-28 bg-white dark:bg-[#020617] transition-colors duration-300">
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
            
            <Route path="/events" element={<Events />} />
            <Route path="/event/:id" element={<EventDetails />} /> 
            <Route path="/upcoming-event/:id" element={<UpcomingEventPage />} /> 

            {/* 🔴 ADMIN ROUTES */}
            <Route path="/admin-secret-vgu" element={<AdminLogin />} />
            
            <Route path="/admin-secret-vgu/dashboard" element={<Admin />} />
            <Route path="/admin-secret-vgu/hero" element={<AdminHero />} />
            <Route path="/admin-secret-vgu/gallery" element={<AdminGallery />} />
            <Route path="/admin-secret-vgu/events" element={<AdminEvents />} />
            <Route path="/admin-secret-vgu/team" element={<AdminTeam />} />
            <Route path="/admin-secret-vgu/upcoming" element={<AdminUpcomingEvent />} /> {/* 🔥 Naya Route */}
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;