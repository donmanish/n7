# n7 - Application design Showcase

Welcome to **n7**, a modern frontend design repository featuring clean layouts, custom UI components, and fully responsive designs. Built using **React**, **Vite**, **HTML**, **CSS**, and **JavaScript**.

🌐 **Live Demo:** https://n7-phi.vercel.app/

---

## 🎨 Features

* Modular CSS architecture
* Reusable React components
* Structured layout system
* Fully responsive design
* Clean and maintainable codebase
* Vite-powered fast development environment
* Automated deployment with Vercel

---

## 📁 Project Structure

```text
n7/
├── public/                     # Static assets
├── src/
│   ├── assets/
│   │   └── style/
│   │       ├── style.css       # Global styles
│   │       ├── slider.css      # Slider styles
│   │       └── responsive.css  # Responsive breakpoints
│   │
│   ├── components/
│   │   └── Slider/             # Reusable slider components
│   │
│   ├── pages/
│   │   ├── layout/
│   │   │   ├── header/         # Header components
│   │   │   ├── footer/         # Footer components
│   │   │   └── base/           # Layout wrapper
│   │   │
│   │   └── home/               # Home page
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

* Node.js (v18+ recommended)
* npm

### Clone the Repository

```bash
git clone https://github.com/donmanish/n7.git
cd n7
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

Open your browser and visit:

```text
http://localhost:5173
```

---

## 🏗️ Build for Production

Generate an optimized production build:

```bash
npm run build
```

The compiled files will be generated inside the:

```text
dist/
```

directory.

---

## 🚀 Deployment

This project is deployed using **Vercel**.

### Deployment Configuration

| Setting          | Value         |
| ---------------- | ------------- |
| Platform         | Vercel        |
| Branch           | main          |
| Build Command    | npm run build |
| Output Directory | dist          |

Every push to the `main` branch automatically triggers a new deployment.

Live URL:

```text
https://n7-phi.vercel.app/
```

---

## 🛠️ Tech Stack

* React
* Vite
* JavaScript (ES6+)
* HTML5
* CSS3
* Responsive Web Design

---

## 👨‍💻 Author

**Manish Panda**

* GitHub: https://github.com/donmanish

---

⭐ If you like this project, consider giving it a star on GitHub.
