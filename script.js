/**
 * GitScope - GitHub Profile Viewer & Developer Analytics
 * Interactive Dashboard & API Logic
 */

// ==========================================
// Language Color Dictionary (Comprehensive)
// ==========================================
const LANGUAGE_COLORS = {
    JavaScript: '#f1e05a',
    TypeScript: '#3178c6',
    Python: '#3572A5',
    HTML: '#e34c26',
    CSS: '#563d7c',
    SCSS: '#c6538c',
    Vue: '#41b883',
    React: '#61dafb',
    Java: '#b07219',
    Kotlin: '#A97BFF',
    Rust: '#dea584',
    Go: '#00ADD8',
    C: '#555555',
    'C++': '#f34b7d',
    'C#': '#178600',
    PHP: '#4F5D95',
    Ruby: '#701516',
    Swift: '#F05138',
    Dart: '#00B4AB',
    Shell: '#89e051',
    Dockerfile: '#384d54',
    Svelte: '#ff3e00',
    Elixir: '#6e4a7e',
    Clojure: '#db5855',
    Scala: '#c22d40',
    R: '#198CE7',
    Lua: '#000080',
    Haskell: '#5e5086',
    Perl: '#0298c3',
    Jupyter: '#DA5B0B',
    'Jupyter Notebook': '#DA5B0B',
    Zig: '#ec915c',
    Nim: '#ffc200',
    Assembly: '#6E4C13',
    Solidity: '#AA6746',
    Markdown: '#083fa1',
    Vim: '#199f4b',
    PowerShell: '#012456',
    ObjectiveC: '#438eff',
    'Objective-C': '#438eff'
};

function getLangColor(lang) {
    return LANGUAGE_COLORS[lang] || '#94a3b8';
}

// ==========================================
// SVG Icon Generator Helpers
// ==========================================
const ICONS = {
    repo: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`,
    star: `<svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,
    fork: `<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><circle cx="18" cy="6" r="3"></circle><path d="M18 9v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9"></path><path d="M12 12v3"></path></svg>`,
    users: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
    userCheck: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><polyline points="16 11 18 13 22 9"></polyline></svg>`,
    code: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
    location: `<svg class="meta-icon" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`,
    company: `<svg class="meta-icon" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`,
    link: `<svg class="meta-icon" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>`,
    twitter: `<svg class="meta-icon" viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
    mail: `<svg class="meta-icon" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,
    calendar: `<svg class="meta-icon" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`,
    external: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`,
    copy: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`,
    activity: `<svg class="section-heading-icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>`,
    check: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
    orgs: `<svg class="section-heading-icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
    award: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>`,
    zap: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`,
    terminal: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>`,
    book: `<svg class="section-heading-icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`,
    database: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`,
    gist: `<svg class="section-heading-icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`
};

// ==========================================
// Application State
// ==========================================
let currentProfileUser = null;
let currentRepositories = [];
let currentEvents = [];
let currentOrgs = [];
let currentGists = [];
let currentFollowersSample = [];
let currentStarredCount = 0;
let currentLanguageStats = {};
let repoDisplayLimit = 6;
let selectedLanguageFilter = 'ALL';

// DOM Elements
const searchForm = document.getElementById('search-form');
const usernameInput = document.getElementById('username');
const skeletonLoader = document.getElementById('skeleton-loader');
const errorContainer = document.getElementById('error-container');
const errorTitle = document.getElementById('error-title');
const errorMessage = document.getElementById('error-message');
const profileContainer = document.getElementById('profile-container');
const initialState = document.getElementById('initial-state');
const suggestionChips = document.getElementById('suggestion-chips');
const toastContainer = document.getElementById('toast-container');
const homeBtn = document.getElementById('home-btn');

// ==========================================
// Event Listeners
// ==========================================
searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = usernameInput.value.trim();
    if (username) {
        fetchUserProfile(username);
    }
});

// Quick suggestion chips
suggestionChips.addEventListener('click', (e) => {
    const chip = e.target.closest('.chip');
    if (chip) {
        const username = chip.getAttribute('data-user');
        if (username) {
            usernameInput.value = username;
            fetchUserProfile(username);
        }
    }
});

// Home button
homeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    resetToHome();
});

// Keyboard shortcut: '/' focuses search input
document.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement !== usernameInput && !['input', 'textarea'].includes(document.activeElement.tagName.toLowerCase())) {
        e.preventDefault();
        usernameInput.focus();
        usernameInput.select();
    }
});

// Check URL params on initial load
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const userFromQuery = urlParams.get('user');
    if (userFromQuery) {
        usernameInput.value = userFromQuery;
        fetchUserProfile(userFromQuery);
    }
});

// Handle browser Back/Forward navigation
window.addEventListener('popstate', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const userFromQuery = urlParams.get('user');
    if (userFromQuery) {
        usernameInput.value = userFromQuery;
        fetchUserProfile(userFromQuery, false);
    } else {
        resetToHome();
    }
});

function resetToHome() {
    usernameInput.value = '';
    profileContainer.style.display = 'none';
    skeletonLoader.style.display = 'none';
    errorContainer.style.display = 'none';
    initialState.style.display = 'block';
    window.history.pushState(null, '', window.location.pathname);
}

