import React, { useContext, useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  /* close dropdown on outside click */
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const linkClass = ({ isActive }) =>
    `block py-2 text-sm font-medium transition
     ${isActive ? "text-blue-500" : theme === "dark" ? "text-gray-300" : "text-blue-600"}
     hover:text-blue-500`;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur
        ${theme === "dark"
          ? "bg-[#020617]/95 border-b border-white/10"
          : "bg-white border-b border-gray-200"}
      `}
    >
      {/* TOP BAR */}
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* LOGO */}
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src="/assets/ieee-vgu-logo.png"
            alt="IEEE VGU"
            className="h-10"
          />
          <div className="hidden sm:block leading-tight">
            <p className="text-sm font-semibold text-blue-500">
              Vivekananda Global University
            </p>
            <p className="text-xs text-blue-400">
              IEEE Student Branch
            </p>
          </div>
        </NavLink>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/chapters" className={linkClass}>Chapters</NavLink>

          {/* DROPDOWN */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`${theme === "dark" ? "text-gray-300" : "text-blue-600"} text-sm`}
            >
              Activities ▾
            </button>

            {dropdownOpen && (
              <div
                className={`absolute top-8 left-0 w-44 rounded-xl shadow-lg overflow-hidden
                  ${theme === "dark"
                    ? "bg-[#020617] border border-white/10"
                    : "bg-white border border-gray-200"}
                `}
              >
                <NavLink to="/events" className="block px-4 py-3 hover:bg-blue-500/10">
                  Events
                </NavLink>
                <NavLink to="/gallery" className="block px-4 py-3 hover:bg-blue-500/10">
                  Gallery
                </NavLink>
              </div>
            )}
          </div>

          <NavLink to="/team" className={linkClass}>Team</NavLink>

          {/* THEME */}
          <button onClick={toggleTheme} className="text-xl">
            {theme === "dark" ? "🌙" : "☀️"}
          </button>
        </nav>

        {/* MOBILE ICON */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div
          className={`md:hidden px-6 py-6 space-y-4
            ${theme === "dark" ? "bg-[#020617]" : "bg-white"}
          `}
        >
          <NavLink onClick={() => setMenuOpen(false)} to="/" className={linkClass}>Home</NavLink>
          <NavLink onClick={() => setMenuOpen(false)} to="/about" className={linkClass}>About</NavLink>
          <NavLink onClick={() => setMenuOpen(false)} to="/chapters" className={linkClass}>Chapters</NavLink>
          <NavLink onClick={() => setMenuOpen(false)} to="/events" className={linkClass}>Events</NavLink>
          <NavLink onClick={() => setMenuOpen(false)} to="/gallery" className={linkClass}>Gallery</NavLink>
          <NavLink onClick={() => setMenuOpen(false)} to="/team" className={linkClass}>Team</NavLink>

          <button onClick={toggleTheme} className="text-xl mt-4">
            {theme === "dark" ? "🌙" : "☀️"}
          </button>
        </div>
      )}
    </header>
  );
}
