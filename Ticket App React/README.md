# Ticket Management Web App (React Version)

## Overview

This is the **React implementation** of the Frontend Stage 2 task.
It is a complete ticket management web application featuring authentication, dashboard analytics, and full CRUD operations for managing support tickets.
The app follows a consistent layout, clean design, and responsive UI across all pages.

---

## Features

### Core Pages

1. **Landing Page**

   * Hero section with wavy background and decorative circle.
   * Description, call-to-action buttons, and feature boxes.
   * Fully responsive up to 1440px width.
   * Global footer across all pages.

2. **Authentication**

   * Login and Signup pages with validation.
   * Inline error messages and toast feedback.
   * Simulated authentication via `localStorage` token.
   * Unauthorized access redirects to `/auth/login`.

3. **Dashboard**

   * Displays total, open, and resolved ticket counts.
   * Navigation to Ticket Management.
   * Logout clears session and redirects to landing page.

4. **Ticket Management**

   * Full CRUD (Create, Read, Update, Delete) for tickets.
   * Real-time validation and inline feedback.
   * Status color codes:

     * open → Green
     * in_progress → Amber
     * closed → Gray
   * Toast notifications for success and errors.

---

## Data Structure

Tickets are stored as objects in local state or `localStorage`:

```json
{
  "id": 1,
  "title": "Login Bug",
  "description": "Error when logging in from mobile.",
  "status": "open",
  "createdAt": "2025-10-27T12:00:00Z"
}
```

---

## Authentication Simulation

Authentication is handled locally.

* On signup or login, a mock token is stored under:

  ```
  localStorage.ticketapp_session
  ```
* Protected routes (`/dashboard`, `/tickets`) require this token.
* On logout, the token is cleared.

---

## Technologies Used

* **React (Vite)**
* **React Router DOM**
* **Tailwind CSS**
* **React Hot Toast** for feedback
* **LocalStorage** for mock API and session management

---

## Installation & Setup

### 1. Clone Repository

```bash
git clone https://github.com/your-username/ticket-app-react.git
cd ticket-app-react
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

App runs at: `http://localhost:5173`

---

## Project Structure

```
src/
 ├── assets/             # SVGs, wave backgrounds, and decorative shapes
 ├── components/         # Shared UI components (Navbar, Footer, Toast)
 ├── pages/              # Page-level components
 │    ├── Landing.jsx
 │    ├── Login.jsx
 │    ├── Signup.jsx
 │    ├── Dashboard.jsx
 │    └── Tickets.jsx
 ├── context/            # Auth and Ticket context providers
 ├── utils/              # Helpers and validation functions
 ├── App.jsx             # Main router and layout
 └── main.jsx            # Entry point
```

---

## Validation Rules

* **Title**: required, 3–100 characters
* **Status**: required, accepts only `open`, `in_progress`, `closed`
* **Description**: optional, max 200 characters
* Clear and descriptive messages for all validation errors.

---

## Accessibility

* Semantic HTML elements for structure.
* Visible focus states and color contrast.
* Alt text for all images and icons.
* Mobile-first, responsive layout.

---

## Example Credentials

```
Email: test@ticketapp.com
Password: 123456
```

Use these for testing the login and dashboard flow.

---

## Known Issues

* Authentication is simulated only; no real backend.
* Page refresh clears in-memory ticket state unless stored in localStorage.

---

## License

This project is open-source and free to use for educational purposes.

---

## Author

Developed for the **HNG Frontend Stage 2 Task** as part of the **Multi-Framework Ticket Web App Challenge**.
React version built with simplicity, clarity, and functional consistency in mind.


Would you like me to now generate the **README.md** for the **Vue.js** and **Twig** versions** in the same structure for uniform submission?
