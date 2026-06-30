# 🚀 Online Complaint Registration System

A full-stack **MERN Stack** web application that enables users to register, log in, submit complaints with image uploads, track complaint status, and allows administrators to manage complaints through an admin dashboard.

---

# 🌐 Live Demo

### Frontend
https://online-complaint-registration-syste-beta.vercel.app

### Backend
https://online-complaint-registration-system-cigw.onrender.com

---

# 📸 Screenshots

> Add screenshots of your application here.

## Login Page

<img src="screenshots/login.png" width="700">

## Registration Page

<img src="screenshots/register.png" width="700">

## User Dashboard

<img src="screenshots/dashboard.png" width="700">

## Submit Complaint

<img src="screenshots/submit.png" width="700">

## My Complaints

<img src="screenshots/mycomplaints.png" width="700">

## Admin Dashboard

<img src="screenshots/admin.png" width="700">

---

# ✨ Features

- User Registration
- Secure Login using JWT
- Password Encryption using bcrypt
- Complaint Submission
- Image Upload
- Complaint Tracking
- My Complaints
- Admin Dashboard
- Update Complaint Status
- Delete Complaint
- Responsive UI
- MongoDB Atlas Database
- REST API
- Cloud Deployment

---

# 🛠 Technologies Used

## Frontend

- React.js
- React Router
- Axios
- Bootstrap
- React Toastify
- Vite

## Backend

- Node.js
- Express.js
- JWT Authentication
- bcrypt.js
- Multer
- CORS

## Database

- MongoDB Atlas
- Mongoose

## Deployment

- Vercel
- Render

---

# 📂 Project Structure

```
OnlineComplaintRegistrationSystem
│
├── client
│   ├── src
│   ├── public
│   └── package.json
│
├── server
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── uploads
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# ⚙ Installation

## Clone Repository

```bash
git clone https://github.com/srikanthreddy2510-lgtm/online-complaint-registration-system.git
```

---

## Backend

```bash
cd server

npm install

npm run dev
```

---

## Frontend

```bash
cd client

npm install

npm run dev
```

---

# 🔑 Environment Variables

Create a `.env` file inside the **server** folder.

```env
PORT=5000

MONGODB_URI=YOUR_MONGODB_URI

JWT_SECRET=onlineComplaintSecret
```

---

# 👨‍💻 API Endpoints

## User APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /api/users/register | Register User |
| POST | /api/users/login | Login User |

---

## Complaint APIs

| Method | Endpoint |
|---------|----------|
| POST | /api/complaints |
| GET | /api/complaints |
| GET | /api/complaints/all |
| PUT | /api/complaints/:id |
| DELETE | /api/complaints/:id |

---

# 🔐 Authentication

- JWT Token Authentication
- Protected Routes
- Role-based Access
- Admin Authorization

---

# 📈 Future Enhancements

- Email Notifications
- Forgot Password
- OTP Verification
- Google Maps Integration
- Complaint Analytics
- PDF Report Generation
- Dark Mode
- Mobile Application

---

# 👨‍🎓 Developed By

**Dondapati Srikanth Reddy**

Masters of Computer Applications (MCA)

Mohan Babu University

---

# 📜 License

This project is developed for academic and educational purposes.

© 2026 Dondapati Srikanth Reddy