// ==========================================
// Main API Fetch Logic
// ==========================================
async function fetchUserProfile(username, updateUrl = true) {
    if (!username) return;

    // Reset pagination and filter state
    repoDisplayLimit = 6;
    selectedLanguageFilter = 'ALL';

    // Show skeleton, hide content & errors
    initialState.style.display = 'none';
    profileContainer.style.display = 'none';
    errorContainer.style.display = 'none';
    skeletonLoader.style.display = 'block';

    if (updateUrl) {
        const newUrl = `${window.location.pathname}?user=${encodeURIComponent(username)}`;
        window.history.pushState({ user: username }, '', newUrl);
    }

    try {
        // Parallel fetch for user info, repos, recent events, orgs, gists, and followers
        const [userRes, reposRes, eventsRes, orgsRes, gistsRes, followersRes] = await Promise.all([
            fetch(`https://api.github.com/users/${encodeURIComponent(username)}`),
            fetch(`https://api.github.com/users/${encodeURIComponent(username)}/repos?per_page=100&sort=updated`),
            fetch(`https://api.github.com/users/${encodeURIComponent(username)}/events/public?per_page=12`),
            fetch(`https://api.github.com/users/${encodeURIComponent(username)}/orgs?per_page=12`),
            fetch(`https://api.github.com/users/${encodeURIComponent(username)}/gists?per_page=6`),
            fetch(`https://api.github.com/users/${encodeURIComponent(username)}/followers?per_page=8`)
        ]);

        if (userRes.status === 404) {
            throw new Error(`Developer "@${username}" was not found on GitHub.`);
        }

        if (userRes.status === 403) {
            throw new Error(`GitHub API rate limit reached (60 requests/hr for unauthenticated users). Please wait a few minutes before trying again.`);
        }

        if (!userRes.ok) {
            throw new Error(`Failed to load profile (Status ${userRes.status}).`);
        }

        const userData = await userRes.json();
        const reposData = reposRes.ok ? await reposRes.json() : [];
        const eventsData = eventsRes.ok ? await eventsRes.json() : [];
        const orgsData = orgsRes.ok ? await orgsRes.json() : [];
        const gistsData = gistsRes.ok ? await gistsRes.json() : [];
        const followersData = followersRes.ok ? await followersRes.json() : [];

        currentProfileUser = userData;
        currentRepositories = Array.isArray(reposData) ? reposData : [];
        currentEvents = Array.isArray(eventsData) ? eventsData : [];
        currentOrgs = Array.isArray(orgsData) ? orgsData : [];
        currentGists = Array.isArray(gistsData) ? gistsData : [];
        currentFollowersSample = Array.isArray(followersData) ? followersData : [];

        // Aggregate language distribution
        currentLanguageStats = aggregateLanguages(currentRepositories);

        // Render Dashboard
        renderDashboard(currentProfileUser, currentRepositories, currentEvents, currentOrgs, currentGists, currentFollowersSample, currentLanguageStats);

    } catch (err) {
        displayError(err.message);
    } finally {
        skeletonLoader.style.display = 'none';
    }
}

// Language Aggregation from Repositories
function aggregateLanguages(repos) {
    const counts = {};
    let total = 0;

    repos.forEach(repo => {
        if (repo.language) {
            counts[repo.language] = (counts[repo.language] || 0) + (repo.size || 1);
            total += (repo.size || 1);
        }
    });

    const percentages = {};
    for (const lang in counts) {
        percentages[lang] = ((counts[lang] / total) * 100).toFixed(1);
    }

    return { counts, percentages, total };
}

// Display Error Helper
function displayError(msg) {
    errorTitle.textContent = 'Unable to Load Profile';
    errorMessage.textContent = msg;
    errorContainer.style.display = 'flex';
    profileContainer.style.display = 'none';
}

