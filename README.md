# 🌐 Mert Karaca -- Enterprise Technical Support & Operations Specialist — Portfolio Website

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live%20Demo-brightgreen?style=for-the-badge&logo=github)](https://mertkrc.github.io/portfolio/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![i18n](https://img.shields.io/badge/i18n-Multilingual-purple?style=for-the-badge)](https://mertkrc.github.io/portfolio/)

> **Live Deployment:** [https://mertkrc.github.io/portfolio/](https://mertkrc.github.io/portfolio/)

---

## 📌 Executive Summary

This repository contains the source code and architectural structure for the personal portfolio website of **Mert Karaca**. 

Designed with a modern, high-performance, and responsive UI/UX approach, this platform serves as an interactive showcase of 5+ years of cross-functional experience in **Technical Support & Incident Operations**, **Omnichannel Ticketing Systems**, and **Web/Software Engineering Foundations**.

### Key Highlights & Features
- **Modern Minimalist UI/UX:** Dark-themed, high-contrast, accessibility-focused interface with glassmorphism and smooth transition mechanics.
- **Native Multilingual Architecture (i18n):** Client-side dynamic language switching (English / Turkish) without external dependencies.
- **Modular Component Structure:** Decoupled HTML sections for seamless maintenance, scalability, and content updates.
- **Fully Responsive & Cross-Browser Compatible:** Optimized layout mechanics for desktop, tablet, and mobile displays using standard CSS CSS Grid/Flexbox design patterns.
- **Zero External Overhead:** Lightweight execution pipeline ensuring low page-load latency and high Google PageSpeed benchmarks.

---

## 🛠️ Tech Stack & Technical Architecture

The core design philosophy of this repository emphasizes pure web standards (vanilla implementation) to maintain maximum execution performance, strict security standards, and zero dependency vulnerabilities.

| Layer | Technology | Usage & Implementation |
| :--- | :--- | :--- |
| **Frontend Layout** | **HTML5** | Semantic markup (`<section>`, `<article>`, `<header>`, `<footer>`), structured accessibility tags, and `data-i18n` attributes for localized text binding. |
| **Styling & Theme** | **CSS3** | CSS Custom Properties (Variables), custom typography, layout alignment, custom scrollbar behaviors, and fluid media queries. |
| **Logic & i18n** | **JavaScript (ES6+)** | Asynchronous DOM manipulation, JSON key-value mapping for dynamic language switching, and interactive navigation state hooks. |
| **Deployment / CI** | **GitHub Pages** | Automated static web hosting pipeline directly integrated via the repository `main` branch. |

---

## 📂 Repository Structure

```text
├── index.html              # Main HTML entry point & DOM layout
├── assets/
│   ├── css/
│   │   ├── style.css       # Core stylesheet, variables, & responsive layouts
│   ├── js/
│   │   ├── main.js         # Core application logic & DOM handlers
│   │   └── lang.js         # Multilingual dictionaries (EN / TR)
│   └── images/             # Static visual assets, brand vectors, & icons
├── README.md               # Technical project documentation & overview
└── LICENSE                 # Open-source license terms
