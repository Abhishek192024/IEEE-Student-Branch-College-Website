IEEE VGU Student Branch Portal
Vivekananda Global University (VGU) ke IEEE Student Branch ke liye banayi gayi ek modern web application. Ye platform branch ki activities, events, aur team members ko manage aur display karne ke liye design kiya gaya hai.

Project Overview
Ye application MERN Stack par based hai, jisme responsive design ke liye Tailwind CSS aur interactive animations ke liye Framer Motion ka upyog kiya gaya hai. Isme Light mode ko default rakha gaya hai, jo user ki choice par Dark mode mein switch ho sakta hai.

Full Workflow
1. User Interaction (Frontend)
Navigation: Navbar mein dynamic active indicators aur smooth sliding underlines di gayi hain.

Theme Management: ThemeContext ke zariye puri application ka look control hota hai. Default state "Light" hai.

Events Browsing: Users upcoming aur past events ko dekh sakte hain aur detail page par jaakar unki reports (PDF) download kar sakte hain.

2. Data Flow (API & State)
Request Handling: Frontend Axios ke zariye backend API se connect hota hai.

Centralized API: api.js file ke andar Base URL aur settings configured hain taaki maintenance aasaan ho.

3. Backend & Management
Database: MongoDB ka use karke events, team members aur gallery images ko store kiya gaya hai.

File Storage: Event posters aur reports ko server ke uploads folder ya Cloudinary par store kiya jata hai.

Admin Control: Admin panel ke zariye website ka content real-time mein update kiya ja sakta hai bina code badle.

Tech Stack
Frontend: React.js, Tailwind CSS, React Router, Context API.

Backend: Node.js, Express.js.

Database: MongoDB.

Icons: React Icons (Fi, Fa).

Folder Structure
Plaintext
src/
├── api/             # API configuration aur Axios setup
├── components/      # Navbar, Footer, Hero aur reusable UI
├── context/         # ThemeContext (Theme management logic)
├── pages/           # Home, About, Events, Gallery, Team pages
├── App.jsx          # Route definitions
└── main.jsx         # Application entry point aur Providers
Setup aur Installation
Repository ko clone karein:

Bash
git clone https://github.com/username/project-name.git
Dependencies install karein:

Bash
npm install
Environment Variables set karein (.env file):

Plaintext
VITE_API_URL=your_backend_api_url
Project start karein:

Bash
npm run dev

Developed by: Abhishek Kumar 
Institution: Vivekananda Global University, Jaipur