// Toast Helper
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        ${type === 'success' ? ICONS.check : ''}
        <span>${message}</span>
    `;
    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'toastSlideOut 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards';
        setTimeout(() => toast.remove(), 300);
    }, 2800);
}

// ==========================================
// Dashboard Renderer
// ==========================================
function renderDashboard(user, repos, events, orgs, gists, followersSample, langStats) {
    // Total stars and forks calculations
    const totalStars = repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0);
    const totalForks = repos.reduce((sum, r) => sum + (r.forks_count || 0), 0);
    const totalOpenIssues = repos.reduce((sum, r) => sum + (r.open_issues_count || 0), 0);
    const totalSizeKB = repos.reduce((sum, r) => sum + (r.size || 0), 0);
    const totalSizeMB = (totalSizeKB / 1024).toFixed(1);

    // Forked vs Source repos
    const forkedCount = repos.filter(r => r.fork).length;
    const sourceCount = repos.length - forkedCount;

    // License distribution
    const licenses = {};
    repos.forEach(r => {
        if (r.license && r.license.spdx_id && r.license.spdx_id !== 'NOASSERTION') {
            licenses[r.license.spdx_id] = (licenses[r.license.spdx_id] || 0) + 1;
        }
    });
    const topLicense = Object.entries(licenses).sort(([, a], [, b]) => b - a)[0];

    // Most starred repo
    const sortedByStars = [...repos].sort((a, b) => (b.stargazers_count || 0) - (a.stargazers_count || 0));
    const topStarredRepo = sortedByStars.length > 0 && sortedByStars[0].stargazers_count > 0 ? sortedByStars[0] : null;

    // Account Seniority
    const createdYear = dayjs(user.created_at).year();
    const currentYear = dayjs().year();
    const accountAgeYears = Math.max(1, currentYear - createdYear);
    const joinDateFormatted = dayjs(user.created_at).format('MMMM D, YYYY');

    // Top primary language
    const topLangEntry = Object.entries(langStats.percentages).sort(([, a], [, b]) => parseFloat(b) - parseFloat(a))[0];
    const dominantLanguage = topLangEntry ? `${topLangEntry[0]} (${topLangEntry[1]}%)` : 'Not specified';

    // Average stars per repository
    const avgStarsPerRepo = repos.length > 0 ? (totalStars / repos.length).toFixed(1) : 0;

    // Website URL cleaner
    let cleanBlog = user.blog || '';
    if (cleanBlog && !cleanBlog.startsWith('http')) {
        cleanBlog = 'https://' + cleanBlog;
    }

    let html = `
        <div class="profile-dashboard">
            <!-- Profile Hero Card -->
            <div class="profile-hero-card">
                <div class="hero-main-row">
                    <div class="avatar-wrapper">
                        <img src="${user.avatar_url}" alt="${user.name || user.login}" class="profile-avatar" />
                        ${user.hireable ? `<span class="badge-hireable">Available for Hire</span>` : ''}
                    </div>

                    <div class="profile-details">
                        <div class="name-action-header">
                            <div>
                                <span class="profile-name">${user.name || user.login}</span>
                                <span class="profile-handle">@${user.login}</span>
                            </div>
                            <div class="profile-actions">
                                <a href="${user.html_url}" target="_blank" rel="noopener noreferrer" class="btn-secondary" title="Open GitHub Profile">
                                    <span>GitHub</span>
                                    ${ICONS.external}
                                </a>
                                <button type="button" class="btn-secondary" id="copy-share-btn" title="Copy shareable link">
                                    <span>Share</span>
                                    ${ICONS.copy}
                                </button>
                            </div>
                        </div>

                        ${user.bio ? `<p class="profile-bio">${escapeHTML(user.bio)}</p>` : '<p class="profile-bio" style="color: var(--text-muted); font-style: italic;">No bio description provided.</p>'}

                        <div class="meta-badges-grid">
                            ${user.company ? `<div class="meta-badge">${ICONS.company}<span>${escapeHTML(user.company)}</span></div>` : ''}
                            ${user.location ? `<div class="meta-badge">${ICONS.location}<span>${escapeHTML(user.location)}</span></div>` : ''}
                            ${user.email ? `<div class="meta-badge">${ICONS.mail}<a href="mailto:${user.email}">${escapeHTML(user.email)}</a></div>` : ''}
                            ${user.blog ? `<div class="meta-badge">${ICONS.link}<a href="${cleanBlog}" target="_blank" rel="noopener noreferrer">${cleanBlog.replace(/^https?:\/\//, '')}</a></div>` : ''}
                            ${user.twitter_username ? `<div class="meta-badge">${ICONS.twitter}<a href="https://twitter.com/${user.twitter_username}" target="_blank" rel="noopener noreferrer">@${user.twitter_username}</a></div>` : ''}
                            <div class="meta-badge">${ICONS.calendar}<span>Joined ${joinDateFormatted}</span></div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Developer Insights Highlights Strip -->
            <div class="highlights-strip">
                <div class="highlight-item">
                    <span class="highlight-icon amber">${ICONS.award}</span>
                    <div class="highlight-text">
                        <span class="highlight-label">GitHub Seniority</span>
                        <span class="highlight-val">${accountAgeYears} Years (${createdYear})</span>
                    </div>
                </div>

                <div class="highlight-item">
                    <span class="highlight-icon cyan">${ICONS.zap}</span>
                    <div class="highlight-text">
                        <span class="highlight-label">Primary Stack</span>
                        <span class="highlight-val">${dominantLanguage}</span>
                    </div>
                </div>

                ${topStarredRepo ? `
                <div class="highlight-item">
                    <span class="highlight-icon amber">${ICONS.star}</span>
                    <div class="highlight-text">
                        <span class="highlight-label">Top Starred Repo</span>
                        <span class="highlight-val"><a href="${topStarredRepo.html_url}" target="_blank" rel="noopener noreferrer" style="color:var(--accent-cyan); text-decoration:none;">${escapeHTML(topStarredRepo.name)} (${topStarredRepo.stargazers_count.toLocaleString()} ⭐)</a></span>
                    </div>
                </div>
                ` : ''}

                <div class="highlight-item">
                    <span class="highlight-icon emerald">${ICONS.repo}</span>
                    <div class="highlight-text">
                        <span class="highlight-label">Avg Stars / Repo</span>
                        <span class="highlight-val">${avgStarsPerRepo} ⭐</span>
                    </div>
                </div>
            </div>

            <!-- Key Metrics Overview Grid (6 Cards) -->
            <div class="metrics-grid">
                <div class="metric-card">
                    <div class="metric-header">
                        <span class="metric-title">Repositories</span>
                        <div class="metric-icon-box cyan">${ICONS.repo}</div>
                    </div>
                    <div class="metric-value">${user.public_repos.toLocaleString()}</div>
                </div>

                <div class="metric-card">
                    <div class="metric-header">
                        <span class="metric-title">Total Stars</span>
                        <div class="metric-icon-box amber">${ICONS.star}</div>
                    </div>
                    <div class="metric-value">${totalStars.toLocaleString()}</div>
                </div>

                <div class="metric-card">
                    <div class="metric-header">
                        <span class="metric-title">Total Forks</span>
                        <div class="metric-icon-box indigo">${ICONS.fork}</div>
                    </div>
                    <div class="metric-value">${totalForks.toLocaleString()}</div>
                </div>

                <div class="metric-card">
                    <div class="metric-header">
                        <span class="metric-title">Followers</span>
                        <div class="metric-icon-box emerald">${ICONS.users}</div>
                    </div>
                    <div class="metric-value">${user.followers.toLocaleString()}</div>
                </div>

                <div class="metric-card">
                    <div class="metric-header">
                        <span class="metric-title">Following</span>
                        <div class="metric-icon-box purple">${ICONS.userCheck}</div>
                    </div>
                    <div class="metric-value">${user.following.toLocaleString()}</div>
                </div>

                <div class="metric-card">
                    <div class="metric-header">
                        <span class="metric-title">Public Gists</span>
                        <div class="metric-icon-box rose">${ICONS.code}</div>
                    </div>
                    <div class="metric-value">${(user.public_gists || 0).toLocaleString()}</div>
                </div>
            </div>

            <!-- Deep Repository & Code Analytics Stats Grid -->
            <div class="analytics-metrics-grid">
                <div class="analytics-stat-box">
                    <span class="analytics-stat-label">Source vs Forked</span>
                    <span class="analytics-stat-value">${sourceCount} Source &bull; ${forkedCount} Forked</span>
                </div>
                <div class="analytics-stat-box">
                    <span class="analytics-stat-label">Total Code Size</span>
                    <span class="analytics-stat-value">${totalSizeMB} MB</span>
                </div>
                <div class="analytics-stat-box">
                    <span class="analytics-stat-label">Total Open Issues</span>
                    <span class="analytics-stat-value">${totalOpenIssues.toLocaleString()}</span>
                </div>
                <div class="analytics-stat-box">
                    <span class="analytics-stat-label">Dominant License</span>
                    <span class="analytics-stat-value">${topLicense ? `${topLicense[0]} (${topLicense[1]} repos)` : 'Various'}</span>
                </div>
            </div>

            <!-- GitHub Contribution Activity (Interactive Native Heatmap) -->
            <div class="section-container">
                <div class="section-header">
                    <div class="section-heading-group">
                        <span class="section-heading-icon">${ICONS.activity}</span>
                        <h2 class="section-heading">Contribution Activity Calendar</h2>
                        <span class="section-count-badge" id="contrib-total-badge">Last 1 Year</span>
                    </div>
                </div>
                <div class="contribution-wrapper" id="contribution-graph-box">
                    <div class="graph-loading-placeholder">
                        <div class="graph-shimmer"></div>
                    </div>
                </div>
            </div>

            <!-- Language Analytics Breakdown -->
            ${renderLanguageSection(langStats)}

            <!-- Organizations & Teams Section (if available) -->
            ${renderOrganizationsSection(orgs)}

            <!-- Repository Explorer with Filters & 6-Repo Limiter -->
            <div class="section-container" id="repo-section-container">
                <div class="section-header">
                    <div class="section-heading-group">
                        <span class="section-heading-icon">${ICONS.book}</span>
                        <h2 class="section-heading">Repositories</h2>
                        <span class="section-count-badge" id="repo-display-count">${Math.min(repoDisplayLimit, repos.length)} of ${repos.length}</span>
                    </div>
                    <div class="repo-controls">
                        <input type="text" id="repo-filter-input" class="repo-search-input" placeholder="Search repository name or description..." autocomplete="off" />
                        <select id="repo-sort-select" class="repo-sort-select">
                            <option value="stars">Most Stars</option>
                            <option value="forks">Most Forks</option>
                            <option value="updated">Recently Updated</option>
                            <option value="name">Alphabetical (A-Z)</option>
                        </select>
                    </div>
                </div>

                <!-- Language Filter Chips Bar -->
                <div class="repo-lang-filter-bar" id="repo-lang-filter-bar">
                    <!-- Populated dynamically -->
                </div>

                <div class="repos-grid" id="repos-grid-content">
                    <!-- Populated by filter/sort helper -->
                </div>

                <!-- Show More / Show Less Toggle Button -->
                <div class="repo-pagination-row" id="repo-pagination-row">
                    <!-- Populated dynamically -->
                </div>
            </div>

            <!-- Public Gists Showcase (if user has gists) -->
            ${renderGistsSection(gists)}

            <!-- Followers Preview Peek -->
            ${renderFollowersSection(followersSample, user.followers)}

            <!-- Recent Public Activity Feed -->
            ${renderRecentActivitySection(events, user.login)}
        </div>
    `;

    profileContainer.innerHTML = html;
    profileContainer.style.display = 'block';

    // Fetch and render native interactive contribution heatmap
    renderNativeContributionHeatmap(user.login);

    // Hook up dynamic controls inside the dashboard
    setupDashboardControls(user, repos, sortedByStars);
}

// ==========================================
// Native Interactive Contribution Heatmap
// ==========================================
async function renderNativeContributionHeatmap(username) {
    const container = document.getElementById('contribution-graph-box');
    const totalBadge = document.getElementById('contrib-total-badge');
    if (!container) return;

    try {
        // Fetch real structured day-by-day contribution JSON (CORS enabled)
        const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${encodeURIComponent(username)}?y=last`);
        if (!res.ok) throw new Error('Contribution API not available');

        const data = await res.json();
        const days = data.contributions || [];
        const totalLastYear = (data.total && data.total.lastYear) !== undefined ? data.total.lastYear : days.reduce((sum, d) => sum + (d.count || 0), 0);

        if (totalBadge) {
            totalBadge.textContent = `${totalLastYear.toLocaleString()} contributions in the last year`;
        }

        if (days.length === 0) {
            throw new Error('No contribution data');
        }

        // Color mapping for dark theme levels (0 to 4)
        const levelColors = [
            '#162033', // level 0 (empty)
            '#0e4429', // level 1
            '#006d32', // level 2
            '#26a641', // level 3
            '#38bdf8'  // level 4 (vibrant cyan glow)
        ];

        // Build SVG / Grid heatmap
        // GitHub contributions grid has 7 rows (Sunday to Saturday) and ~53 columns
        const cellWidth = 11;
        const cellGap = 3;
        const totalWeeks = Math.ceil(days.length / 7);
        const svgWidth = totalWeeks * (cellWidth + cellGap) + 36;
        const svgHeight = 7 * (cellWidth + cellGap) + 24;

        let cellsHtml = '';
        let monthLabelsHtml = '';
        let lastMonth = -1;

        days.forEach((day, index) => {
            const weekIndex = Math.floor(index / 7);
            const dayOfWeek = index % 7;
            const x = weekIndex * (cellWidth + cellGap) + 32;
            const y = dayOfWeek * (cellWidth + cellGap) + 16;
            const color = levelColors[day.level] || levelColors[0];
            const dateFormatted = dayjs(day.date).format('MMM D, YYYY');
            const tooltip = `${day.count} contribution${day.count === 1 ? '' : 's'} on ${dateFormatted}`;

            // Add month labels at the top
            const dateObj = new Date(day.date);
            const month = dateObj.getMonth();
            if (month !== lastMonth && dayOfWeek === 0) {
                lastMonth = month;
                const monthName = dayjs(day.date).format('MMM');
                monthLabelsHtml += `<text x="${x}" y="10" fill="#64748b" font-size="9" font-family="JetBrains Mono, monospace">${monthName}</text>`;
            }

            cellsHtml += `
                <rect 
                    x="${x}" 
                    y="${y}" 
                    width="${cellWidth}" 
                    height="${cellWidth}" 
                    rx="2" 
                    fill="${color}" 
                    class="heatmap-cell"
                    data-tooltip="${tooltip}"
                >
                    <title>${tooltip}</title>
                </rect>
            `;
        });

        // Day of week labels (Mon, Wed, Fri)
        const dayLabelsHtml = `
            <text x="6" y="${1 * (cellWidth + cellGap) + 25}" fill="#64748b" font-size="8" font-family="JetBrains Mono, monospace">Mon</text>
            <text x="6" y="${3 * (cellWidth + cellGap) + 25}" fill="#64748b" font-size="8" font-family="JetBrains Mono, monospace">Wed</text>
            <text x="6" y="${5 * (cellWidth + cellGap) + 25}" fill="#64748b" font-size="8" font-family="JetBrains Mono, monospace">Fri</text>
        `;

        container.innerHTML = `
            <div class="chart-scroll-area">
                <svg viewBox="0 0 ${svgWidth} ${svgHeight}" class="native-heatmap-svg" style="min-width: 720px; width: 100%; max-width: 880px;">
                    ${monthLabelsHtml}
                    ${dayLabelsHtml}
                    ${cellsHtml}
                </svg>
            </div>
            <div class="chart-legend">
                <span>Less</span>
                <span class="legend-cell" style="background-color: ${levelColors[0]};" title="0 contributions"></span>
                <span class="legend-cell" style="background-color: ${levelColors[1]};" title="1-3 contributions"></span>
                <span class="legend-cell" style="background-color: ${levelColors[2]};" title="4-6 contributions"></span>
                <span class="legend-cell" style="background-color: ${levelColors[3]};" title="7-9 contributions"></span>
                <span class="legend-cell" style="background-color: ${levelColors[4]};" title="10+ contributions"></span>
                <span>More</span>
            </div>
        `;

    } catch (e) {
        // High-contrast clean fallback
        container.innerHTML = `
            <div class="chart-scroll-area">
                <img 
                    src="https://ghchart.rshah.org/38bdf8/${username}" 
                    alt="${username}'s GitHub Contributions" 
                    class="clean-ghchart-img" 
                    loading="lazy" 
                    onerror="this.parentElement.innerHTML='<p style=\\'color:var(--text-muted);padding:1.5rem;text-align:center;\\'>Contribution activity graph temporarily unavailable.</p>'"
                />
            </div>
        `;
    }
}

