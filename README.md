# E-Commerce Frontend

This is a modern e-commerce frontend application built with React, Redux, and Vite.

## Features
- User authentication (Sign in, Sign up)
- Product listing and details
- Shopping cart
- Admin-only product creation
- Responsive navigation bar
- Settings and About pages
- Infinite scrolling for products

## Tech Stack
- **React** for UI
- **Redux** for state management
- **React Router** for routing
- **Vite** for fast development
- **Tailwind CSS** for styling
- **React Icons** for icons

## Folder Structure
```
src/
  api/            # API configs
  assets/         # Static assets
  components/     # Reusable UI components
  pages/          # Page components
  routes/         # Route definitions
  store/          # Redux store, actions, reducers
  utils/          # Utility hooks and helpers
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm run dev
   ```
3. **Open in browser:**
   Visit [http://localhost:5173](http://localhost:5173)

## Scripts
- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build

## Notes
- Only admin users can access the "Create Product" page.
- The navigation bar adapts based on authentication and admin status.

