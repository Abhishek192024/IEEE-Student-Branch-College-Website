import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  FiImage, 
  FiCamera, 
  FiCalendar, 
  FiUsers, 
  FiZap, 
  FiLogOut, 
  FiArrowRight 
} from "react-icons/fi";

export default function Admin() {
  const navigate = useNavigate();

  // ✅ LOGOUT FUNCTION
  const handleLogout = () => {
    localStorage.removeItem("adminToken"); // session end
    navigate("/admin-secret-vgu"); // back to login
  };

  // ✅ Dashboard Menu Items (Saare routes check kar liye hain)
  const menuItems = [
    {
      title: "Upcoming Event",
      desc: "Manage main announcement bar & registration link",
      icon: <FiZap className="text-yellow-400" />,
      path: "/admin-secret-vgu/upcoming",
      color: "from-yellow-500/20 to-orange-500/20",
      border: "border-yellow-500/30",
    },
    {
      title: "Hero Section",
      desc: "Upload, delete & reorder main slider images",
      icon: <FiImage className="text-blue-400" />,
      path: "/admin-secret-vgu/hero",
      color: "from-blue-500/20 to-indigo-500/20",
      border: "border-blue-500/30",
    },
    {
      title: "Events Section",
      desc: "Create new events and manage reports",
      icon: <FiCalendar className="text-purple-400" />,
      path: "/admin-secret-vgu/events",
      color: "from-purple-500/20 to-pink-500/20",
      border: "border-purple-500/30",
    },
    {
      title: "Gallery Section",
      desc: "Organize campus and event memories",
      icon: <FiCamera className="text-green-400" />,
      path: "/admin-secret-vgu/gallery",
      color: "from-green-500/20 to-emerald-500/20",
      border: "border-green-500/30",
    },
    {
      title: "Team Section",
      desc: "Update core members and faculty advisors",
      icon: <FiUsers className="text-cyan-400" />,
      path: "/admin-secret-vgu/team",
      color: "from-cyan-500/20 to-blue-500/20",
      border: "border-cyan-500/30",
    },
  ];

  // Animation Variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemAnim = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white px-6 py-12 lg:px-16 relative overflow-hidden">
      
      {/* Background Blurs */}
      <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* HEADER */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
              Admin Panel
            </h1>
            <p className="text-gray-400 mt-2 font-medium tracking-wide uppercase text-xs">
              IEEE VGU Student Branch Dashboard
            </p>
          </motion.div>

          <motion.button
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLogout}
            className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 font-bold"
          >
            <FiLogOut /> Logout
          </motion.button>
        </header>

        {/* STATS STRIP */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 p-1 bg-white/5 border border-white/10 rounded-2xl inline-block"
        >
           <div className="px-4 py-2 flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-xs font-bold text-gray-300 uppercase tracking-tighter">System Online</span>
           </div>
        </motion.div>

        {/* GRID SECTION */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemAnim}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              onClick={() => navigate(item.path)}
              className={`group relative cursor-pointer p-8 rounded-[2.5rem] border ${item.border} bg-gradient-to-br ${item.color} backdrop-blur-xl transition-all duration-300 overflow-hidden shadow-2xl`}
            >
              {/* Abstract Shape */}
              <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-white/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-4xl mb-6 shadow-xl border border-white/10 group-hover:rotate-6 transition-transform">
                  {item.icon}
                </div>
                
                <h2 className="text-2xl font-black mb-3 group-hover:translate-x-1 transition-transform">
                  {item.title}
                </h2>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  {item.desc}
                </p>

                <div className="flex items-center text-[10px] font-black tracking-[0.2em] uppercase text-blue-400 group-hover:text-white transition-colors">
                  Open Section <FiArrowRight className="ml-2 group-hover:translate-x-3 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* FOOTER */}
        <footer className="mt-24 pb-10 text-center text-gray-600 text-[10px] font-bold uppercase tracking-[0.3em]">
          <p>© 2026 IEEE VGU Student Branch • All Rights Reserved</p>
        </footer>
      </div>
    </div>
  );
}