// ==========================================
// Organizations Section Generator
// ==========================================
function renderOrganizationsSection(orgs) {
    if (!orgs || orgs.length === 0) return '';

    const orgCards = orgs.map(org => `
        <a href="https://github.com/${org.login}" target="_blank" rel="noopener noreferrer" class="org-card" title="${org.description || org.login}">
            <img src="${org.avatar_url}" alt="${org.login}" class="org-avatar" />
            <div class="org-info">
                <span class="org-name">${escapeHTML(org.login)}</span>
                ${org.description ? `<span class="org-desc">${escapeHTML(org.description)}</span>` : '<span class="org-desc" style="color:var(--text-muted);">Organization Member</span>'}
            </div>
        </a>
    `).join('');

    return `
        <div class="section-container">
            <div class="section-header">
                <div class="section-heading-group">
                    <span class="section-heading-icon">${ICONS.orgs}</span>
                    <h2 class="section-heading">Organizations & Teams</h2>
                    <span class="section-count-badge">${orgs.length}</span>
                </div>
            </div>
            <div class="orgs-grid">${orgCards}</div>
        </div>
    `;
}

// ==========================================
// Public Gists Section Generator
// ==========================================
function renderGistsSection(gists) {
    if (!gists || gists.length === 0) return '';

    const gistCards = gists.map(g => {
        const files = Object.values(g.files || {});
        const primaryFile = files[0] || { filename: 'gistfile.txt', language: 'Text' };
        const updatedTimeAgo = dayjs(g.updated_at).fromNow();

        return `
            <div class="gist-card">
                <div class="gist-top">
                    <a href="${g.html_url}" target="_blank" rel="noopener noreferrer" class="gist-name-link">
                        ${ICONS.code}
                        <span>${escapeHTML(primaryFile.filename)}</span>
                    </a>
                    <span class="gist-lang-badge" style="border-left: 3px solid ${getLangColor(primaryFile.language)};">${escapeHTML(primaryFile.language || 'Code')}</span>
                </div>
                <p class="gist-desc">${escapeHTML(g.description || 'No description provided.')}</p>
                <div class="gist-footer">
                    <span>${files.length} file${files.length > 1 ? 's' : ''}</span>
                    <span>Updated ${updatedTimeAgo}</span>
                </div>
            </div>
        `;
    }).join('');

    return `
        <div class="section-container">
            <div class="section-header">
                <div class="section-heading-group">
                    <span class="section-heading-icon">${ICONS.gist}</span>
                    <h2 class="section-heading">Public Gists & Code Snippets</h2>
                    <span class="section-count-badge">${gists.length}</span>
                </div>
            </div>
            <div class="gists-grid">${gistCards}</div>
        </div>
    `;
}

