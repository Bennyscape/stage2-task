# TicketFlow - Ticket Management Web App

A modern, responsive ticket management system built with React, TypeScript, and TailwindCSS.

## 🚀 Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **TypeScript** - Type safety
- **TailwindCSS** - Styling and responsive design
- **React Router** - Client-side routing
- **shadcn/ui** - UI component library
- **Lucide React** - Icon library
- **Sonner** - Toast notifications

## 📋 Features

- **Landing Page** - Beautiful hero section with wavy background and decorative elements
- **Authentication** - Login and signup with localStorage-based mock authentication
- **Dashboard** - Overview with summary cards for tickets
- **Ticket Management** - Full CRUD operations (Create, Read, Update, Delete)
- **Protected Routes** - Session-based route protection
- **Responsive Design** - Mobile-first design with max-width 1440px
- **Toast Notifications** - User feedback for all actions
- **Form Validation** - Client-side validation with inline error messages

## 🎨 Design Features

- Semantic HTML with accessibility labels
- Consistent color palette with status-based badges
- Smooth transitions and hover effects
- Decorative circular elements
- Card-based layouts with shadows and rounded corners
- Wavy SVG background in hero section

## 🛠️ Setup & Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation Steps

1. Clone the repository:
```bash
git clone <repository-url>
cd ticketflow
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:8080
```

## 📱 Routes

- `/` - Landing page
- `/auth/login` - Login page
- `/auth/signup` - Signup page
- `/dashboard` - Dashboard (protected)
- `/tickets` - Ticket management (protected)

## 🔐 Authentication

The app uses localStorage for mock authentication:

- **Session Key**: `ticketapp_session`
- **Users Key**: `ticketapp_users`

### Example User Credentials

Since this is a mock system, you can create any account through the signup page. Example:

- Email: demo@ticketflow.com
- Password: demo123
- Name: Demo User

## 💾 Data Storage

All data is stored in localStorage:

- **Tickets**: `ticketapp_tickets`
- **Users**: `ticketapp_users`
- **Session**: `ticketapp_session`

### Ticket Structure

```typescript
{
  id: number;
  title: string;
  description?: string;
  status: "open" | "in_progress" | "closed";
  createdAt: string;
}
```

## 🎯 Validation Rules

### Authentication
- Email: Must be valid email format
- Password: Minimum 6 characters
- All fields required

### Ticket Management
- Title: Required, cannot be empty
- Status: Required, must be one of: open, in_progress, closed
- Description: Optional, maximum 200 characters

## ♿ Accessibility

- Semantic HTML elements (`<header>`, `<main>`, `<footer>`, `<nav>`)
- ARIA labels on interactive elements
- Focus states on all interactive elements
- Keyboard navigation support
- High contrast colors for readability

## 🔒 Protected Routes

Routes `/dashboard` and `/tickets` are protected and require authentication. Users without a valid session token are redirected to `/auth/login`.

## 🎨 Status Colors

- **Open** (Green): New tickets requiring attention
- **In Progress** (Amber): Tickets being worked on
- **Closed** (Gray): Resolved tickets

## 📦 Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

## 🧪 Code Structure

```
src/
├── components/        # Reusable UI components
│   ├── ui/           # shadcn/ui components
│   ├── Header.tsx    # App header with navigation
│   ├── Footer.tsx    # App footer
│   └── ProtectedRoute.tsx  # Route protection wrapper
├── contexts/         # React contexts
│   └── AuthContext.tsx     # Authentication context
├── pages/            # Page components
│   ├── Landing.tsx   # Landing page
│   ├── Login.tsx     # Login page
│   ├── Signup.tsx    # Signup page
│   ├── Dashboard.tsx # Dashboard page
│   └── Tickets.tsx   # Ticket management page
├── types/            # TypeScript type definitions
│   └── ticket.ts     # Ticket type definitions
├── lib/              # Utility functions
│   └── utils.ts      # Helper functions
├── App.tsx           # Main app component with routing
├── main.tsx          # App entry point
└── index.css         # Global styles and design system
```

## 📝 Notes

- This is a frontend-only application using localStorage for data persistence
- No backend or database required
- Session expires after 24 hours
- All state management is done using React Context and local state
- Simple, clean code without over-engineering
- Minimal use of custom hooks

## 🤝 Contributing

This is a demonstration project for the Frontend Stage 2 Task. Feel free to fork and modify as needed.

## 📄 License

MIT License - feel free to use this project for learning and development purposes.
