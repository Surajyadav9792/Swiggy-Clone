# Swiggy Clone 🍔

A modern, responsive, and feature-rich frontend clone of Swiggy. This application is built using React 19, Redux Toolkit, and Tailwind CSS v4, bundled with Parcel. It features interactive food delivery options, dynamic menus, search functionality, global cart state management, and robust deployment configurations for Netlify.

## 🚀 Live Demo
Check out the live deployment here: **[https://swiggy-clone00.netlify.app](https://swiggy-clone00.netlify.app)**

---

## 🛠️ Tech Stack

*   **Core:** React 19 (Hooks, Context, Functional Components)
*   **State Management:** Redux Toolkit & React Redux (Global Cart State)
*   **Routing:** React Router v7 (Nested Layout Routes, Route Parameters)
*   **Styling:** Tailwind CSS v4 (with `@tailwindcss/postcss` and custom HSL gradients)
*   **Bundler:** Parcel
*   **Hosting Configuration:** Netlify Serverless Proxy redirects

---

## ✨ Features & Enhancements

### 1. 🍣 Interactive Food Delivery Flow
*   **Restaurant Listing:** Dynamically fetches active Delhi-NCR restaurants from Swiggy's API using a CORS proxy.
*   **Restaurant Menu & Categories:** View detailed categorized food menus, collapse/expand sections, and filter items by **Veg / Non-Veg**.
*   **Global Cart:** Add items to your cart directly from the menu. Increment or decrement quantities with automatic price and subtotal calculations.
*   **Checkout Page:** Fully styled Checkout component displaying all cart items, quantity controls, and a calculated Grand Total.

### 2. 🛡️ Robust CORS Proxy & Mock Fallback (Offline-Ready)
*   **Environment-Aware Fetching:** Automatically toggles API request paths depending on where the app is running:
    *   **Localhost:** Bypasses CORS via `corsproxy.io` (no manual activation or token required).
    *   **Production (Netlify):** Proxies requests through Netlify's serverless rewrites (`/api/*` and `/mapi/*`). This includes a simulated browser `User-Agent` to successfully fetch live data from Swiggy's CDN.
*   **Static Mock Database Fallback:** If the live Swiggy API goes down or public proxies are rate-limited, the application catches the error and automatically loads a local mock database (`mockData.js`). The site **never** looks broken or displays error pages to recruiters.

### 3. 📢 Premium Portfolio User Experience
*   **Welcome Toast Notification:** On loading the homepage, an animated welcome banner appears in the bottom-right introducing the developer and guiding users toward the functional features.
*   **Visual Prototype Modals:** Clicking on **Instamart** or **Dineout** (which are visual placeholders) opens a custom, themed popup modal explaining the interactive scope of the clone and directing them back to the **Food Delivery** section.
*   **High-Visibility Badges:** Clear visual indicators (`🔥 Interactive Demo` and `Visual Prototype`) highlight exactly what parts of the site were designed and cloned.

---

## 💻 Getting Started Locally

Follow these steps to run the Swiggy Clone on your local machine:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed.

### Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/Surajyadav9792/Swiggy-Clone.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Swiggy-Clone
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the App
*   **Start local development server:**
    ```bash
    npm start
    ```
    Open **[http://localhost:1234](http://localhost:1234)** in your browser to view the app.

*   **Build for production:**
    ```bash
    npm run build
    ```
    This compiles and optimizes all assets into the `dist/` directory.

---

## 📂 Project Structure

```text
├── component/
│   ├── CartSlice.js          # Redux slice for cart actions
│   ├── checkout.js           # Cart summary page
│   ├── header.js             # Welcome toast, navigation, and badges
│   ├── home.js               # Homepage wrapper
│   ├── InfoModal.js          # Scope warning modal for placeholders
│   ├── RestaurentMenu.js     # Fetches & renders menu details
│   ├── restaurant.js         # Fetches & renders restaurant listing
│   ├── store.js              # Redux store config
│   └── ...                   # Custom cards and shimmer elements
├── src/
│   ├── index.html            # Main HTML entry point
│   ├── index.js              # Routing and React entry point
│   └── index.css             # Global styles
├── utils/
│   ├── mockData.js           # Fallback offline datasets
│   └── ...                   # Static category datasets
├── netlify.toml              # Netlify SPA routing & CORS proxy redirects
├── package.json              # Project scripts & dependencies
└── README.md                 # Project documentation
```

---

*Designed and Developed by **[Suraj](https://github.com/Surajyadav9792)**.*