// ==========================================
// Followers Preview Section Generator
// ==========================================
function renderFollowersSection(followersSample, totalFollowers) {
    if (!followersSample || followersSample.length === 0) return '';

    const followerAvatars = followersSample.map(f => `
        <a href="#" class="follower-avatar-link chip-quick-jump" data-user="${escapeHTML(f.login)}" title="Inspect @${escapeHTML(f.login)}">
            <img src="${f.avatar_url}" alt="${escapeHTML(f.login)}" class="follower-thumb-img" />
            <span class="follower-login-name">@${escapeHTML(f.login)}</span>
        </a>
    `).join('');

    return `
        <div class="section-container">
            <div class="section-header">
                <div class="section-heading-group">
                    <span class="section-heading-icon">${ICONS.users}</span>
                    <h2 class="section-heading">Followers Sample</h2>
                    <span class="section-count-badge">${totalFollowers.toLocaleString()} total</span>
                </div>
            </div>
            <div class="followers-preview-grid">${followerAvatars}</div>
        </div>
    `;
}

// ==========================================
// Language Section Generator
// ==========================================
function renderLanguageSection(langStats) {
    const entries = Object.entries(langStats.percentages)
        .sort(([, a], [, b]) => parseFloat(b) - parseFloat(a))
        .slice(0, 8);

    if (entries.length === 0) return '';

    const segmentedBars = entries.map(([lang, pct]) => {
        const color = getLangColor(lang);
        return `<div class="lang-segment" style="width: ${pct}%; background-color: ${color};" title="${lang}: ${pct}%"></div>`;
    }).join('');

    const languageCards = entries.map(([lang, pct]) => {
        const color = getLangColor(lang);
        return `
            <div class="language-item">
                <div class="language-item-left">
                    <span class="lang-dot" style="background-color: ${color};"></span>
                    <span class="lang-title">${escapeHTML(lang)}</span>
                </div>
                <span class="lang-pct">${pct}%</span>
            </div>
        `;
    }).join('');

    return `
        <div class="section-container">
            <div class="section-header">
                <div class="section-heading-group">
                    <span class="section-heading-icon">${ICONS.code}</span>
                    <h2 class="section-heading">Language Distribution</h2>
                    <span class="section-count-badge">Top ${entries.length}</span>
                </div>
            </div>
            <div class="lang-segmented-bar">${segmentedBars}</div>
            <div class="languages-grid">${languageCards}</div>
        </div>
    `;
}

