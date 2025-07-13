// DOM Elements
const searchBtn = document.getElementById('search-btn');
const usernameInput = document.getElementById('username');
const profileContainer = document.getElementById('profile-container');
const loadingSpinner = document.getElementById('loading');

// Event Listeners
searchBtn.addEventListener('click', () => {
    const username = usernameInput.value.trim();
    if (username) {
        fetchUserProfile(username);
    }
});

usernameInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        searchBtn.click();
    }
});

// Main Fetch Function
async function fetchUserProfile(username) {
    // Show loading spinner and hide previous results
    loadingSpinner.style.display = 'block';
    profileContainer.style.display = 'none';
    profileContainer.innerHTML = '';

    try {
        // Fetch user data and repository data in parallel
        const [userResponse, reposResponse] = await Promise.all([
            fetch(`https://api.github.com/users/${username}`),
            fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
        ]);

        if (!userResponse.ok) {
            throw new Error('User not found');
        }

        const userData = await userResponse.json();
        const reposData = await reposResponse.json();

        // Process data
        const totalStars = reposData.reduce((sum, repo) => sum + repo.stargazers_count, 0);
        const topRepos = reposData.sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 6);
        const languageData = await fetchLanguageData(reposData);
        
        // Display Profile
        displayProfile(userData, totalStars, topRepos, languageData);

    } catch (error) {
        profileContainer.innerHTML = `<p style="color: red; text-align: center;">${error.message}</p>`;
    } finally {
        // Hide loading spinner and show profile container
        loadingSpinner.style.display = 'none';
        profileContainer.style.display = 'block';
    }
}

// Fetch Language Data for all repos
async function fetchLanguageData(repos) {
    const languagePromises = repos.map(repo => 
        fetch(repo.languages_url).then(res => res.json())
    );
    const allLanguages = await Promise.all(languagePromises);

    const languageStats = allLanguages.reduce((stats, languages) => {
        for (const lang in languages) {
            stats[lang] = (stats[lang] || 0) + languages[lang];
        }
        return stats;
    }, {});
    
    return languageStats;
}

// Display Function
function displayProfile(user, totalStars, topRepos, languageData) {
    // Basic Profile Info
    let profileHTML = `
        <div class="profile-header">
            <img src="${user.avatar_url}" alt="${user.login}" class="profile-avatar">
            <div class="profile-info">
                <h1>${user.name || user.login}</h1>
                <p>@${user.login}</p>
                <a href="${user.html_url}" target="_blank" class="profile-link">View on GitHub</a>
            </div>
        </div>
        ${user.bio ? `<p class="profile-bio">${user.bio}</p>` : ''}
        <div class="profile-stats">
            <div class="stat"><h3>${user.public_repos}</h3><p>Repositories</p></div>
            <div class="stat"><h3>${totalStars}</h3><p>Total Stars</p></div>
            <div class="stat"><h3>${user.followers}</h3><p>Followers</p></div>
            <div class="stat"><h3>${user.following}</h3><p>Following</p></div>
        </div>
    `;

    // Top Languages Section
    const totalBytes = Object.values(languageData).reduce((sum, bytes) => sum + bytes, 0);
    if (totalBytes > 0) {
        const topLangs = Object.entries(languageData)
            .sort(([, a], [, b]) => b - a)
            .slice(0, 5);

        profileHTML += '<h2 class="section-title">Top Languages</h2><div class="languages-container">';
        topLangs.forEach(([lang, bytes]) => {
            const percentage = ((bytes / totalBytes) * 100).toFixed(2);
            profileHTML += `
                <div class="language">
                    <div class="language-name">
                        <span>${lang}</span>
                        <span>${percentage}%</span>
                    </div>
                    <div class="language-bar-bg">
                        <div class="language-bar" style="width: ${percentage}%; background-color: ${getLanguageColor(lang)};"></div>
                    </div>
                </div>
            `;
        });
        profileHTML += '</div>';
    }

    // Top Repositories Section
    if (topRepos.length > 0) {
        profileHTML += '<h2 class="section-title">Top Repositories</h2><div class="repos-grid">';
        topRepos.forEach(repo => {
            profileHTML += `
                <div class="repo-card">
                    <div>
                        <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
                        <p>${repo.description || 'No description provided.'}</p>
                    </div>
                    <div class="repo-footer">
                        ${repo.language ? `<span><span class="repo-lang-color" style="background-color: ${getLanguageColor(repo.language)};"></span> ${repo.language}</span>` : ''}
                        <span>⭐ ${repo.stargazers_count}</span>
                        <span>🍴 ${repo.forks_count}</span>
                    </div>
                </div>
            `;
        });
        profileHTML += '</div>';
    }

    // Contribution Graph Section
    profileHTML += `
        <h2 class="section-title">Contribution Graph</h2>
        <img src="https://ghchart.rshah.org/${user.login}" alt="Contribution Graph" class="contribution-graph"/>
    `;

    profileContainer.innerHTML = profileHTML;
}

// Simple utility to get a color for a language (not exhaustive)
function getLanguageColor(language) {
    const colors = {
        JavaScript: '#f1e05a', HTML: '#e34c26', CSS: '#563d7c',
        Python: '#3572A5', Java: '#b07219', TypeScript: '#2b7489',
        Shell: '#89e051', C: '#555555', 'C++': '#f34b7d',
        PHP: '#4F5D95', Ruby: '#701516', Go: '#00ADD8',
        Swift: '#ffac45', Kotlin: '#F18E33', Rust: '#dea584'
    };
    return colors[language] || '#cccccc'; // Default color
}