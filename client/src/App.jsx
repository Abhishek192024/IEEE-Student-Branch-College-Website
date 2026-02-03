import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ThemeProvider } from "./context/ThemeContext";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Chapters from "./pages/Chapters.jsx";
import ComputerSociety from "./pages/ComputerSociety";
import WIE from "./pages/WIE";
import MTT from "./pages/MTT";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Team from "./pages/Team";
import Admin from "./pages/Admin";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>

        {/* FIXED NAVBAR */}
        <Navbar />

        {/* 👇 YAHI ADD KARNA THA */}
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/chapters" element={<Chapters />} />
            <Route path="/chapters/computer-society" element={<ComputerSociety />} />
            <Route path="/chapters/wie" element={<WIE />} />
            <Route path="/chapters/mtt" element={<MTT />} />
            <Route path="/events" element={<Events />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/team" element={<Team />} />

            {/* 🔐 ADMIN ROUTE */}
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>

      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
