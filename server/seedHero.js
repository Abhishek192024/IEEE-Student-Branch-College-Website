// server/seedTeam.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import Team from "./models/Team.model.js";

dotenv.config();

// Aapka MONGO_URI .env file se aayega
const mongoURI = process.env.MONGO_URI; 

const teamData = [
  // --- FACULTY ADVISORS ---
  { name: "Prof. (Dr.) Baldev Singh", role: "Advisor", category: "advisor", email: "baldev_singh@vgu.ac.in", phone: "9785643441", linkedin: "https://www.linkedin.com/in/dr-baldev-singh-77406b1a9/?originalSubdomain=in", order: 1 },
  { name: "Prof.(Dr.) Surendra Yadav", role: "Advisor", category: "advisor", email: "surendra.yadav@vgu.ac.in", phone: "9982317251", linkedin: "https://www.linkedin.com/in/prof-dr-surendra-yadav-944319a0/", order: 2 },
  { name: "Dr. Prashant Sharma", role: "Advisor", category: "advisor", email: "prashant.sharma@vgu.ac.in", phone: "9784025875", linkedin: "https://www.linkedin.com/in/dr-prashant-sharma-b9783618", order: 3 },
  { name: "Mayuri Katara", role: "Assistant Professor", category: "advisor", email: "mayuree.katara@vgu.ac.in", phone: "9587087442", linkedin: "https://www.linkedin.com/in/mayuri-katara-6850a0192/?originalSubdomain=in", order: 4 },
  { name: "Dr. Muquaddar Ali", role: "Assistant Professor", category: "advisor", email: "muquaddar.ali@vgu.ac.in", phone: "99024238334", linkedin: "https://www.linkedin.com/in/dr-muquaddar-ali/?originalSubdomain=in", order: 5 },
  { name: "Narayan Vyas", role: "Assistant Professor", category: "advisor", email: "narayan.vyas@vgu.ac.in", phone: "8560014421", linkedin: "https://www.linkedin.com/in/narayanvyas87/?originalSubdomain=in", order: 6 },

  // --- OUR TEAM (CORE) ---
  { name: "Hemant Modi", role: "Chair", category: "core", email: "hemantmodi152003@gmail.com", phone: "9460500295", linkedin: "https://www.linkedin.com/in/hemant-modi24", order: 7 },
  { name: "Lakshya Sharma", role: "Vice Chair", category: "core", email: "lakshyasharma1316@gmail.com", phone: "8949411277", linkedin: "https://www.linkedin.com/in/lakshyasharma1316", order: 8 },
  { name: "Prasanta Pandey", role: "Treasurer", category: "core", email: "prasantapandey1607@gmail.com", phone: "7790922616", linkedin: "https://www.linkedin.com/in/prasantapandey16", order: 9 },
  { name: "Abhishek Kumar", role: "Technical Head", category: "core", email: "chaurasiyaabhi684@gmail.com", phone: "6200590137", linkedin: "https://www.linkedin.com/in/abhishek-chaurasiya-363883384", order: 10 },
  { name: "Manyata Sharma", role: "Secretary", category: "core", email: "manyatasharma576@gmail.com", phone: "9407281351", linkedin: "https://www.linkedin.com/in/manyata-sharma-318754286", order: 11 },

  // --- SUPPORTIVE MEMBERS ---
  { name: "Abhishek Prasad", role: "Member", category: "supportive", email: "abhishekprasad82528@gmail.com", phone: "7292846975", linkedin: "https://www.linkedin.com/in/abhishek-prasad-b8435b363", order: 12 },
  { name: "Anushka Thakur", role: "Member", category: "supportive", email: "anushkaaathakur@gmail.com", phone: "7277251151", linkedin: "https://www.linkedin.com/in/anushka-thakur-013781286", order: 13 },
  { name: "Jijo Vinod", role: "Member", category: "supportive", email: "vinodjijo12@gmail.com", phone: "8306202833", linkedin: "https://www.linkedin.com/in/jijov", order: 14 },
  { name: "Arman Hussain", role: "Member", category: "supportive", email: "armanhussain681@gmail.com", phone: "9057212878", linkedin: "https://www.linkedin.com/in/arman-husain-cse", order: 15 },
  { name: "Dishant Choudhary", role: "Member", category: "supportive", email: "dishantchoudhary1218@gmail.com", phone: "8306443235", linkedin: "https://www.linkedin.com/in/dishant-choudhary", order: 16 },
  { name: "Ghanshyam Suthar", role: "Member", category: "supportive", email: "ghanshyamsuthar1289@gmail.com", phone: "9166270003", linkedin: "https://www.linkedin.com/in/ghanshyam-suthar-952ab0373", order: 17 },
  { name: "Shreeansh Ayush", role: "Member", category: "supportive", email: "ayush@gmail.com", phone: "8809076286", linkedin: "https://www.linkedin.com/in/shreeansh-ayush-429452281", order: 18 },
];

const seedDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("✅ Connected to MongoDB");

    // Purana data delete kar dena (agar kuch hai toh)
    await Team.deleteMany({});
    console.log("🧹 Cleared old team data");

    // Naya data insert karna
    await Team.insertMany(teamData);
    console.log("🎉 Successfully seeded Team data!");

    mongoose.connection.close();
  } catch (error) {
    console.error("❌ Error seeding data:", error);
    process.exit(1);
  }
};

seedDB();