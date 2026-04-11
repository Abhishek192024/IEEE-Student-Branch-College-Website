import React, { useContext, useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { FiMenu, FiX, FiSun, FiMoon, FiChevronDown } from "react-icons/fi";

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (theme === "dark") {
      toggleTheme(); 
    }
  }, []); 

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

  // 🔥 UPDATED: Dynamic Link Class with Animated Underline Logic
  const linkClass = ({ isActive }) =>
    `relative py-2 text-sm font-semibold transition-all duration-300 group
     ${isActive 
        ? "text-blue-500" 
        : theme === "dark" ? "text-gray-300 hover:text-white" : "text-blue-900 hover:text-blue-500"
     }`;

  // Common Underline Component to avoid repetition
  const Underline = ({ isActive }) => (
    <span className={`absolute bottom-0 left-0 h-[2px] bg-blue-500 transition-all duration-300 
      ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}>
    </span>
  );

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-all duration-500
        ${theme === "dark"
          ? "bg-[#020617]/90 border-b border-white/10"
          : "bg-white/90 border-b border-gray-200 shadow-sm"}
      `}
    >
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* LOGO */}
        <NavLink to="/" className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
          <img
            src="/assets/ieee-vgu-logo.png"
            alt="IEEE VGU"
            className="h-10"
          />
          <div className="hidden sm:block leading-tight">
            <p className="text-sm font-bold text-blue-600 dark:text-blue-500">
              Vivekananda Global University
            </p>
            <p className="text-xs text-blue-500 dark:text-blue-400">
              IEEE Student Branch
            </p>
          </div>
        </NavLink>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={linkClass}>
            {({ isActive }) => (<>Home <Underline isActive={isActive} /></>)}
          </NavLink>
          
          <NavLink to="/about" className={linkClass}>
            {({ isActive }) => (<>About <Underline isActive={isActive} /></>)}
          </NavLink>

          <NavLink to="/chapters" className={linkClass}>
            {({ isActive }) => (<>Chapters <Underline isActive={isActive} /></>)}
          </NavLink>

          {/* DROPDOWN */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`flex items-center gap-1 text-sm font-bold transition-all group
                ${theme === "dark" ? "text-gray-300 hover:text-white" : "text-blue-900 hover:text-blue-500"}`}
            >
              Activities 
              <FiChevronDown className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
              <span className={`absolute bottom-0 left-0 h-[2px] bg-blue-500 transition-all duration-300 ${dropdownOpen ? 'w-full' : 'w-0'}`}></span>
            </button>

            {dropdownOpen && (
              <div
                className={`absolute top-12 left-0 w-48 rounded-xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300
                  ${theme === "dark"
                    ? "bg-[#0f172a] border border-white/10"
                    : "bg-white border border-gray-100"}
                `}
              >
                <NavLink to="/events" onClick={() => setDropdownOpen(false)} className="block px-5 py-3 text-sm font-medium hover:bg-blue-500 hover:text-white transition-colors">
                  Events
                </NavLink>
                <NavLink to="/gallery" onClick={() => setDropdownOpen(false)} className="block px-5 py-3 text-sm font-medium hover:bg-blue-500 hover:text-white transition-colors">
                  Gallery
                </NavLink>
              </div>
            )}
          </div>

          <NavLink to="/team" className={linkClass}>
            {({ isActive }) => (<>Team <Underline isActive={isActive} /></>)}
          </NavLink>

          {/* THEME TOGGLE */}
          <button 
            onClick={toggleTheme} 
            className={`p-2 rounded-full transition-all duration-500 hover:rotate-12 active:scale-90
              ${theme === "dark" 
                ? "bg-white/10 text-yellow-400" 
                : "bg-blue-50 text-blue-600 shadow-inner"}`}
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
        </nav>

        {/* MOBILE ICONS */}
        <div className="flex items-center gap-4 md:hidden">
            <button onClick={toggleTheme} className="text-xl hover:rotate-12 transition-transform">
               {theme === "dark" ? <FiSun className="text-yellow-400" /> : <FiMoon className="text-blue-600" />}
            </button>
            <button
              className={`text-2xl transition-colors ${theme === "dark" ? "text-white" : "text-blue-800"}`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div
          className={`md:hidden px-6 py-8 space-y-4 border-t animate-in slide-in-from-right duration-500
            ${theme === "dark" ? "bg-[#020617] border-white/10" : "bg-white border-gray-100"}
          `}
        >
          {["Home", "About", "Chapters", "Events", "Gallery", "Team"].map((item) => (
            <NavLink 
              key={item}
              onClick={() => setMenuOpen(false)} 
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`} 
              className={({ isActive }) => `block text-lg font-bold p-2 rounded-lg transition-all ${isActive ? "bg-blue-500 text-white pl-4" : "text-gray-500"}`}
            >
              {item}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}