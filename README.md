📝 NoteApp – Backend API

A secure and lightweight Notes Management Backend built using Node.js, Express, and MongoDB.
This API allows users to register, log in, create notes, update them, and delete them, all protected with JWT authentication.

Perfect for learning REST APIs, authentication, middleware, and database CRUD operations.

🔧 Built With

⚙️ Express.js — server & routing

🔐 bcrypt — password hashing

🔑 JWT (jsonwebtoken) — secure authentication

🗄️ Mongoose — MongoDB ORM

🌐 CORS — cross-origin access

🧪 Postman — testing the API

📦 Node.js — backend runtime


🌟 Features

✔ User Registration (password hashed using bcrypt)
✔ Secure Login (JWT signed token)
✔ Authorization Middleware
✔ Create / Read / Update / Delete Notes
✔ Protected Routes for Notes
✔ MongoDB database connection
✔ Clean folder structure
✔ Beginner-friendly backend project


📚 API Endpoints
🔐 Auth Routes
Method	Endpoint	Description
POST	/register	Create new user
POST	/login	Log in and get JWT
🗒️ Notes Routes (Protected)

(Require Authorization header: Bearer <token>)

Method	Endpoint	Description
POST	/add/note	Create a new note
GET	/get/note	Get all user notes
PUT	/update/note/:id	Update existing note
DELETE	/delete/note/:id	Delete a note


🚀 Getting Started

1️⃣ Clone the repository
git clone https://github.com/sahillll0/NoteApp-Backend-API
cd NoteApp-Backend-API

2️⃣ Install dependencies
npm install

3️⃣ Create your .env file
MONGO_URL=your_mongo_connection_string
JWT_SECRET=your_secret_key
PORT=5000

4️⃣ Start the server
npm start


Server will run on:

http://localhost:5000

🧠 How It Works

.User registers → password hashed with bcrypt

.User logs in → server returns a JWT token

.Client must send token in headers:

.Authorization: Bearer <your_token>

.Middleware verifies token before allowing access to note routes

.Notes are stored in MongoDB using Mongoose models

📁 Project Structure
NoteApp-Backend-API/
├── config/
│   └── db.js
├── models/
│   ├── userModel.js
│   └── noteModel.js
├── routes/
│   ├── userRoutes.js
│   └── noteRoutes.js
├── middleware/
│   └── auth.js
├── server.js
└── package.json

🧪 Testing With Postman

.Import the routes

.Register a user

.Log in → copy JWT token

.Add token to Authorization header

.Test CRUD operations easily


🎯 Future Improvements

.Add forgot password feature

.Add note categories / tags

.Add cloud database (MongoDB Atlas)

.Add rate-limiting for security


🤝 Author & Acknowledgements

**Made with ❤️ by sahillll0**

If this project helped you, consider ⭐ starring the repository —
it motivates me to build more awesome projects!

"Keep building. Keep growing."
