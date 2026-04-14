import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { toast, Toaster } from "react-hot-toast";
import { 
  FiUser, FiBriefcase, FiList, FiHash, 
  FiMail, FiPhone, FiLinkedin, FiImage, 
  FiSave, FiEdit2, FiTrash2, FiX 
} from "react-icons/fi";

// 🔥 Ensure this points to your correct backend URL
const API = "http://localhost:5000";

export default function AdminTeam() {
  const [team, setTeam] = useState([]);
  
  // States for Form
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [category, setCategory] = useState("core");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [order, setOrder] = useState(100);
  const [image, setImage] = useState(null);

  // Edit Mode States
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const fileInputRef = useRef(null);

  const token = localStorage.getItem("adminToken");

  const fetchTeam = async () => {
    try {
      const { data } = await axios.get(`${API}/api/team`);
      setTeam(data);
    } catch (err) {
      console.error("Fetch team error:", err);
      toast.error("Failed to load team members.");
    }
  };

  useEffect(() => {
    fetchTeam();
  }, []);

  // Form Reset Function
  const resetForm = () => {
    setName(""); setRole(""); setCategory("core");
    setEmail(""); setPhone(""); setLinkedin(""); setOrder(100); setImage(null);
    setIsEditing(false); setEditId(null);
    if(fileInputRef.current) fileInputRef.current.value = "";
  };

  // EDIT CLICK: Fill form with existing data
  const handleEditClick = (m) => {
    setIsEditing(true);
    setEditId(m._id);
    setName(m.name);
    setRole(m.role);
    setCategory(m.category);
    setEmail(m.email || "");
    setPhone(m.phone || "");
    setLinkedin(m.linkedin || "");
    setOrder(m.order || 100);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    toast("Edit mode active. Update details below.", { icon: "✏️" });
  };

  // HANDLE ADD OR UPDATE
  const handleSubmit = async () => {
    if (!name || !role) {
      toast.error("Name and Role are required!");
      return;
    }

    const loadToast = toast.loading(isEditing ? "Updating member..." : "Adding member...");

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("role", role);
      formData.append("category", category);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("linkedin", linkedin);
      formData.append("order", order);
      if (image) formData.append("image", image);

      if (isEditing) {
        // UPDATE API CALL (PUT)
        await axios.put(`${API}/api/team/${editId}`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });
        toast.success("Member Updated Successfully!", { id: loadToast });
      } else {
        // ADD API CALL (POST)
        await axios.post(`${API}/api/team`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });
        toast.success("Member Added Successfully!", { id: loadToast });
      }

      resetForm();
      fetchTeam();
    } catch (err) {
      console.error(err);
      toast.error("Operation failed! Check console.", { id: loadToast });
    }
  };

  const deleteMember = async (id) => {
    if (!window.confirm("Are you sure you want to delete this member?")) return;
    try {
      await axios.delete(`${API}/api/team/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Member deleted successfully!");
      fetchTeam();
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete member.");
    }
  };

  // Reusable Input Component for clean code
  const InputField = ({ icon, ...props }) => (
    <div className="relative flex items-center">
      <div className="absolute left-4 text-blue-400">{icon}</div>
      <input 
        className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" 
        {...props} 
      />
    </div>
  );

  return (
    <div className="min-h-screen px-6 py-12 md:p-12 text-white bg-[#020617] relative overflow-hidden">
      <Toaster position="top-right" />
      
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* ================= HEADER ================= */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 tracking-tight mb-2">
              {isEditing ? "Edit Team Member" : "Team Management"}
            </h1>
            <p className="text-gray-400 font-medium">Add, update, or remove members from the website.</p>
          </div>
          {isEditing && (
            <button onClick={resetForm} className="flex items-center gap-2 bg-red-500/10 text-red-500 border border-red-500/20 px-5 py-2.5 rounded-xl font-bold hover:bg-red-500 hover:text-white transition-all">
              <FiX /> Cancel Edit
            </button>
          )}
        </div>

        {/* ================= ADD/EDIT FORM ================= */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 p-8 rounded-[2rem] border border-white/10 shadow-2xl backdrop-blur-md mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <InputField icon={<FiUser />} placeholder="Full Name *" value={name} onChange={(e) => setName(e.target.value)} />
            <InputField icon={<FiBriefcase />} placeholder="Role (e.g. Chair, Tech Lead) *" value={role} onChange={(e) => setRole(e.target.value)} />
            
            <div className="relative flex items-center">
              <div className="absolute left-4 text-blue-400"><FiList /></div>
              <select className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-black/40 border border-white/10 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all appearance-none" value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="advisor" className="bg-gray-900">Faculty Advisor</option>
                <option value="core" className="bg-gray-900">Our Team (Core)</option>
                <option value="supportive" className="bg-gray-900">Supportive Member</option>
              </select>
            </div>

            <InputField icon={<FiHash />} type="number" placeholder="Priority Order (e.g. 1, 2, 100)" value={order} onChange={(e) => setOrder(e.target.value)} title="Lower number appears first" />
            
            <InputField icon={<FiMail />} type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
            <InputField icon={<FiPhone />} placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
            
            <div className="md:col-span-2">
              <InputField icon={<FiLinkedin />} placeholder="LinkedIn Profile URL" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} />
            </div>

            <div className="md:col-span-2 flex flex-col gap-3 mt-2 bg-blue-500/5 p-5 rounded-2xl border border-blue-500/20">
              <label className="text-sm font-bold text-blue-300 flex items-center gap-2">
                <FiImage /> {isEditing ? "Change Photo (Leave empty to keep current)" : "Upload Member Photo"}
              </label>
              <input 
                ref={fileInputRef} 
                type="file" 
                accept="image/*" 
                onChange={(e) => setImage(e.target.files[0])} 
                className="text-sm text-gray-400 file:mr-4 file:py-2.5 file:px-5 file:rounded-xl file:border-0 file:font-bold file:bg-blue-600 file:text-white hover:file:bg-blue-700 cursor-pointer" 
              />
            </div>

            <button 
              onClick={handleSubmit} 
              className={`md:col-span-2 py-4 rounded-xl font-black text-lg flex items-center justify-center gap-3 transition-all shadow-xl active:scale-[0.98] ${isEditing ? 'bg-gradient-to-r from-emerald-500 to-teal-600 shadow-emerald-500/20 hover:shadow-emerald-500/40' : 'bg-gradient-to-r from-blue-600 to-indigo-600 shadow-blue-500/20 hover:shadow-blue-500/40'}`}
            >
              {isEditing ? <><FiSave /> Update Member Details</> : <><FiUser /> Add Team Member</>}
            </button>
          </div>
        </motion.div>

        {/* ================= TEAM LIST ================= */}
        <div className="flex items-center gap-3 mb-8">
          <h2 className="text-2xl font-black text-white">Current Members</h2>
          <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">{team.length}</span>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((m) => (
            <motion.div 
              key={m._id} 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white/5 p-5 rounded-2xl border border-white/10 flex items-center gap-5 relative hover:bg-white/10 transition-colors group"
            >
              {/* Category & Order Badge */}
              <div className="absolute top-3 right-3 flex gap-2">
                <span className="text-[10px] bg-white/10 text-gray-300 px-2 py-1 rounded font-bold uppercase">{m.category}</span>
                <span className="text-[10px] bg-blue-600 text-white px-2 py-1 rounded font-bold">Ord: {m.order}</span>
              </div>

              {/* Avatar */}
              <div className="shrink-0 w-16 h-16 rounded-full overflow-hidden border-2 border-blue-500/50 mt-4">
                <img 
                  src={m.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(m.name)}&background=eff6ff&color=1d4ed8`} 
                  alt={m.name} 
                  className="w-full h-full object-cover" 
                />
              </div>
              
              {/* Details */}
              <div className="flex-1 mt-4 overflow-hidden">
                <h3 className="font-bold text-lg truncate text-white">{m.name}</h3>
                <p className="text-xs font-semibold text-blue-400 truncate mb-3">{m.role}</p>
                
                {/* Actions */}
                <div className="flex items-center gap-2">
                  <button onClick={() => handleEditClick(m)} className="flex-1 flex items-center justify-center gap-1.5 bg-white/10 hover:bg-blue-500 text-white py-1.5 rounded-lg text-xs font-bold transition-colors">
                    <FiEdit2 /> Edit
                  </button>
                  <button onClick={() => deleteMember(m._id)} className="flex-1 flex items-center justify-center gap-1.5 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white py-1.5 rounded-lg text-xs font-bold transition-colors">
                    <FiTrash2 /> Del
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
          
          {team.length === 0 && (
            <div className="col-span-full py-10 text-center text-gray-500 font-medium">
              No team members found. Add one above!
            </div>
          )}
        </div>

      </div>
    </div>
  );
}