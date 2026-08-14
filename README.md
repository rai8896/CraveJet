# 🍽️ CraveJet - Food Ordering Application

A full-stack food ordering application with user authentication, payment processing, and admin panel management. Built with React, Node.js, and MongoDB.

## 🚀 Live Demo  
[Cravejet](https://cravejet-frontend.onrender.com/)


## ✨ Features

### 🍕 User Features
- **Browse Menu**: Explore dishes by categories (Salad, Rolls, Deserts, Sandwich, Cake, Pure Veg, Pasta, Noodles)
- **Shopping Cart**: Add/remove items with real-time cart management
- **User Authentication**: Secure login/signup with JWT tokens
- **Order Placement**: Complete order flow with address collection
- **Payment Integration**: Stripe payment gateway for secure transactions
- **Order Tracking**: View order history and status updates
- **Responsive Design**: Mobile-friendly interface

### 🔧 Admin Panel Features
- **Menu Management**: Add, edit, and remove food items
- **Order Management**: View all orders and update status
- **Image Upload**: Upload food images with preview
- **Category Management**: Organize dishes by categories
- **Real-time Updates**: Instant status updates with toast notifications

### 🛡️ Security Features
- **JWT Authentication**: Secure user sessions
- **Password Hashing**: Bcrypt encryption for user passwords
- **Input Validation**: Server-side validation for all inputs
- **CORS Protection**: Cross-origin resource sharing security

## 🚀 Tech Stack

### Frontend
- **React 18** - User interface library
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API calls
- **Vite** - Build tool and development server
- **CSS3** - Styling and responsive design

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Token authentication
- **Bcrypt** - Password hashing
- **Multer** - File upload handling
- **Stripe** - Payment processing
- **CORS** - Cross-origin resource sharing

### Admin Panel
- **React 18** - Admin interface
- **React Router DOM** - Admin routing
- **React Toastify** - Toast notifications
- **Axios** - API communication

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account
- Stripe account for payment processing

### Environment Variables

Create `.env` file in the backend directory:

```env
ATLASDB_URL=your_mongodb_atlas_connection_string
STRIPE_SECRET_KEY=your_stripe_secret_key
JWT_SECRET=your_jwt_secret_key
```

### Backend Setup

```bash
cd backend
npm install
npm run server
```

Server will start on `http://localhost:4000`

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend will start on `http://localhost:5173`

### Admin Panel Setup

```bash
cd admin
npm install
npm run dev
```

Admin panel will start on `http://localhost:5174`

## 📱 Key Features in Detail

### User Authentication
- Secure JWT-based authentication
- Password hashing with bcrypt
- Protected routes for authenticated users
- Session management

### Shopping Cart
- Real-time cart updates
- Persistent cart data in user profile
- Add/remove items functionality
- Cart total calculation

### Payment Processing
- Stripe Checkout integration
- Secure payment flow
- Order verification system
- Payment status tracking

### Admin Management
- CRUD operations for food items
- Image upload with preview
- Order status management
- Real-time notifications

## 🔄 API Endpoints

### Authentication
- `POST /api/user/signup` - User registration
- `POST /api/user/login` - User login

### Food Management
- `GET /api/food/list` - Get all food items
- `POST /api/food/add` - Add new food item (Admin)
- `POST /api/food/remove` - Remove food item (Admin)

### Cart Operations
- `POST /api/cart/add` - Add item to cart
- `POST /api/cart/remove` - Remove item from cart
- `GET /api/cart/get` - Get user cart

### Order Management
- `POST /api/order/place` - Place new order
- `POST /api/order/verify` - Verify payment
- `POST /api/order/userorders` - Get user orders
- `GET /api/order/list` - Get all orders (Admin)
- `POST /api/order/status` - Update order status (Admin)

## 🎨 UI/UX Features

- **Modern Design**: Clean and intuitive interface
- **Responsive Layout**: Works on all device sizes
- **Loading States**: Smooth user experience
- **Error Handling**: User-friendly error messages
- **Toast Notifications**: Real-time feedback
- **Image Optimization**: Fast loading food images

## 🔒 Security Measures

- **JWT Authentication**: Secure user sessions
- **Password Encryption**: Bcrypt hashing
- **Input Validation**: Server-side validation
- **CORS Protection**: Secure cross-origin requests
- **Environment Variables**: Secure configuration management

## 🙏 Acknowledgments

- [Stripe](https://stripe.com/) for payment processing
- [MongoDB Atlas](https://www.mongodb.com/atlas) for database hosting
- [React](https://reactjs.org/) for the frontend framework
- [Express.js](https://expressjs.com/) for the backend framework

---

⭐ **Star this repository if you find it helpful!** 
