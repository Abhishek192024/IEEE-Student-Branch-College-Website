import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Chapters from "./pages/Chapters";
import ComputerSociety from "./pages/ComputerSociety";
import WIE from "./pages/WIE";
import MTT from "./pages/MTT";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Team from "./pages/Team";

import AdminLogin from "./pages/AdminLogin";
import Admin from "./pages/Admin";
import AdminHero from "./pages/AdminHero";
import AdminGallery from "./pages/AdminGallery";
import AdminEvents from "./pages/AdminEvents";
import AdminTeam from "./pages/AdminTeam";

import AdminRoute from "./components/AdminRoute";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />

        <main className="pt-20">
          <Routes>
            {/* PUBLIC */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/chapters" element={<Chapters />} />
            <Route path="/chapters/computer-society" element={<ComputerSociety />} />
            <Route path="/chapters/wie" element={<WIE />} />
            <Route path="/chapters/mtt" element={<MTT />} />
            <Route path="/events" element={<Events />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/team" element={<Team />} />

            {/* ADMIN LOGIN */}
            <Route path="/admin-secret-vgu" element={<AdminLogin />} />

            {/* ADMIN PROTECTED */}
            <Route
              path="/admin-secret-vgu/dashboard"
              element={
                <AdminRoute>
                  <Admin />
                </AdminRoute>
              }
            />

            <Route
              path="/admin-secret-vgu/hero"
              element={
                <AdminRoute>
                  <AdminHero />
                </AdminRoute>
              }
            />

            <Route
              path="/admin-secret-vgu/gallery"
              element={
                <AdminRoute>
                  <AdminGallery />
                </AdminRoute>
              }
            />

            <Route
              path="/admin-secret-vgu/events"
              element={
                <AdminRoute>
                  <AdminEvents />
                </AdminRoute>
              }
            />

            <Route
              path="/admin-secret-vgu/team"
              element={
                <AdminRoute>
                  <AdminTeam />
                </AdminRoute>
              }
            />
          </Routes>
        </main>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
