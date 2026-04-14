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
    `relative py-2 text-[16px] lg:text-[17px] font-bold tracking-wide transition-all duration-300 group
     ${isActive
       ? "text-blue-600 dark:text-blue-400"
       : theme === "dark" ? "text-gray-300 hover:text-white" : "text-slate-800 hover:text-blue-700"
     }`;

  const Underline = ({ isActive }) => (
    <span className={`absolute bottom-0 left-0 h-[3px] rounded-t-md bg-blue-600 dark:bg-blue-500 transition-all duration-300
      ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}>
    </span>
  );

  return (
    <header
      className={`w-full z-40 backdrop-blur-md transition-all duration-500
        ${theme === "dark"
          ? "bg-[#020617]/90 border-b border-white/10"
          : "bg-white/90 border-b border-gray-200 shadow-sm"}
      `}
    >
      <div className="max-w-7xl mx-auto h-20 px-4 sm:px-6 flex items-center justify-between">

        {/* 🔥 FIX: Animation हटाया, Gap कम किया (gap-2.5) और Alignment सही की */}
        <NavLink to="/" className="flex items-center gap-2.5">
          <img
            src="/assets/ieee-vgu-logo.png"
            alt="IEEE VGU"
            className="h-14 lg:h-16 object-contain" 
          />
          <div className="hidden sm:flex flex-col justify-center">
            <span className="text-[18px] lg:text-[22px] font-bold text-[#1e3a8a] dark:text-blue-400 leading-none mb-1">
              Vivekananda Global University
            </span>
            <span className="text-[18px] lg:text-[22px] font-bold text-[#1e3a8a] dark:text-blue-300 leading-none mb-1">
              IEEE Student Branch
            </span>
          </div>
        </NavLink>

        <nav className="hidden md:flex items-center gap-5 lg:gap-8">
          <NavLink to="/" className={linkClass}>
            {({ isActive }) => (<>Home <Underline isActive={isActive} /></>)}
          </NavLink>

          <NavLink to="/about" className={linkClass}>
            {({ isActive }) => (<>About <Underline isActive={isActive} /></>)}
          </NavLink>

          <NavLink to="/chapters" className={linkClass}>
            {({ isActive }) => (<>Chapters <Underline isActive={isActive} /></>)}
          </NavLink>

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`relative py-2 flex items-center gap-1 text-[16px] lg:text-[17px] font-bold tracking-wide transition-all group
                ${theme === "dark" ? "text-gray-300 hover:text-white" : "text-slate-800 hover:text-blue-700"}`}
            >
              Activities
              <FiChevronDown className={`ml-1 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
              <span className={`absolute bottom-0 left-0 h-[3px] rounded-t-md bg-blue-600 dark:bg-blue-500 transition-all duration-300 ${dropdownOpen ? 'w-full' : 'w-0'}`}></span>
            </button>

            {dropdownOpen && (
              <div
                className={`absolute top-12 left-0 w-56 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-4 duration-300
                  ${theme === "dark"
                    ? "bg-[#0f172a] border border-white/10 shadow-black/50"
                    : "bg-white border border-gray-100 shadow-blue-900/10"}
                `}
              >
                <NavLink to="/events" onClick={() => setDropdownOpen(false)} className="block px-6 py-3.5 text-base font-bold hover:bg-blue-50 hover:text-blue-700 dark:hover:bg-blue-600 dark:hover:text-white transition-colors">
                  Events & Workshops
                </NavLink>
                <NavLink to="/gallery" onClick={() => setDropdownOpen(false)} className="block px-6 py-3.5 text-base font-bold hover:bg-blue-50 hover:text-blue-700 dark:hover:bg-blue-600 dark:hover:text-white transition-colors">
                  Photo Gallery
                </NavLink>
              </div>
            )}
          </div>

          <NavLink to="/team" className={linkClass}>
            {({ isActive }) => (<>Team <Underline isActive={isActive} /></>)}
          </NavLink>

          <button
            onClick={toggleTheme}
            className={`p-2.5 rounded-full transition-all duration-500 hover:rotate-12 active:scale-90
              ${theme === "dark"
                ? "bg-white/10 text-yellow-400 hover:bg-white/20"
                : "bg-slate-100 text-blue-600 shadow-inner hover:bg-slate-200"}`}
          >
            {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
        </nav>

        <div className="flex items-center gap-4 md:hidden">
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
               {theme === "dark" ? <FiSun className="text-yellow-400 text-2xl" /> : <FiMoon className="text-blue-600 text-2xl" />}
            </button>
            <button
              className={`text-3xl transition-colors ${theme === "dark" ? "text-white" : "text-slate-800"}`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className={`md:hidden px-6 py-8 space-y-3 border-t animate-in slide-in-from-top-4 duration-500 shadow-2xl
            ${theme === "dark" ? "bg-[#020617] border-white/10" : "bg-white border-gray-100"}
          `}
        >
          {["Home", "About", "Chapters", "Events", "Gallery", "Team"].map((item) => (
            <NavLink
              key={item}
              onClick={() => setMenuOpen(false)}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={({ isActive }) => `block text-xl font-black tracking-wide p-3.5 rounded-xl transition-all ${isActive ? "bg-blue-600 text-white pl-5 shadow-md shadow-blue-500/20" : theme === "dark" ? "text-gray-400 hover:text-white" : "text-slate-600 hover:text-blue-700 hover:bg-slate-50"}`}
            >
              {item}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}