// ==========================================
// Recent Activity Feed Generator
// ==========================================
function renderRecentActivitySection(events, username) {
    if (!events || events.length === 0) {
        return '';
    }

    const filteredEvents = events.slice(0, 6).map(ev => {
        let actionText = '';
        let repoLink = `<a href="https://github.com/${ev.repo.name}" target="_blank" rel="noopener noreferrer">${ev.repo.name}</a>`;
        const timeAgo = dayjs(ev.created_at).fromNow();

        switch (ev.type) {
            case 'PushEvent':
                const commitCount = ev.payload.commits ? ev.payload.commits.length : 1;
                actionText = `Pushed <strong>${commitCount} commit${commitCount > 1 ? 's' : ''}</strong> to ${repoLink}`;
                break;
            case 'WatchEvent':
                actionText = `Starred repository ${repoLink}`;
                break;
            case 'CreateEvent':
                actionText = `Created ${ev.payload.ref_type || 'repository'} in ${repoLink}`;
                break;
            case 'ForkEvent':
                actionText = `Forked repository ${repoLink}`;
                break;
            case 'PullRequestEvent':
                actionText = `${ev.payload.action || 'Opened'} a pull request in ${repoLink}`;
                break;
            case 'IssuesEvent':
                actionText = `${ev.payload.action || 'Interacted with'} an issue in ${repoLink}`;
                break;
            case 'ReleaseEvent':
                actionText = `Published release in ${repoLink}`;
                break;
            default:
                actionText = `Contributed to ${repoLink}`;
        }

        return `
            <div class="activity-item">
                <div class="activity-icon-box">${ICONS.activity}</div>
                <div class="activity-content">
                    <div class="activity-title">${actionText}</div>
                    <div class="activity-time">${timeAgo}</div>
                </div>
            </div>
        `;
    }).join('');

    return `
        <div class="section-container">
            <div class="section-header">
                <div class="section-heading-group">
                    <span class="section-heading-icon">${ICONS.activity}</span>
                    <h2 class="section-heading">Recent Public Activity</h2>
                    <span class="section-count-badge">Live Feed</span>
                </div>
            </div>
            <div class="activity-feed">${filteredEvents}</div>
        </div>
    `;
}

