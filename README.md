# 🛍️ Advanced Product Catalog

A **modern, responsive e-commerce product catalog** built with **React** and **TailwindCSS**. This project demonstrates **advanced features** such as real-time stock updates, modular product cards, API integration, breadcrumbs navigation, and a dark/light mode toggle. Designed for scalability and a seamless user experience.

---

## 📚 Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Project Structure](#project-structure)
- [Key Components](#key-components)
- [API Integration](#api-integration)
- [Styling & Theming](#styling--theming)
- [Advanced Features](#advanced-features)
- [Contributing](#contributing)
- [License](#license)

---

## ✨ Features

- 🛒 **Product Catalog**: Browse products with images, prices, stock, and ratings.
- 🔍 **Search & Filter**: Quickly find products with search and filter options.
- 📦 **Cart Management**: Add, remove, and update product quantities in the cart.
- 🟢 **Real-Time Stock Updates**: Live stock changes via WebSockets.
- 🧭 **Breadcrumbs Navigation**: Dynamic, context-aware breadcrumbs.
- 🌙 **Dark/Light Mode**: Toggle between themes using TailwindCSS.
- 📱 **Responsive Design**: Mobile-friendly and scalable UI.

---

## 🔗 Demo

> https://advance-product-catalog.vercel.app/

---

## 🚀 Getting Started

### ✅ Prerequisites

- Node.js (v14 or higher)
- npm or yarn

---

### 🛠️ Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/advance-product-catalog.git
cd advance-product-catalog
```
Install dependencies:
```bash
npm install
# or
yarn install
```

▶️ Running the App
```bash
Copy
Edit
npm start
# or
yarn start
Your app will be running at: http://localhost:3000
```
🗂️ Project Structure
```arduino
Copy
Edit
src/
├── components/
│   ├── Navbar.js
│   ├── Breadcrumbs.js
│   ├── ProductCard.js
│   └── ...
├── contexts/
│   └── cartContext.js
├── pages/
│   ├── Home.js
│   ├── ProductDetail.js
│   └── ...
├── App.js
├── index.js
├── index.css
└── ...
tailwind.config.js
```

🧩 Key Components
---
Navbar: Top navigation bar with cart icon and dark mode toggle.

Breadcrumbs: Shows the user's navigation path dynamically.

ProductCard: Modular, reusable product display card.

Cart Context: Global cart state management using React Context API.

🌐 API Integration
---
Product and category data fetched from a REST API (e.g., DummyJSON).

Efficient handling of large datasets with pagination and filters.

Real-time product stock updates via WebSockets.

⚡ Advanced Features
---
✅ WebSocket Integration for real-time stock updates.

✅ Breadcrumb Navigation to enhance navigation context.

✅ Responsive Product Cards using Tailwind + Flexbox.

✅ Live Cart Badge showing cart item count on the navbar.

🤝 Contributing
---
Contributions are welcome! Help us improve by reporting bugs, suggesting features, or submitting pull requests.

##To contribute:
```bash
Copy
Edit
# Fork the repository

# Create a feature branch
git checkout -b feature/YourFeature

# Commit your changes
git commit -am 'Add some feature'

# Push to the branch
git push origin feature/YourFeature

# Open a pull request 🚀
```
❌ Some Issues:
---

There is no dark-mode feature or search bar feature avaialbe yet but will be available soon . 
