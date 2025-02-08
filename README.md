
# 📝 Notes App Backend

This is a **backend API for a Notes App** built using **Express.js, MongoDB, and JWT Authentication**.  
It allows users to create, read, and delete their notes securely.

## 🚀 Features
✅ **User Authentication** (JWT-based login & signup)  
✅ **Create, Read, Delete Notes** (Each user sees only their notes)  
✅ **Secure Routes** (Only logged-in users can access data)  
✅ **MongoDB for Data Storage**  

---

## 🛠️ Tech Stack
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Mongoose)  
- **Authentication:** JWT (JSON Web Tokens)  
- **Environment Variables:** `dotenv`  

---

## 🔧 Setup Instructions

### 1️⃣ **Clone the Repository**

git clone https://github.com/Monze7/notes-app-backend.git
cd notes-app-backend

2️⃣ Install Dependencies
npm install

3️⃣ Set Up Environment Variables
Create a .env file and add:

PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key


4️⃣ Run the Server

npm start

Copy
Edit
npm run dev


📌 API Routes
🔹 Authentication
Method	Endpoint	Description
POST	/auth/signup	Register a new user
POST	/auth/login	Login & get JWT token

🔹 Notes CRUD
Method	Endpoint	Description
POST	/notes	Create a new note (JWT required)
GET	/notes	Get all notes (Only user’s own)
DELETE	/notes/:title	Delete a note (Only user’s own)


🔥 Future Improvements
🛡️ Add role-based access (Admin, User)
📄 Improve API documentation
🎨 Build a frontend using V0
🔐 Enhance security with refresh tokens
🛠️ Author
👨‍💻 Monil Lakhotia
📩 Contact: monillakhotia912@gmail.com
🌍 GitHub: Monze7

📝 License
This project is licensed under the MIT License.