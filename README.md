# Employee Management System

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
