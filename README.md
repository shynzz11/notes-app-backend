
# 📝 Notes App Backend

This is a **backend API for a Notes App** built using **Express.js, MongoDB, and JWT Authentication**.  
It allows users to create, read, and delete their notes securely.

---

## 🔧 Setup Instructions

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/Monze7/notes-app-backend.git
cd notes-app-backend
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Set Up Environment Variables
Create a `.env` file and add:
```
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4️⃣ Run the Server
```sh
npm start
```
or (for live reload):
```sh
npm run dev
```

---

## 📌 API Routes

### 🔹 Authentication
| Method | Endpoint       | Description              |
|--------|--------------|--------------------------|
| POST   | `/auth/signup` | Register a new user      |
| POST   | `/auth/login`  | Login & get JWT token   |
| POST   | `/auth/logout` | Logout user & blacklist token |

### 🔹 Notes CRUD
| Method | Endpoint       | Description                      |
|--------|--------------|----------------------------------|
| POST   | `/notes`      | Create a new note (JWT required) |
| GET    | `/notes`      | Get all notes (Only user’s own)  |
| DELETE | `/notes/:title` | Delete a note (Only user’s own) |

---

## 🔥 Future Improvements
- 🛡️ **Add role-based access (Admin, User)**
- 📄 **Improve API documentation**
- 🔐 **Enhance security with refresh tokens**
- **Interactive User Interface**

---

## 🛠️ Author
👨‍💻 **Monil Lakhotia**  
📩 **Contact:** [monillakhotia912@gmail.com](mailto:monillakhotia912@gmail.com)  
🌍 **GitHub:** [Monze7](https://github.com/Monze7)  