// ==========================================
// Repositories Grid & Filter Controller
// ==========================================
function setupDashboardControls(user, repos, sortedByStars) {
    const copyBtn = document.getElementById('copy-share-btn');
    const repoSearch = document.getElementById('repo-filter-input');
    const repoSort = document.getElementById('repo-sort-select');
    const reposGrid = document.getElementById('repos-grid-content');
    const countBadge = document.getElementById('repo-display-count');
    const langFilterBar = document.getElementById('repo-lang-filter-bar');
    const paginationRow = document.getElementById('repo-pagination-row');

    // Follower quick-jump chips
    document.querySelectorAll('.chip-quick-jump').forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            const targetUser = el.getAttribute('data-user');
            if (targetUser) {
                usernameInput.value = targetUser;
                fetchUserProfile(targetUser);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    });

    // Share link copy
    if (copyBtn) {
        copyBtn.addEventListener('click', async () => {
            const shareUrl = `${window.location.origin}${window.location.pathname}?user=${encodeURIComponent(user.login)}`;
            try {
                await navigator.clipboard.writeText(shareUrl);
                showToast(`Share link for @${user.login} copied!`);
            } catch {
                showToast(`Link copied: ${shareUrl}`);
            }
        });
    }

    // Top 3 repo IDs by stars for "Featured" badges
    const topStarredIds = new Set(
        sortedByStars.filter(r => (r.stargazers_count || 0) > 0).slice(0, 3).map(r => r.id)
    );

    // Build Language Filter Pills
    const availableLangs = Array.from(new Set(repos.map(r => r.language).filter(Boolean))).sort();
    if (availableLangs.length > 0) {
        langFilterBar.innerHTML = `
            <button type="button" class="lang-filter-pill ${selectedLanguageFilter === 'ALL' ? 'active' : ''}" data-lang="ALL">All (${repos.length})</button>
            ${availableLangs.map(l => `
                <button type="button" class="lang-filter-pill ${selectedLanguageFilter === l ? 'active' : ''}" data-lang="${escapeHTML(l)}">
                    <span class="lang-dot" style="background-color: ${getLangColor(l)};"></span>
                    <span>${escapeHTML(l)}</span>
                </button>
            `).join('')}
        `;

        langFilterBar.addEventListener('click', (e) => {
            const pill = e.target.closest('.lang-filter-pill');
            if (pill) {
                selectedLanguageFilter = pill.getAttribute('data-lang');
                langFilterBar.querySelectorAll('.lang-filter-pill').forEach(p => p.classList.remove('active'));
                pill.classList.add('active');
                updateRepos();
            }
        });
    }

    // Function to render filtered & sorted repos
    function updateRepos() {
        const query = (repoSearch.value || '').toLowerCase().trim();
        const sortBy = repoSort.value;

        let filtered = repos.filter(r => {
            const matchName = r.name.toLowerCase().includes(query);
            const matchDesc = (r.description || '').toLowerCase().includes(query);
            const matchLang = (r.language || '').toLowerCase().includes(query);
            const matchesText = matchName || matchDesc || matchLang;

            const matchesLangFilter = selectedLanguageFilter === 'ALL' || r.language === selectedLanguageFilter;
            return matchesText && matchesLangFilter;
        });

        // Sorting
        filtered.sort((a, b) => {
            if (sortBy === 'stars') return (b.stargazers_count || 0) - (a.stargazers_count || 0);
            if (sortBy === 'forks') return (b.forks_count || 0) - (a.forks_count || 0);
            if (sortBy === 'updated') return new Date(b.updated_at) - new Date(a.updated_at);
            if (sortBy === 'name') return a.name.localeCompare(b.name);
            return 0;
        });

        const totalFiltered = filtered.length;
        const visibleRepos = filtered.slice(0, repoDisplayLimit);
        countBadge.textContent = `${Math.min(visibleRepos.length, totalFiltered)} of ${totalFiltered}`;

        if (totalFiltered === 0) {
            reposGrid.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 2.5rem; color: var(--text-muted);">
                    <p>No repositories found matching your filter criteria.</p>
                </div>
            `;
            paginationRow.innerHTML = '';
            return;
        }

        reposGrid.innerHTML = visibleRepos.map(r => {
            const langColor = r.language ? getLangColor(r.language) : '#cccccc';
            const updatedAgo = dayjs(r.updated_at).fromNow();
            const isTopStarred = topStarredIds.has(r.id);
            const topicsHtml = (r.topics && r.topics.length > 0)
                ? `<div class="repo-topics">${r.topics.slice(0, 4).map(t => `<span class="topic-tag">${escapeHTML(t)}</span>`).join('')}</div>`
                : '';

            return `
                <div class="repo-card ${isTopStarred ? 'repo-card-featured' : ''}">
                    <div class="repo-card-top">
                        <div class="repo-card-title-row">
                            <a href="${r.html_url}" target="_blank" rel="noopener noreferrer" class="repo-name-link">
                                <span>${escapeHTML(r.name)}</span>
                            </a>
                            <div style="display:flex; gap:0.4rem; align-items:center;">
                                ${isTopStarred ? `<span class="badge-featured">⭐ Top Starred</span>` : ''}
                                <span class="repo-badge-vis">${r.private ? 'Private' : 'Public'}</span>
                            </div>
                        </div>
                        <p class="repo-desc">${escapeHTML(r.description || 'No description provided.')}</p>
                        ${topicsHtml}
                    </div>

                    <div class="repo-card-bottom">
                        ${r.language ? `
                            <div class="repo-stat-item">
                                <span class="lang-dot" style="background-color: ${langColor};"></span>
                                <span>${escapeHTML(r.language)}</span>
                            </div>
                        ` : `<span></span>`}

                        <div class="repo-stats-group">
                            <button type="button" class="btn-copy-clone" data-clone="${r.clone_url}" title="Copy clone command: git clone ${r.clone_url}">
                                ${ICONS.terminal}
                                <span>Clone</span>
                            </button>
                            <span class="repo-stat-item" title="Stars">
                                ${ICONS.star}
                                <span>${(r.stargazers_count || 0).toLocaleString()}</span>
                            </span>
                            <span class="repo-stat-item" title="Forks">
                                ${ICONS.fork}
                                <span>${(r.forks_count || 0).toLocaleString()}</span>
                            </span>
                            <span title="Updated ${updatedAgo}">${updatedAgo}</span>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        // Clone button click listeners
        reposGrid.querySelectorAll('.btn-copy-clone').forEach(btn => {
            btn.addEventListener('click', async (e) => {
                e.preventDefault();
                const cloneUrl = btn.getAttribute('data-clone');
                const command = `git clone ${cloneUrl}`;
                try {
                    await navigator.clipboard.writeText(command);
                    showToast(`Copied: ${command}`);
                } catch {
                    showToast(`Clone URL: ${cloneUrl}`);
                }
            });
        });

        // Pagination toggle: Show More / Show Less
        if (totalFiltered > 6) {
            if (repoDisplayLimit >= totalFiltered) {
                paginationRow.innerHTML = `
                    <button type="button" id="toggle-repo-limit-btn" class="btn-show-more">
                        <span>Show Fewer (Top 6)</span>
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="18 15 12 9 6 15"></polyline></svg>
                    </button>
                `;
            } else {
                paginationRow.innerHTML = `
                    <button type="button" id="toggle-repo-limit-btn" class="btn-show-more">
                        <span>Show All Repositories (${totalFiltered})</span>
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </button>
                `;
            }

            const toggleBtn = document.getElementById('toggle-repo-limit-btn');
            if (toggleBtn) {
                toggleBtn.addEventListener('click', () => {
                    if (repoDisplayLimit >= totalFiltered) {
                        repoDisplayLimit = 6;
                    } else {
                        repoDisplayLimit = totalFiltered;
                    }
                    updateRepos();
                });
            }
        } else {
            paginationRow.innerHTML = '';
        }
    }

    repoSearch.addEventListener('input', () => {
        repoDisplayLimit = 6;
        updateRepos();
    });
    repoSort.addEventListener('change', updateRepos);

    // Initial render
    updateRepos();
}

// Utility: Escape HTML
function escapeHTML(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}