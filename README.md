Foodies - Food Delivery App
Foodies is a modern, full-featured food delivery application built using the MERN Stack (MongoDB, Express.js, React, Node.js), complete with Stripe integration for secure payments. It includes three interfaces: User Panel, Admin Panel, and Backend API, all designed for performance, usability, and scalability.

🚀 Live Demo
User Panel: Live Link

Admin Panel: Live Link

✨ Features
👥 Customer Interface (Frontend)
Responsive Design: Adapts seamlessly to all screen sizes using React and CSS frameworks.

Authentication: Secure signup/login with JWT.

Restaurant & Menu Browsing: Search, filter, and view food items by category or popularity.

Order Management: Add to cart, place orders, select address, and track them in real-time.

Stripe Integration: Enables secure online payments.

🛠 Admin Panel
User & Role Management: View and manage customers and delivery personnel.

Product & Restaurant Control: Add/edit/delete restaurants, menus, and food categories.

Order Tracking: Monitor order status and update in real-time.

Analytics Dashboard (Planned): Track popular items, frequency, and user behavior.

⚙️ Backend (Node.js + Express)
RESTful APIs: Robust, secure endpoints for authentication, product management, and orders.

Database: MongoDB for fast, scalable storage.

WebSockets: Real-time order status updates.

Security: JWT auth, encrypted passwords (Bcrypt), and secure Stripe integration.

🧱 Tech Stack
Layer	Technologies
Frontend	React, React Router, CSS3, Bootstrap/Material UI
Backend	Node.js, Express.js, WebSockets
Database	MongoDB
Auth	JWT, Bcrypt
Payments	Stripe
Uploads	Multer

📁 Project Structure
bash
Copy
Edit
Tomato/
│
├── client/                  # Frontend (User Panel)
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       └── utils/
│
├── admin/                   # Admin Panel (React)
│   ├── components/
│   └── pages/
│
├── server/                  # Backend (Express + MongoDB)
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── middleware/
│
├── .env                     # Environment variables
├── README.md
└── package.json
🛠 Getting Started
1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/Mshandev/Food-Delivery
cd Food-Delivery
2. Install Dependencies
bash
Copy
Edit
# Frontend
cd client
npm install

# Admin Panel
cd ../admin
npm install

# Backend
cd ../server
npm install
3. Environment Variables
Create a .env file in the server/ folder with the following:

ini
Copy
Edit
JWT_SECRET=YOUR_SECRET_TEXT
SALT=YOUR_SALT_VALUE
MONGO_URL=YOUR_DATABASE_URL
STRIPE_SECRET_KEY=YOUR_STRIPE_SECRET
4. Set URLs in Code
Admin Panel (App.jsx):
Replace const url = YOUR_BACKEND_URL

Frontend (StoreContext.js):
Replace const url = YOUR_BACKEND_URL

Backend (orderController.js):
Replace const frontend_url = YOUR_FRONTEND_URL

5. Run the Project
bash
Copy
Edit
# Start Backend
cd server
nodemon server.js

# Start Frontend
cd ../client
npm start

# Start Admin Panel
cd ../admin
npm start
📸 Screenshots
Hero Section	Product Listing
	

Cart Page	Login Popup
	

🔮 Future Enhancements
🔔 Push Notifications for real-time order alerts.

📊 Advanced Analytics dashboard for admins and restaurant owners.

🌐 Multi-Language Support for broader accessibility.

🤝 Contribution Guidelines
Fork the repo.

Create a feature branch.

Submit a pull request.

Follow best practices and write meaningful commit messages.

💬 Feedback
Got suggestions or feedback?
Connect with me on LinkedIn
