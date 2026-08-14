# 🍔 CraveJet — Full-Stack Food Ordering Platform

**CraveJet** is a full-stack food ordering platform built with the **MERN stack**, providing a complete food ordering experience with authentication, cart management, online payments, real-time order tracking, and an administrative dashboard.

The platform is designed with a modular architecture to separate customer, restaurant/order management, and administrative workflows.

---


---

## ✨ Features

### 👤 User Features

* User registration and login
* JWT-based authentication
* Browse available food items
* Add/remove items from cart
* Update item quantities
* Place food orders
* Secure checkout
* Stripe payment integration
* View order history
* Real-time order status tracking

### 🛒 Cart & Ordering

* Dynamic shopping cart
* Quantity management
* Automatic order total calculation
* Checkout workflow
* Order creation and management
* Order status updates

### 💳 Payment

* Integrated **Stripe Payment API**
* End-to-end checkout flow
* Payment status handling
* Tested with **50+ test transactions**
* Secure server-side payment processing

### 📍 Real-Time Order Tracking

Order status updates are delivered in real time using **Socket.IO**.

Example workflow:

```text
Order Placed
     ↓
Order Confirmed
     ↓
Food Preparing
     ↓
Out for Delivery
     ↓
Delivered
```

### 🔐 Authentication & Authorization

* JWT-based authentication
* Protected API routes
* Role-based access control
* Secure user sessions
* Password hashing

### 🛠️ Admin Dashboard

The admin panel provides centralized management for:

* Food items
* Orders
* Users
* Order status
* Food availability
* Platform operations

---

# 🏗️ System Architecture

```text
                         ┌──────────────────┐
                         │      Client      │
                         │   React / Vite   │
                         └────────┬─────────┘
                                  │
                                  │ REST API
                                  ▼
                         ┌──────────────────┐
                         │    Node.js +     │
                         │     Express      │
                         └───────┬───┬──────┘
                                 │   │
                    ┌────────────┘   └─────────────┐
                    ▼                              ▼
             ┌──────────────┐              ┌──────────────┐
             │   MongoDB    │              │    Stripe    │
             │   Database   │              │   Payments   │
             └──────────────┘              └──────────────┘
                                      
                         ┌──────────────────┐
                         │    Socket.IO     │
                         │ Real-time Orders │
                         └──────────────────┘

                         ┌──────────────────┐
                         │  Admin Dashboard │
                         │      React       │
                         └──────────────────┘
```

---

# 🧰 Tech Stack

## Frontend

* React.js
* JavaScript
* HTML5
* CSS3
* Vite

## Backend

* Node.js
* Express.js
* REST APIs
* JWT Authentication
* bcrypt

## Database

* MongoDB
* Mongoose

## Real-Time Communication

* Socket.IO

## Payment

* Stripe API

## Development Tools

* Git
* GitHub
* npm
* Postman

---

# 📂 Project Structure

```text
CraveJet/
│
├── admin/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── .gitignore
└── README.md
```

---

# ⚙️ Installation & Setup

## 1. Clone Repository

```bash
git clone https://github.com/rai8896/CraveJet.git
```

Navigate into the project:

```bash
cd CraveJet
```

---

## 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` directory:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
```

Start the backend:

```bash
npm run server
```

The backend server will start on the configured port.

---

## 3. Frontend Setup

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

Open the local URL provided by Vite.

---

## 4. Admin Panel Setup

Open another terminal:

```bash
cd admin
npm install
npm run dev
```

Open the admin dashboard using the URL provided by Vite.

---

# 🔑 Environment Variables

Never commit your `.env` file to GitHub.

Example:

```env
MONGO_URI=
JWT_SECRET=
STRIPE_SECRET_KEY=
```

The actual credentials should remain private.

---

# 🔄 Order Flow

```text
User
 │
 ├── Login/Register
 │
 ▼
Browse Food
 │
 ▼
Add to Cart
 │
 ▼
Checkout
 │
 ▼
Stripe Payment
 │
 ▼
Create Order
 │
 ▼
Admin Receives Order
 │
 ▼
Admin Updates Status
 │
 ▼
Socket.IO
 │
 ▼
User Receives Real-Time Update
```

---

# 🔒 Security

The application implements:

* JWT authentication
* Protected routes
* Role-based authorization
* Password hashing
* Environment-based secret management
* Server-side payment verification
* API access control

---

# 💳 Stripe Testing

Stripe test mode was used during development.

The checkout workflow was validated through **50+ test transactions** to verify:

* Payment initiation
* Successful payment
* Failed payment handling
* Order creation
* Payment status synchronization

No real payment information is required for development/testing.

---

# 📸 Screenshots

Add screenshots of your application here.

### 🏠 Customer Homepage

```text
Add screenshot here
```

### 🍔 Food Menu

```text
Add screenshot here
```

### 🛒 Shopping Cart

```text
Add screenshot here
```

### 💳 Checkout

```text
Add screenshot here
```

### 📦 Order Tracking

```text
Add screenshot here
```

### 🛠️ Admin Dashboard

```text
Add screenshot here
```

---

# 📈 Future Improvements

Planned improvements include:

* Redis caching
* API rate limiting
* Order idempotency
* Background job processing
* Email/SMS notifications
* Restaurant management
* Advanced search and filtering
* Recommendation system
* Dockerized deployment
* Horizontal backend scaling
* Monitoring and logging

---

# 🎯 Key Engineering Concepts

This project demonstrates practical implementation of:

* Full-stack MERN development
* RESTful API design
* Authentication & authorization
* Database modeling
* Payment integration
* Real-time communication
* Modular backend architecture
* Admin workflows
* Secure environment configuration
* Client-server communication
* Error handling
* Production-oriented application design

---

# 🧪 Testing

The application was manually tested across:

* User authentication
* Cart operations
* Order creation
* Payment processing
* Order status updates
* Admin operations
* Real-time tracking

Stripe checkout was validated using **50+ test transactions**.

---

# 👨‍💻 Author

## Manish Rai

B.Tech Computer Science Engineer | M.Tech CSE (AI)

Interested in:

* Software Development
* Backend Engineering
* Distributed Systems
* Artificial Intelligence


---

## 📄 License

This project is intended for educational and portfolio purposes.
