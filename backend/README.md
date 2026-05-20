# Backend README

## Overview

This backend is an Express.js API server for the Employee Management System. It connects to MongoDB using Mongoose and exposes employee CRUD operations under the `/emp-api` route.

## Features

- Connects to MongoDB using `mongoose`
- Supports CORS for the frontend client
- Parses JSON request bodies
- Provides REST endpoints for employee create/read/update/delete
- Uses custom error-handling middleware

## Requirements

- Node.js 18+ (or compatible)
- MongoDB database

## Setup

1. Open a terminal in `backend/`
2. Install dependencies:
   ```powershell
   npm install
   ```
3. Create a `.env` file in `backend/` with the following values:
   ```env
   MONGO_URI=<your-mongo-connection-string>
   PORT=7000
   CLIENT_URL=http://localhost:5173
   ```

## Run

- Start the server:
  ```powershell
  npm run dev
  ```
- Or start without `nodemon`:
  ```powershell
  npm run start
  ```

The backend will listen on the port defined in `PORT`, defaulting to `7000`.

## API Endpoints

The backend exposes these routes under `/emp-api`:

- `POST /emp-api/employees` - Create a new employee
- `GET /emp-api/employees` - Retrieve all employees
- `PUT /emp-api/employees/:id` - Update an employee by ID
- `DELETE /emp-api/employees/:id` - Delete an employee by ID

## Environment Variables

- `MONGO_URI` - MongoDB connection string
- `PORT` - Server port (default `7000`)
- `CLIENT_URL` - Allowed frontend origin for CORS

## Notes

- Ensure MongoDB is running and accessible before starting the backend.
- The frontend should use `VITE_API_URL` configured to the backend address.
