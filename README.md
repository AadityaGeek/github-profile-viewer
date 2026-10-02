

https://github.com/user-attachments/assets/d51d0f7a-60b4-45ab-93b7-5ef01f158b84

# GitScope - GitHub Profile Viewer & Developer Analytics

A modern, responsive, developer-focused web dashboard to inspect GitHub profiles, key metrics, repositories, public code snippets (Gists), followers, and interactive contribution heatmaps in a crisp OLED dark theme powered by a **single, lightning-fast GitHub REST API call**.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/Vanilla_CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript_ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![GitHub API](https://img.shields.io/badge/GitHub_REST_API-181717?style=flat-square&logo=github&logoColor=white)

---

## 🎬 Video Showcase

<div align="center">
  <video src="demo/demo.mp4" poster="demo/poster.jpg" controls="controls" width="100%" style="max-width: 880px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 16px 40px rgba(0,0,0,0.5);">
    <a href="demo/demo.mp4" title="Click to open video">
      <img src="demo/preview.webp" alt="GitScope Launch Video Demo" width="100%" style="max-width: 880px; border-radius: 12px;" />
    </a>
  </video>
  <p align="center">
    <em>🎬 <strong><a href="demo/demo.mp4">Watch Full Launch Video (1080p with Audio)</a></strong> &bull; Single-call speed, developer analytics & authentic GitHub contribution calendar</em>
  </p>
</div>

---

## ✨ Features

- **Single Unified API Call**: Queries `https://api.github.com/users/{username}` in 1 single HTTP request, drastically conserving rate limits and providing instantaneous load times.
- **Developer OLED Dark Aesthetic**: Deep slate background, glowing neon developer accents, glassmorphic surfaces, and vector SVG iconography.
- **Fast Profile Search & Suggestions**: Instant search with keyboard shortcut (`/`), quick suggestion chips for popular developers (`torvalds`, `shadcn`, `gaearon`, `yyx990803`, `sindresorhus`, `antfu`), and URL synchronization (`?user=username`).
- **Comprehensive Profile Hero**: High-resolution avatar, hireable indicator badge, bio, company, location, email, website/blog, Twitter/X badge, joined date, and 1-click shareable link copying with toast notifications.
- **Developer Insights Highlights**:
  - 🏆 **GitHub Seniority**: Exact account age and founding year (e.g. 16 Years, Joined 2008).
  - 💼 **Account Type & Role**: User vs Organization and GitHub staff status.
  - ⚡ **Publishing Velocity**: Repositories created per year calculation.
- **Key Metrics Overview Grid**:
  - 📦 **Public Repositories**: Instant count with 1-click deep-link to GitHub repositories.
  - 👥 **Followers**: Total developer followers with 1-click exploration.
  - 👤 **Following**: Developers followed.
  - 📝 **Public Gists**: Public code snippets count with direct Gists link.
- **Contribution Activity Calendar**: Real-time visual activity heatmap.
- **Quick Developer Resource Hub**: 1-click action cards for Repositories, Starred Repos, Public Gists, and Projects.
- **SEO & Social Share Ready**: Pre-configured with OpenGraph, Twitter Cards, theme-color, and canonical meta tags.
- **Smooth Loading & Error Handling**: Shimmer skeleton loaders and informative error states for rate limits or non-existent usernames.

---

## 🚀 Getting Started

### Running Locally

No build tools, bundlers, or package installations are required.

1. Open `index.html` directly in any modern web browser:
   - Double-click `index.html`, or
   - Use VS Code / Antigravity IDE **Live Server**, or
   - Run a simple local HTTP server:
     ```bash
     # Using Python
     python -m http.server 3000
     ```
2. Navigate to `http://localhost:3000` (or `file:///.../index.html`).

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|---|---|
| `/` | Focus search input field |
| `Enter` | Submit search |

---

## 🛠️ Tech Stack

- **Markup**: Semantic HTML5 with accessibility attributes (`role`, `aria-*`, `<kbd>`) and complete OpenGraph / Twitter meta tags
- **Styles**: Modern Vanilla CSS3 with CSS Custom Properties, Glassmorphism, CSS Grid, and Flexbox
- **Typography**: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) & [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)
- **Logic**: Modern Vanilla JavaScript (ES6+ `async/await`, Fetch API, DOM manipulation)
- **Third-Party Libraries**: [Day.js](https://day.js.org/) (via CDN for date formatting and relative time calculations)

---

## 👨‍💻 Author & Developer

Developed by **[Aaditya Kumar](https://github.com/AadityaGeek)** ([@AadityaGeek](https://github.com/AadityaGeek)).
