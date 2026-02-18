
# BlissByTanya – MERN E-Commerce Web Application

A full-stack MERN e-commerce web application built for a small business to manage products, users, and orders with secure authentication and role-based access control.

---

##  Features

- User authentication using JWT
- Role-based access control (User/Admin)
- Product listing and management
- Add to cart and order placement
- RESTful API architecture
- MongoDB database integration
- Modular backend structure

---

## Tech Stack

### Frontend
- React.js
- HTML5
- CSS3
- Tailwind CSS

### Backend
- Node.js
- Express.js
- REST APIs
- JWT Authentication
- Middleware

### Database
- MongoDB
- Mongoose

---

## Project Architecture

Backend structured using:
- Controllers
- Routes
- Middleware
- MongoDB Models

Follows a clean request-response lifecycle for API handling.

---

## Authentication & Security

- JWT-based authentication
- Protected routes
- Role-based authorization
- Secure password handling

---

## Folder Structure

```

bliss-by-tanya/
│
├── client/        # React frontend
├── server/        # Node.js backend
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   └── middleware/

```

---

## Installation & Setup

### 1. Clone the repository
```

git clone [https://github.com/tanyaverma0907/bliss-by-tanya.git](https://github.com/tanyaverma0907/bliss-by-tanya.git)
cd bliss-by-tanya

```

### 2. Install dependencies

Backend:
```

cd server
npm install

```

Frontend:
```

cd client
npm install

```

### 3. Setup Environment Variables

Create a `.env` file inside the `server` folder:

```

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

```

### 4. Run the application

Backend:
```

npm start

```

Frontend:
```

npm start

```

---

## Future Improvements

- Payment gateway integration
- Order tracking system
- Admin dashboard analytics
- Deployment on cloud platform

---

## Author

**Tanya Verma**  
GitHub: https://github.com/tanyaverma0907


---

If you want, I can now create:

* A more premium GitHub-style README with badges
* A deployment-ready version (if hosted on Render/Vercel)
* Or README for your Social Media Analyzer project too 🚀
