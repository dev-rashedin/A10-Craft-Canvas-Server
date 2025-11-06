# 🖌️ Craft Canvas Server

The **Craft Canvas Server** is the backend API for the [Craft Canvas](https://craft-canvas-server-hazel.vercel.app) project.  
It’s built with **Express.js** and **MongoDB**, providing RESTful CRUD operations for users, items, and categories.

---

## 🚀 Live Server
🔗 **[Visit Live API](https://craft-canvas-server-hazel.vercel.app)**

---

## 🧩 Features & Characteristics
- ⚡ **Express.js** — Fast and lightweight backend framework  
- 🗄️ **MongoDB** — Flexible and powerful NoSQL database  
- 🧰 **CRUD Operations** for Users, Items, and Categories  
- 🔁 **RESTful API** structure  
- 🧠 Organized codebase for easy scalability  
- ✅ Uses **async/await**, **status codes**, and **asyncHandler** for error safety  

---

## 🛠️ Technologies Used
- **Node.js**
- **Express.js**
- **MongoDB (Native Driver)**
- **Dotenv**
- **Cors**
- **http-status-codes**
- **express-async-handler**

---

## 📦 Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/dev-rashedin/A10-Craft-Canvas-Server.git
cd A10-Craft-Canvas-Server
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Setup Environment Variables
Create a `.env` file in the root directory and add:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### 4️⃣ Run the Server
```bash
npm run dev
```
Your backend will be live at:
```
http://localhost:5000
```

---

## 🧪 API Endpoints

### 🧍‍♂️ User Routes
| Method | Endpoint         | Description              |
|--------|------------------|--------------------------|
| GET    | `/users`         | Get all users            |
| GET    | `/users/:id`     | Get a user by ID         |
| POST   | `/users`         | Create a new user        |

### 🎨 Item Routes
| Method | Endpoint         | Description              |
|--------|------------------|--------------------------|
| GET    | `/items`         | Get all items            |
| GET    | `/items/:id`     | Get an item by ID        |
| POST   | `/items`         | Add a new item           |
| PATCH  | `/items/:id`     | Update an item by ID     |
| DELETE | `/items/:id`     | Delete an item by ID     |

### 🗂️ Category Routes
| Method | Endpoint         | Description              |
|--------|------------------|--------------------------|
| GET    | `/category`      | Get all subcategories    |


---

## 💡 Future Improvements
- Add authentication (JWT-based)
- Add validation and error middleware
- Implement file uploads with Cloudinary or AWS S3

---

## 🧑‍💻 Author
**Rashedin Islam**  
🔗 [Portfolio](https://www.rashedin.dev)  
🔗 [LinkedIn](https://www.linkedin.com/in/dev-rashedin)  
🔗 [GitHub](https://github.com/dev-rashedin)

---

⭐ *If you like this project, please consider giving it a star on GitHub!*
