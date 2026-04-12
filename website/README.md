# Snowfall Advisory - Frontend Web Application

This is the front-end application for the India Vertical of Snowfall Advisory, built with React, Vite, and Tailwind CSS. It features a responsive, modern design following the $100M Offers framework structure.

## Structure
- Built as a React Single Page Application.
- Fully responsive styling using Tailwind CSS.
- Client-side routing with `react-router-dom`.
- High-quality, scalable icons via `lucide-react`.

## Installation & Setup Instructions

1. **Prerequisites:** Ensure you have [Node.js](https://nodejs.org/) installed on your machine.
2. **Navigate to the website directory:**
   ```bash
   cd website
   ```
3. **Install Dependencies:**
   ```bash
   npm install
   ```
4. **Run the Development Server:**
   ```bash
   npm run dev
   ```
5. **Open in Browser:** Navigate to `http://localhost:5173` to see the live website!

## Key Components
- `src/App.jsx`: Main application wrapper and router.
- `src/components/Header.jsx` & `Footer.jsx`: Global navigation and footer containing the required Contact Us link.
- `src/pages/Home.jsx`: The primary landing page matching the "India Vertical" markdown structure.
- `src/pages/ContactUs.jsx`: A standalone contact page featuring a multi-field form, layout for phone/email, and a Google Forms redirect capability.