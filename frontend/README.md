# Frontend README

## Overview

This frontend is a React application built with Vite for the Employee Management System. It consumes the backend API and provides employee listing, creation, editing, and deletion functionality.

## Features

- React with Vite development tooling
- Client-side routing using React Router
- Forms built with `react-hook-form`
- API communication using `axios`
- Global state example using `zustand`
- Responsive UI components and employee dashboard

## Requirements

- Node.js 18+ (or compatible)

## Setup

1. Open a terminal in `frontend/`
2. Install dependencies:
   ```powershell
   npm install
   ```
3. Create a `.env` file in `frontend/` with:
   ```env
   VITE_API_URL=http://localhost:7000
   ```

## Run

- Start the Vite development server:
  ```powershell
  npm run dev
  ```
- Build for production:
  ```powershell
  npm run build
  ```
- Preview the production build:
  ```powershell
  npm run preview
  ```

The frontend typically runs at `http://localhost:5173`.

## Routes

- `/` - Home page
- `/create-emp` - Create employee form
- `/list` - Employee list and actions
- `/employee` - Employee detail view
- `/edit` - Edit employee form

## Environment Variables

- `VITE_API_URL` - Backend API base URL

## Notes

- Ensure the backend is running and the `VITE_API_URL` points to the backend server.
- The frontend communicates with the backend API at `/emp-api/employees`.
