# GitScope - GitHub Profile Viewer & Developer Analytics

A modern, responsive, developer-focused web dashboard to inspect GitHub profiles, metrics, programming language analytics, repositories, organizations, public code snippets (Gists), followers, and interactive contribution heatmaps in a crisp OLED dark theme.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/Vanilla_CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript_ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![GitHub API](https://img.shields.io/badge/GitHub_REST_API-181717?style=flat-square&logo=github&logoColor=white)

---

## ✨ Features

- **Developer OLED Dark Aesthetic**: Deep slate background, glowing neon developer accents, glassmorphic surfaces, and vector SVG iconography.
- **Fast Profile Search & Suggestions**: Instant search with keyboard shortcut (`/`), quick suggestion chips for popular developers (`torvalds`, `shadcn`, `gaearon`, `yyx990803`, `sindresorhus`, `antfu`), and URL synchronization (`?user=username`).
- **Comprehensive Profile Hero**: High-resolution avatar, hireable indicator, bio, company, location, email, website/blog, Twitter badge, joined date, and 1-click shareable link copying with toast notifications.
- **Developer Insights Highlights Strip**:
  - 🏆 **GitHub Seniority**: Account age and founding year (e.g. 14 Years, Joined 2010).
  - ⚡ **Primary Stack**: Dominant programming language with volume percentage.
  - ⭐ **Top Starred Repo**: Link to developer's most popular repository with star count.
  - 📊 **Avg Stars / Repo**: Real-time average calculation.
- **Deep Code & Repository Analytics**:
  - Source vs Forked repository split count.
  - Total public code disk size in MB.
  - Total open issues count across all repositories.
  - Dominant software license breakdown (e.g. MIT, Apache-2.0, GPL-3.0).
- **Interactive Native Dark Contribution Heatmap**:
  - Live structured daily activity data with month labels and day-of-week indicators.
  - Interactive cell hover tooltips showing exact contribution counts and dates.
  - Total annual contribution summary badge and activity intensity legend.
- **Smart Repository Explorer**:
  - Displays top 6 repositories by default with a clean **"Show All Repositories"** / **"Show Fewer"** pagination toggle.
  - **Language Filter Chips**: 1-click filtering by specific languages (TypeScript, Python, Go, Rust, etc.).
  - **Clone Command Helper**: 1-click `git clone <url>` command copying directly to clipboard.
  - **Top Starred Badges**: Highlights the developer's flagship repositories.
  - Real-time text search and multi-criteria sorting (Most Stars, Most Forks, Recently Updated, Alphabetical).
- **Organizations & Teams**: Live integration with GitHub Orgs API to showcase the developer's teams, company logos, and org links.
- **Public Gists & Code Snippets**: Live showcase of the user's latest shared code snippets and multi-file gists.
- **Followers Sample Preview**: Clickable follower avatar badges to quickly explore fellow developers.
- **Recent Public Activity Timeline**: Real-time events feed displaying commits, stars, forks, and repository creation events with human-readable relative timestamps.
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

- **Markup**: Semantic HTML5 with accessibility attributes (`role`, `aria-*`, `<kbd>`)
- **Styles**: Modern Vanilla CSS3 with CSS Custom Properties, Glassmorphism, CSS Grid, and Flexbox
- **Typography**: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) & [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)
- **Logic**: Modern Vanilla JavaScript (ES6+ `async/await`, Fetch API, DOM manipulation)
- **Third-Party Libraries**: [Day.js](https://day.js.org/) (via CDN for date formatting and relative time calculations)
