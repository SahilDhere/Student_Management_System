# Student Management System

The Student Management System (SMS) is a CRUD-based project that allows an Admin to manage student records.  
It provides functionalities such as adding, updating, viewing, and deleting students, along with secure Admin authentication so that each Admin can only manage their own data.  

This project is built using React + Tailwind CSS for the frontend, Node.js + Express.js for the backend, and MongoDB Atlas for the database.

---

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure) 
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

---

## Features

- **Admin Authentication**  
  - Secure login and registration for Admin.  
  - Only authenticated Admin can access the system.  

- **Student Management (CRUD Operations)**  
  - Add new student records.  
  - View a list of students added by the Admin.  
  - Edit/update student details.  
  - Delete student records.  

- **Data Privacy**  
  - Each Admin can only view, edit, and manage the students they have added.  

- **Cloud Database**  
  - MongoDB Atlas is used, so the application can be accessed from anywhere.

---

## Tech Stack

  **Frontend:**  
    - React  
    - Tailwind CSS  
  
  **Backend:**  
    - Node.js  
    - Express.js  
  
  **Database:**  
    - MongoDB Atlas  
  
  **Other Tools:**  
    - Postman (for API testing)  
    - Git & GitHub (for version control)  
  
---


## Project Structure
   ```bash
   student-management-system/
   │
   ├── client/                  # Frontend (React + Tailwind + Vite)
   │   ├── public/              # Static files
   │   ├── src/                 # React source code
   │   ├── .gitignore
   │   ├── eslint.config.js
   │   ├── index.html
   │   ├── package.json
   │   ├── vite.config.js
   │   └── README.md
   │
   ├── server/                  # Backend (Node.js + Express)
   │   ├── config/              # Database connection & configurations
   │   ├── controller/          # Controller logic for APIs
   │   ├── middleware/          # Authentication & other middlewares
   │   ├── models/              # Mongoose schemas
   │   ├── routes/              # API routes (admin, students, etc.)
   │   ├── .env                 # Environment variables
   │   ├── package.json
   │   ├── server.js            # Entry point for backend
   │   └── README.md
   │
   ├── README.md                # Main documentation
   

## Installation Project from git
  Clone the repository : 
  git clone https://github.com/SahilDhere/Student_Management_System.git
 

## Installation (Backend)
     
     1. Navigate to the backend folder:
        ```bash
        - cd server
     
     2. Initialize a new Node.js project:
        - npm init -y              
     
     3. Install Express (core backend framework):
        - npm install express
     
     4. Install additional dependencies:
        Dependencies used:
     
     │── Dependencies
     │   ├── express                      ^5.1.0         # Web framework for building APIs and handling HTTP requests
     │   ├── dotenv                      ^17.2.1         # Loads environment variables from .env file
     │   ├── mongoose                    ^8.18.0         # ODM library for MongoDB (schemas, queries, validation)
     │   ├── cors                        ^2.8.5          # Enables Cross-Origin Resource Sharing (frontend ↔ backend communication)
     │   ├── jsonwebtoken                ^9.0.2          # Handles JWT token generation and verification (authentication)
     │   ├── bcrypt                      ^6.0.0          # Hashing and comparing passwords for secure authentication
     │   ├── validator                   ^13.15.15       # String validation and sanitization (e.g., email format, etc.)
     │
     │── Dev Dependencies
     │   └── nodemon                     ^3.1.10         # Automatically restarts server on code changes (development only)
     
         
     5. Installation Commands (Backend)
     
        # Install main dependencies
           npm install dotenv mongoose cors jsonwebtoken bcrypt validator
     
        # Install development dependency
          npm install nodemon
     
     6. Update package.json (scripts section)
         "scripts": {
          "start": "node server.js",
          "dev": "nodemon server.js"                     # Add in package.json file
        }
     
     7. Connect with MongoDB & Start server
         - cd server
         - npm run dev
     
     
## API Endpoints (Backend)
     
  1. Start the Backend Server
  
      npm run dev
      This will start the server at http://localhost:5000.

  2. Admin Authentication :

      Register: POST :  http://localhost:500/admin/signUp        # Register Admin
      Login:    POST :  http://localhost:500/admin/login         # Login Admin

  3. Student Management (CRUD)
      Use the token in headers (Authorization: Bearer <token>) for all student routes:

      Add Student      : POST /http://localhost:500/students/
      
      Get All Students : GET http://localhost:500/students/

      Get One Students : GET http://localhost:500/students/:id
      
      Update Student   : PUT http://localhost:500/students/:id
      
      Delete Student   : DELETE /api/students/:id
  
  4. Test APIs
      Open Postman or Thuner Client and test the above endpoints with required data.


