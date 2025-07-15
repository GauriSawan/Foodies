# QuickBite

npm install react-scroll


 Tomato: A Food Delivery App

Tomato is a full-featured, responsive food delivery application built using the MERN stack (MongoDB, Express, React, Node.js) with Stripe payment integration. This project delivers a seamless experience for customers, administrators, and delivery personnel, combining a user-friendly frontend, a robust backend, and an intuitive admin panel into a single, comprehensive platform. 

 Features

 Customer Interface (Frontend)
- Responsive Design: Developed with React, Tomato offers a fully responsive interface that adapts to various devices, from desktops to mobile screens, ensuring an optimized user experience.
- User Authentication: Secure user login and registration using JSON Web Tokens (JWT) to manage sessions and protect user data.
- Browse and Search: Users can browse restaurants, view menus, and search for food items by category, popularity, or dietary preference.
- Order Management: Customers can place orders, select their preferred delivery address, and track the status of their orders in real-time.
- Payment Integration: With Stripe integrated, users can make secure, hassle-free payments directly within the app.
  
 Admin Panel
- User Management: Admins can view and manage user accounts, including customer and delivery personnel information.
- Menu and Restaurant Management: Easily add, edit, and delete food items, categories, and restaurant details to keep the offerings up to date.
- Order Tracking: Real-time monitoring of active and past orders, with controls to update the order status (e.g., received, in-progress, completed, delivered).
- Analytics: Track key metrics like popular items, order frequency, and user activity to make informed decisions and improve services.

 Backend (Server)
- API Development: Built with Express, the backend provides RESTful APIs to handle requests, manage authentication, and connect the frontend and admin panel to the MongoDB database.
- Data Storage: MongoDB is used for storing user profiles, order details, restaurant data, and menu items in a scalable and efficient manner.
- Real-Time Updates: With WebSockets, users receive live updates on their order status from the moment they place it until delivery.
- Security: Data protection and secure endpoints, with encrypted user information and secure payment processing via Stripe.

 Technology Stack
- Frontend: React, CSS3, Bootstrap/Material UI for styling, and Stripe integration for payment processing.
- Backend: Node.js with Express.js, and WebSockets for real-time updates.
- Database: MongoDB for efficient, scalable data storage.
- Payment Integration: Stripe for secure and seamless payment processing.

 Getting Started
1. Clone the Repository: `git clone <repo-url>`
2. Install Dependencies: 
   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```
3. Set Up Environment Variables: Add environment variables for MongoDB, Stripe keys, and JWT secrets in a `.env` file.
4. Run the Application:
   - Start the client: `npm start` from the client folder.
   - Start the server: `npm start` from the server folder.

 Project Structure
```bash
Tomato/
│
├── client/                  # Frontend code (React)
│   ├── public/
│   ├── src/
│       ├── components/
│       ├── pages/
│       └── utils/
│
├── server/                  # Backend code (Node.js, Express)
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── middleware/
│
├── admin/                   # Admin panel (React, can be separate or part of client)
│   ├── components/
│   └── pages/
│
├── .env                     # Environment variables
├── README.md
└── package.json
```

 Future Enhancements
- Push Notifications: Notify users about order updates and special offers.
- Advanced Analytics: Provide deeper insights for restaurant and admin users.
- Multi-Language Support: Make the app accessible to a broader audience by adding multiple languages.

 Contribution Guidelines
Feel free to contribute to Tomato by forking this repository, creating a new branch, and submitting a pull request. Please make sure to follow standard coding practices and add meaningful comments to your code.

Enjoy exploring the code and features of Tomato, and feel free to reach out for any questions or suggestions!



# TOMATO - Food Ordering Website

This repository hosts the source code for TOMATO, a dynamic food ordering website built with the MERN Stack. It offers a user-friendly platform for seamless online food ordering.

## Demo

- User Panel: [https://food-delivery-frontend-s2l9.onrender.com/](https://food-delivery-frontend-s2l9.onrender.com/)
- Admin Panel: [https://food-delivery-admin-wrme.onrender.com/](https://food-delivery-admin-wrme.onrender.com/)

## Features

- User Panel
- Admin Panel
- JWT Authentication
- Password Hashing with Bcrypt
- Stripe Payment Integration
- Login/Signup
- Logout
- Add to Cart
- Place Order
- Order Management
- Products Management
- Filter Food Products
- Login/Signup
- Authenticated APIs
- REST APIs
- Role-Based Identification
- Beautiful Alerts

## Screenshots

![Hero](https://i.ibb.co/59cwY75/food-hero.png)
- Hero Section

![Products](https://i.ibb.co/JnNQPyQ/food-products.png)
- Products Section

![Cart](https://i.ibb.co/t2LrQ8p/food-cart.png)
- Cart Page

![Login](https://i.ibb.co/s6PgwkZ/food-login.png)
- Login Popup

## Run Locally

Clone the project

```bash
    git clone https://github.com/Mshandev/Food-Delivery
```
Go to the project directory

```bash
    cd Food-Delivery
```
Install dependencies (frontend)

```bash
    cd frontend
    npm install
```
Install dependencies (admin)

```bash
    cd admin
    npm install
```
Install dependencies (backend)

```bash
    cd backend
    npm install
```
Setup Environment Vaiables

```Make .env file in "backend" folder and store environment Variables
  JWT_SECRET=YOUR_SECRET_TEXT
  SALT=YOUR_SALT_VALUE
  MONGO_URL=YOUR_DATABASE_URL
  STRIPE_SECRET_KEY=YOUR_KEY
 ```

Setup the Frontend and Backend URL
   - App.jsx in Admin folder
      const url = YOUR_BACKEND_URL
     
  - StoreContext.js in Frontend folder
      const url = YOUR_BACKEND_URL

  - orderController in Backend folder
      const frontend_url = YOUR_FRONTEND_URL 

Start the Backend server

```bash
    nodemon server.js
```

Start the Frontend server

```bash
    npm start
```

Start the Backend server

```bash
    npm start
```
## Tech Stack
* [React](https://reactjs.org/)
* [Node.js](https://nodejs.org/en)
* [Express.js](https://expressjs.com/)
* [Mongodb](https://www.mongodb.com/)
* [Stripe](https://stripe.com/)
* [JWT-Authentication](https://jwt.io/introduction)
* [Multer](https://www.npmjs.com/package/multer)

## Deployment

The application is deployed on Render.

## Contributing

Contributions are always welcome!
Just raise an issue, and we will discuss it.

## Feedback

If you have any feedback, please reach out to me [here](https://www.linkedin.com/in/muhammad-shan-full-stack-developer/)
