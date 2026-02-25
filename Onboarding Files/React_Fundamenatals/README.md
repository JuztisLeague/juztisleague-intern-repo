# React + Tailwind CSS Environment Setup Guide

## Overview

This project was set up using React and Tailwind CSS to create a modern and responsive user interface. This document explains the step-by-step process I followed to configure the development environment.

---

## Step 1: Create React Project using Vite

I used Vite because it is fast and lightweight compared to Create React App.

Command used:

```bash
npm create vite@latest my-react-app
```

Selected:

* Framework: React
* Variant: JavaScript

Then I navigated into the project folder:

```bash
cd my-react-app
```

Installed dependencies:

```bash
npm install
```

---

## Step 2: Install Tailwind CSS

Installed Tailwind CSS and its required dependencies:

```bash
npm install -D tailwindcss postcss autoprefixer
```

Initialized Tailwind configuration:

```bash
npx tailwindcss init -p
```

This created:

* tailwind.config.js
* postcss.config.js

---

## Step 3: Configure Tailwind

Edited **tailwind.config.js**

```js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

This allows Tailwind to scan all React files.

---

## Step 4: Add Tailwind to CSS

Opened **src/index.css**

Replaced everything with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## Step 5: Import CSS into main.js

Opened **src/main.js**

Added:

```js
import './index.css'
```

This allows Tailwind styles to load into the application.

---

## Step 6: Run the Project

Started the development server:

```bash
npm run dev
```

The project runs on:

```
http://localhost:5173
```

---

## Step 7: Test Tailwind

Modified App.js:

```js
function App() {
  return (
    <h1 className="text-3xl font-bold text-blue-500">
      Tailwind is Working!
    </h1>
  );
}

export default App;
```

If the text appears blue and bold, Tailwind is working correctly.

## Conclusion

The environment was successfully set up using:

* React (Vite)
* Tailwind CSS
* Node.js
* VS Code

This setup will be used for future React development projects.

---
