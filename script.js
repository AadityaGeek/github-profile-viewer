/**
 * GitScope - GitHub Profile Viewer & Developer Analytics
 * Single API Call Architecture & Interactive Dashboard
 */

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
    award: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>`,
    zap: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`,
    book: `<svg class="section-heading-icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`,
    gist: `<svg class="section-heading-icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,
    heart: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`
};

// ==========================================
// Application State & DOM Elements
// ==========================================
let currentProfileUser = null;

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
// Main Single API Fetch Logic
// ==========================================
async function fetchUserProfile(username, updateUrl = true) {
    if (!username) return;

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
        // SINGLE unified GitHub API call to fetch all developer profile data
        const response = await fetch(`https://api.github.com/users/${encodeURIComponent(username)}`);

        if (response.status === 404) {
            throw new Error(`Developer "@${username}" was not found on GitHub. Please check the spelling.`);
        }

        if (response.status === 403) {
            throw new Error(`GitHub API rate limit exceeded (60 requests/hr for unauthenticated calls). Please try again shortly.`);
        }

        if (!response.ok) {
            throw new Error(`Failed to load profile (Status ${response.status}).`);
        }

        const userData = await response.json();
        currentProfileUser = userData;

        // Render complete dashboard using data from the single API call
        renderDashboard(userData);

    } catch (err) {
        displayError(err.message);
    } finally {
        skeletonLoader.style.display = 'none';
    }
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
        <span>${escapeHTML(message)}</span>
    `;
    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'toastSlideOut 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards';
        setTimeout(() => toast.remove(), 300);
    }, 2800);
}

// ==========================================
// Dashboard Renderer (Powered by Single API Call)
// ==========================================
function renderDashboard(user) {
    // Seniority & Dates calculation
    const createdYear = dayjs(user.created_at).year();
    const currentYear = dayjs().year();
    const accountAgeYears = Math.max(1, currentYear - createdYear);
    const joinDateFormatted = dayjs(user.created_at).format('MMMM D, YYYY');

    // Website URL cleaner
    let cleanBlog = user.blog || '';
    if (cleanBlog && !cleanBlog.startsWith('http')) {
        cleanBlog = 'https://' + cleanBlog;
    }

    // Velocity / Activity Metric
    const reposPerYear = (user.public_repos / accountAgeYears).toFixed(1);
    const accountType = user.type || 'User';

    const html = `
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
                                <span class="profile-name">${escapeHTML(user.name || user.login)}</span>
                                <span class="profile-handle">@${escapeHTML(user.login)}</span>
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
                        <span class="highlight-label">Account Type</span>
                        <span class="highlight-val">${accountType} ${user.site_admin ? '&bull; Staff' : ''}</span>
                    </div>
                </div>

                <div class="highlight-item">
                    <span class="highlight-icon emerald">${ICONS.repo}</span>
                    <div class="highlight-text">
                        <span class="highlight-label">Publishing Velocity</span>
                        <span class="highlight-val">~${reposPerYear} repos / yr</span>
                    </div>
                </div>
            </div>

            <!-- Key Metrics Overview Grid (4 Interactive Cards) -->
            <div class="metrics-grid">
                <a href="https://github.com/${encodeURIComponent(user.login)}?tab=repositories" target="_blank" rel="noopener noreferrer" class="metric-card metric-card-link" title="Explore public repositories on GitHub">
                    <div class="metric-header">
                        <span class="metric-title">Repositories</span>
                        <div class="metric-icon-box cyan">${ICONS.repo}</div>
                    </div>
                    <div class="metric-value">${(user.public_repos || 0).toLocaleString()}</div>
                </a>

                <a href="https://github.com/${encodeURIComponent(user.login)}?tab=followers" target="_blank" rel="noopener noreferrer" class="metric-card metric-card-link" title="View followers on GitHub">
                    <div class="metric-header">
                        <span class="metric-title">Followers</span>
                        <div class="metric-icon-box emerald">${ICONS.users}</div>
                    </div>
                    <div class="metric-value">${(user.followers || 0).toLocaleString()}</div>
                </a>

                <a href="https://github.com/${encodeURIComponent(user.login)}?tab=following" target="_blank" rel="noopener noreferrer" class="metric-card metric-card-link" title="View following on GitHub">
                    <div class="metric-header">
                        <span class="metric-title">Following</span>
                        <div class="metric-icon-box purple">${ICONS.userCheck}</div>
                    </div>
                    <div class="metric-value">${(user.following || 0).toLocaleString()}</div>
                </a>

                <a href="https://gist.github.com/${encodeURIComponent(user.login)}" target="_blank" rel="noopener noreferrer" class="metric-card metric-card-link" title="Explore public code snippets & gists">
                    <div class="metric-header">
                        <span class="metric-title">Public Gists</span>
                        <div class="metric-icon-box rose">${ICONS.code}</div>
                    </div>
                    <div class="metric-value">${(user.public_gists || 0).toLocaleString()}</div>
                </a>
            </div>

            <!-- GitHub Contribution Activity (Real GitHub Style Heatmap) -->
            <div class="section-container">
                <div class="section-header">
                    <div class="section-heading-group">
                        <span class="section-heading-icon">${ICONS.activity}</span>
                        <h2 class="section-heading">Contribution Activity Calendar</h2>
                    </div>
                    <span class="section-count-badge" id="contrib-total-badge">Last 1 Year</span>
                </div>
                <div class="contribution-wrapper" id="contribution-graph-box">
                    <div class="graph-loading-placeholder">
                        <div class="graph-shimmer"></div>
                    </div>
                </div>
            </div>

            <!-- Quick Action Hub Section -->
            <div class="section-container">
                <div class="section-header">
                    <div class="section-heading-group">
                        <span class="section-heading-icon">${ICONS.book}</span>
                        <h2 class="section-heading">Explore Developer Resources</h2>
                        <span class="section-count-badge">Quick Hub</span>
                    </div>
                </div>
                <div class="dev-hub-grid">
                    <a href="https://github.com/${encodeURIComponent(user.login)}?tab=repositories" target="_blank" rel="noopener noreferrer" class="dev-hub-card">
                        <div class="dev-hub-icon-box cyan">${ICONS.repo}</div>
                        <div class="dev-hub-content">
                            <span class="dev-hub-title">Repositories (${user.public_repos.toLocaleString()})</span>
                            <span class="dev-hub-desc">Browse all public source code repositories & projects</span>
                        </div>
                        <div class="dev-hub-arrow">${ICONS.external}</div>
                    </a>

                    <a href="https://github.com/${encodeURIComponent(user.login)}?tab=stars" target="_blank" rel="noopener noreferrer" class="dev-hub-card">
                        <div class="dev-hub-icon-box amber">${ICONS.star}</div>
                        <div class="dev-hub-content">
                            <span class="dev-hub-title">Starred Repositories</span>
                            <span class="dev-hub-desc">Discover curated open-source projects starred by @${escapeHTML(user.login)}</span>
                        </div>
                        <div class="dev-hub-arrow">${ICONS.external}</div>
                    </a>

                    <a href="https://gist.github.com/${encodeURIComponent(user.login)}" target="_blank" rel="noopener noreferrer" class="dev-hub-card">
                        <div class="dev-hub-icon-box rose">${ICONS.gist}</div>
                        <div class="dev-hub-content">
                            <span class="dev-hub-title">Public Gists (${(user.public_gists || 0).toLocaleString()})</span>
                            <span class="dev-hub-desc">Explore shared code snippets, notes, and utility scripts</span>
                        </div>
                        <div class="dev-hub-arrow">${ICONS.external}</div>
                    </a>

                    <a href="https://github.com/${encodeURIComponent(user.login)}?tab=projects" target="_blank" rel="noopener noreferrer" class="dev-hub-card">
                        <div class="dev-hub-icon-box purple">${ICONS.zap}</div>
                        <div class="dev-hub-content">
                            <span class="dev-hub-title">Projects & Roadmap</span>
                            <span class="dev-hub-desc">View Kanban boards, roadmaps, and tracking dashboards</span>
                        </div>
                        <div class="dev-hub-arrow">${ICONS.external}</div>
                    </a>
                </div>
            </div>
        </div>
    `;

    profileContainer.innerHTML = html;
    profileContainer.style.display = 'block';

    // Render real GitHub-style interactive contribution heatmap
    renderNativeContributionHeatmap(user.login);

    // Hook up share button inside dashboard
    const copyBtn = document.getElementById('copy-share-btn');
    if (copyBtn) {
        copyBtn.addEventListener('click', async () => {
            const shareUrl = `${window.location.origin}${window.location.pathname}?user=${encodeURIComponent(user.login)}`;
            try {
                await navigator.clipboard.writeText(shareUrl);
                showToast(`Share link for @${user.login} copied to clipboard!`);
            } catch {
                showToast(`Link: ${shareUrl}`);
            }
        });
    }
}

// ==========================================
// Real GitHub-Style Interactive Contribution Heatmap
// ==========================================
async function renderNativeContributionHeatmap(username) {
    const container = document.getElementById('contribution-graph-box');
    const totalBadge = document.getElementById('contrib-total-badge');
    if (!container) return;

    try {
        const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${encodeURIComponent(username)}?y=last`);
        if (!res.ok) throw new Error('Contribution API unavailable');

        const data = await res.json();
        const days = data.contributions || [];
        const totalLastYear = (data.total && data.total.lastYear !== undefined)
            ? data.total.lastYear
            : days.reduce((sum, d) => sum + (d.count || 0), 0);

        if (totalBadge) {
            totalBadge.textContent = `${totalLastYear.toLocaleString()} contributions in the last year`;
        }

        if (days.length === 0) {
            throw new Error('No contribution records');
        }

        // Authentic GitHub Dark Theme Color Palette
        const levelColors = [
            '#161b22', // Level 0 (No activity)
            '#0e4429', // Level 1
            '#006d32', // Level 2
            '#26a641', // Level 3
            '#39d353'  // Level 4 (Vivid GitHub Neon Green)
        ];

        // GitHub Contribution Grid Dimensions
        const cellWidth = 10;
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
            const y = dayOfWeek * (cellWidth + cellGap) + 18;
            const color = levelColors[day.level] || levelColors[0];
            const dateFormatted = dayjs(day.date).format('MMM D, YYYY');
            const countText = day.count === 0 ? 'No' : day.count.toLocaleString();
            const tooltip = `${countText} contribution${day.count === 1 ? '' : 's'} on ${dateFormatted}`;

            // Add Month Labels
            const dateObj = new Date(day.date);
            const month = dateObj.getMonth();
            if (month !== lastMonth && dayOfWeek === 0) {
                lastMonth = month;
                const monthName = dayjs(day.date).format('MMM');
                monthLabelsHtml += `<text x="${x}" y="12" fill="#7d8590" font-size="9" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif">${monthName}</text>`;
            }

            cellsHtml += `
                <rect 
                    x="${x}" 
                    y="${y}" 
                    width="${cellWidth}" 
                    height="${cellWidth}" 
                    rx="2" 
                    fill="${color}" 
                    class="gh-heatmap-cell"
                >
                    <title>${tooltip}</title>
                </rect>
            `;
        });

        // Day of week labels (Mon, Wed, Fri)
        const dayLabelsHtml = `
            <text x="6" y="${1 * (cellWidth + cellGap) + 26}" fill="#7d8590" font-size="9" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif">Mon</text>
            <text x="6" y="${3 * (cellWidth + cellGap) + 26}" fill="#7d8590" font-size="9" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif">Wed</text>
            <text x="6" y="${5 * (cellWidth + cellGap) + 26}" fill="#7d8590" font-size="9" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif">Fri</text>
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
                <span class="legend-cell" style="background-color: ${levelColors[0]};" title="No contributions"></span>
                <span class="legend-cell" style="background-color: ${levelColors[1]};" title="1-3 contributions"></span>
                <span class="legend-cell" style="background-color: ${levelColors[2]};" title="4-6 contributions"></span>
                <span class="legend-cell" style="background-color: ${levelColors[3]};" title="7-9 contributions"></span>
                <span class="legend-cell" style="background-color: ${levelColors[4]};" title="10+ contributions"></span>
                <span>More</span>
            </div>
        `;

    } catch (err) {
        // High-contrast clean fallback if third-party API is unreachable
        container.innerHTML = `
            <div class="chart-scroll-area">
                <img 
                    src="https://ghchart.rshah.org/39d353/${encodeURIComponent(username)}" 
                    alt="${escapeHTML(username)}'s GitHub Contributions" 
                    class="clean-ghchart-img" 
                    loading="lazy" 
                    onerror="this.parentElement.innerHTML='<p style=\\'color:var(--text-muted);padding:1.5rem;text-align:center;\\'>Contribution activity graph currently unavailable.</p>'"
                />
            </div>
        `;
    }
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