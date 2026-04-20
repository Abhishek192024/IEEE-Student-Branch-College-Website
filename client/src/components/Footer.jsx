import React from "react";
import { NavLink } from "react-router-dom";
import { 
  FiMapPin, FiPhone, FiMail, FiChevronRight, 
  FiExternalLink, FiHeart, FiInstagram, FiLinkedin, FiFacebook 
} from "react-icons/fi";

export default function Footer() {
  const quickLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Chapters", link: "/chapters" },
    { name: "Events", link: "/events" },
    { name: "Gallery", link: "/gallery" },
  ];

  const ieeeLinks = [
    { name: "IEEE Global", link: "https://www.ieee.org" },
    { name: "IEEE Xplore", link: "https://ieeexplore.ieee.org" },
    { name: "IEEE Student Membership", link: "https://www.ieee.org/membership/students" },
    { name: "IEEE India Council", link: "https://ieeeindiacouncil.org" },
    { name: "IEEE Region 10", link: "https://r10.ieee.org" },
    { name: "IEEE Standards", link: "https://standards.ieee.org" },
  ];

  return (
    <footer className="relative mt-24 border-t transition-colors duration-500 bg-white dark:bg-[#020617] border-gray-200 dark:border-white/10 overflow-hidden">
      
      {/* ================= BACKGROUND GLOWS ================= */}
      <div className="absolute top-0 left-[10%] w-[30%] h-[30%] bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-[10%] w-[30%] h-[30%] bg-indigo-400/10 dark:bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* ================= MAIN FOOTER ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* ABOUT VGU */}
        <div className="group flex flex-col">
          <h2 className="text-xl font-black mb-6 text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors tracking-wide">
            Vivekananda Global University
          </h2>
          <p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed mb-6 font-medium">
            Vivekananda Global University (VGU), Jaipur is a NAAC A+ accredited private university focused on innovation, research, and global education excellence.
          </p>
          
          <div className="mt-auto flex items-start gap-3 text-sm text-slate-700 dark:text-gray-300 font-medium p-4 bg-slate-50 dark:bg-white/5 rounded-xl border border-gray-100 dark:border-white/5">
            <FiMapPin className="text-blue-600 dark:text-blue-400 mt-0.5 shrink-0 text-lg" />
            <span>Sector 36, NRI Road, Jagatpura, Jaipur, Rajasthan, India</span>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h2 className="text-lg font-bold mb-6 text-slate-800 dark:text-white uppercase tracking-widest text-sm">
            Quick Links
          </h2>
          <ul className="space-y-4">
            {quickLinks.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.link}
                  className="group flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <FiChevronRight className="text-gray-400 dark:text-gray-600 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                  <span className="relative overflow-hidden pb-0.5">
                    {item.name}
                    <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full rounded-full"></span>
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* IEEE LINKS */}
        <div>
          <h2 className="text-lg font-bold mb-6 text-slate-800 dark:text-white uppercase tracking-widest text-sm">
            IEEE Links
          </h2>
          <ul className="space-y-4">
            {ieeeLinks.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  <FiExternalLink className="text-gray-400 dark:text-gray-600 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-hover:rotate-45 group-hover:scale-110 transition-all" />
                  <span className="relative pb-0.5 border-b border-transparent group-hover:border-indigo-600 dark:group-hover:border-indigo-400 transition-colors">
                    {item.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT & SOCIALS */}
        <div className="flex flex-col">
          <h2 className="text-lg font-bold mb-6 text-slate-800 dark:text-white uppercase tracking-widest text-sm">
            Contact Us
          </h2>
          
          <div className="space-y-4 mb-8">
            {/* Phone */}
            <a href="tel:+919982317251" className="flex items-center gap-3 text-sm text-slate-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium group">
              <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-white/5 flex items-center justify-center text-blue-500 group-hover:bg-blue-100 dark:group-hover:bg-blue-500/20 transition-colors">
                <FiPhone />
              </div>
              +91 9982317251
            </a>
            
            {/* Email */}
            <a href="mailto:ieee@vgu.ac.in" className="flex items-center gap-3 text-sm text-slate-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium group">
              <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-white/5 flex items-center justify-center text-blue-500 group-hover:bg-blue-100 dark:group-hover:bg-blue-500/20 transition-colors">
                <FiMail />
              </div>
              ieee@vgu.ac.in
            </a>

            {/* Divider */}
            <div className="w-full h-px bg-gray-100 dark:bg-white/5 my-2"></div>

            {/* Instagram */}
            <a href="https://www.instagram.com/ieee_vgu?igsh=MXFqYXR3YnA3N2FyYw%3D%3D" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-slate-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors font-medium group">
              <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-white/5 flex items-center justify-center text-slate-500 group-hover:text-pink-600 dark:group-hover:text-pink-400 group-hover:bg-pink-100 dark:group-hover:bg-pink-500/20 transition-colors">
                <FiInstagram />
              </div>
              @ieee_vgu
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/vguieeestudentbranch" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-slate-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-500 transition-colors font-medium group">
              <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-white/5 flex items-center justify-center text-slate-500 group-hover:text-blue-700 dark:group-hover:text-blue-500 group-hover:bg-blue-100 dark:group-hover:bg-blue-500/20 transition-colors">
                <FiLinkedin />
              </div>
              IEEE VGU Branch
            </a>

            
          </div>

          <a
            href="https://www.vgu.ac.in/"
            target="_blank"
            rel="noreferrer"
            className="mt-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-1 active:scale-95 w-full sm:w-auto"
          >
            Visit Official Website <FiChevronRight />
          </a>
        </div>
      </div>

      {/* ================= COPYRIGHT BAR ================= */}
      <div className="relative z-10 border-t border-gray-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-500 dark:text-gray-500">
          <p>
            © {new Date().getFullYear()} IEEE VGU CSE Branch. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Built with <FiHeart className="text-red-500 fill-red-500 animate-pulse" /> by Abhishek
          </p>
        </div>
      </div>
    </footer>
  );
}