## Installation (Client - Frontend) :

    1. Create Vite Project
      npm create vite@latest client

     you’ll be asked to choose:
        Framework : Select React
        Variant   : Select JavaScript

    2. Move into Client Directory
       cd client
 
    3. Install Dependencies
        npm install

    4. Install Tailwind CSS
       - npm install tailwindcss @tailwindcss/vite
       - Configure the Vite plugin :

         Add the @tailwindcss/vite plugin to your Vite configuration.

         vite.config.ts

         import { defineConfig } from 'vite'
         import tailwindcss from '@tailwindcss/vite'                # Import plugin
         export default defineConfig({
           plugins: [
             tailwindcss(),                                         # Use Here
           ],
         })

         
         Add an @import to your index.css file that imports Tailwind CSS.
          - @import "tailwindcss";

         Run Project : 
         npm run dev


    5. Install Commands (Frontend)

        # Install main dependencies
        npm install react react-dom react-router-dom axios react-icons react-toastify 
        

    6. Frontend Project Structure

        client/                     # Frontend (React + Vite)
        │
        ├── public/                      # Static assets
        │
        ├── src/                    # Main source code
        │   ├── assets/             # Images, icons, and asset files
        │   │   ├── assets.js
        │   │   ├── home.png        
        │   │   ├── logo.png        # Project logo image
        │   │   └── react.svg
        │   │
        │   ├── components/         # Reusable components
        │   │   ├── Layout.jsx
        │   │   └── Navbar.jsx
        │   │
        │   ├── Pages/              # Application pages
        │   │   ├── AddStudent.jsx
        │   │   ├── EditStudentInfo.jsx
        │   │   ├── Footer.jsx
        │   │   ├── Home.jsx
        │   │   ├── Login.jsx
        │   │   ├── SignUp.jsx
        │   │   └── StudentInfo.jsx
        │   │
        │   ├── App.css             # Global styles for app
        │   ├── App.jsx             # Root React component
        │   ├── index.css           # Global CSS styles
        │   └── main.jsx            # Vite entry point
        │
        ├── .gitignore              # Git ignore file
        ├── package.json
        ├── vite.config.js          # Vite configuration
        └── README.md
        

## Frontend Communicates with Backend 
   1. Backend Setup (Express + MongoDB)

     Your backend runs separately (e.g., on http://localhost:5000).
     It exposes API Endpoints (routes) like:
     POST   :  http:/localhost:500/admin/login      → Login & generate token
     GET    :  http:/localhost:500/students/        → Fetch All students info
     GET    :  http:/localhost:500/students/:id     → Fetch Specific students info on the basis of id
     POST   :  http:/localhost:500/students/        → Add student
     PUT    :  http:/localhost:500/students/:id     → Edit student
     DELETE :  http:/localhost:500/students/:id     → Delete student
     Each endpoint returns JSON data.



   2. Frontend Setup (React + Vite)

      Your frontend runs on http://localhost:5173. 
      It uses axios (or fetch) to send HTTP requests to the backend.

      Example flow:
      User logs in → frontend sends request to backend → backend verifies → responds with a JWT token.
      Token is stored in localStorage.
       
        Login → Get Token
            - Admin logs in with email & password.
            - Backend validates credentials.
            - A JWT token is generated and sent back to the admin.

        Token Verification (Middleware)
            - Backend middleware checks the token before allowing access. 
            - If valid → request continues.
            - If invalid/expired → access denied.

        Data Privacy 
           - Only the Admin can perform CRUD operations on students.
           - Each Admin can only view, update, and delete the student records they have created.
           - This restriction is enforced using the Admin’s ID decoded from the JWT token during every request.



    3. CORS (Cross-Origin Resource Sharing)
        - Since frontend (5173) and backend (5000) are on different ports, backend must enable CORS.
        This allows frontend requests to be accepted.
        - This allows frontend requests to be accepted.


    4. Communication Flow

        Frontend → Backend: React sends request (login, add student, get student list, etc.).
        
        Backend → Database: Express handles request, interacts with MongoDB (via Mongoose).
        
        Backend → Frontend: Sends JSON response back (like success message, data, or error).
        
        Frontend → UI Update: React updates the interface based on the backend response.