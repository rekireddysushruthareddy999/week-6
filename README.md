# Employee Management System

<<<<<<< HEAD
A full-stack React + Vite frontend with an Express + MongoDB backend for managing employees.

## Project Structure

- `backend/` - Express server, MongoDB connection, and employee CRUD API.
- `frontend/` - React application built with Vite, Tailwind-style CSS, and client-side routing.

## Features

- Create, read, update, and delete employees
- Employee listing dashboard with view/edit/delete actions
- Form validation using `react-hook-form`
- Simple shared counter state using React context
- REST API under `/emp-api/employees`

## Tech Stack

- Backend:
  - Node.js
  - Express
  - MongoDB / Mongoose
  - CORS
  - dotenv
- Frontend:
  - React
  - Vite
  - React Router
  - React Hook Form
  - Zustand
  - Axios
  - Tailwind-compatible UI styling

## Backend Setup

1. Open a terminal in `backend/`
2. Install dependencies:
   ```powershell
   npm install
   ```
3. Create a `.env` file with:
   ```env
   MONGO_URI=<your-mongo-connection-string>
   PORT=7000
   CLIENT_URL=http://localhost:5173
   ```
4. Start the backend server:
   ```powershell
   npm run dev
   ```

The API runs at `http://localhost:7000` by default.

## Frontend Setup

1. Open a terminal in `frontend/`
2. Install dependencies:
   ```powershell
   npm install
   ```
3. Create a `.env` file with:
   ```env
   VITE_API_URL=http://localhost:7000
   ```
4. Start the frontend app:
   ```powershell
   npm run dev
   ```

The app will typically be available at `http://localhost:5173`.

## API Endpoints

The backend exposes the following employee routes under `/emp-api`:

- `POST /emp-api/employees` - create a new employee
- `GET /emp-api/employees` - retrieve all employees
- `PUT /emp-api/employees/:id` - update an employee by ID
- `DELETE /emp-api/employees/:id` - delete an employee by ID

## Usage

- Navigate to `/create-emp` to add a new employee
- Navigate to `/list` to view all employees
- Use employee cards to view, edit, or delete records

## Notes

- Ensure MongoDB is running and the `MONGO_URI` is valid before starting the backend.
- The frontend reads `VITE_API_URL` to connect to the backend.

## Scripts

### Backend

- `npm run start` - start the server
- `npm run dev` - start the server with `nodemon`

### Frontend

- `npm run dev` - start Vite development server
- `npm run build` - build the frontend for production
- `npm run preview` - preview the production build
=======
This repository contains a full-stack Employee Management System with separate frontend and backend folders.

## Summary

- `backend/` hosts an Express + MongoDB REST API for employee management.
- `frontend/` hosts a React + Vite app that consumes the backend API.
- The backend exposes routes under `/emp-api/employees`.
- The frontend provides pages for creating, listing, viewing, and editing employees.

## Architecture

- Backend:
  - `server.js` starts the Express server and connects to MongoDB.
  - `API/EmpApp.js` defines employee routes.
  - `models/EmpModel.js` defines Mongoose schema and model.
- Frontend:
  - React Router handles page navigation.
  - `axios` is used to call the backend API.
  - Forms are managed with `react-hook-form`.

## Getting Started

1. Set up the backend first:
   - Open a terminal in `backend/`
   - Install dependencies: `npm install`
   - Create `.env` with `MONGO_URI`, `PORT`, and `CLIENT_URL`
   - Start the server: `npm run dev`

2. Set up the frontend:
   - Open a terminal in `frontend/`
   - Install dependencies: `npm install`
   - Create `.env` with `VITE_API_URL=http://localhost:7000`
   - Start the app: `npm run dev`

3. Open the frontend in the browser, usually at `http://localhost:5173`.

## Quick Links

- Backend details: `backend/README.md`
- Frontend details: `frontend/README.md`

## Notes

- Ensure MongoDB is running and reachable via `MONGO_URI`.
- The frontend expects the backend API at the URL configured in `VITE_API_URL`.
>>>>>>> ed3b986 (updated readme)
