document.getElementById('search-btn').addEventListener('click', () => {
    const username = document.getElementById('username').value.trim();
    if (username) {
        fetchUserProfile(username);
    }
});

// Allow pressing Enter to search
document.getElementById('username').addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        document.getElementById('search-btn').click();
    }
});


async function fetchUserProfile(username) {
    const profileContainer = document.getElementById('profile-container');
    profileContainer.innerHTML = '<p>Loading...</p>';
    profileContainer.style.display = 'block';

    try {
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        if (!userResponse.ok) {
            throw new Error('User not found');
        }
        const userData = await userResponse.json();

        const reposResponse = await fetch(userData.repos_url);
        const reposData = await reposResponse.json();

        const totalStars = reposData.reduce((sum, repo) => sum + repo.stargazers_count, 0);

        displayProfile(userData, totalStars, reposData.length);

    } catch (error) {
        profileContainer.innerHTML = `<p style="color: red; text-align: center;">${error.message}</p>`;
    }
}

function displayProfile(user, totalStars, totalRepos) {
    const profileContainer = document.getElementById('profile-container');

    const profileHTML = `
        <div class="profile-header">
            <img src="${user.avatar_url}" alt="${user.login}" class="profile-avatar">
            <div class="profile-info">
                <h1>${user.name || user.login}</h1>
                <p>@${user.login}</p>
                <a href="${user.html_url}" target="_blank" class="profile-link">View on GitHub</a>
            </div>
        </div>

        ${user.bio ? `<p class="profile-bio">${user.bio}</p>` : ''}

        <div class="profile-details">
            ${user.company ? `<div><svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path fill-rule="evenodd" d="M1.5 2.25A2.25 2.25 0 013.75 0h8.5A2.25 2.25 0 0114.5 2.25v11.5A2.25 2.25 0 0112.25 16h-8.5A2.25 2.25 0 011.5 13.75V2.25zM3.75 1A1.25 1.25 0 002.5 2.25v11.5c0 .69.56 1.25 1.25 1.25h8.5c.69 0 1.25-.56 1.25-1.25V2.25A1.25 1.25 0 0012.25 1h-8.5zM8 10.25a.75.75 0 01.75.75v1.25a.75.75 0 01-1.5 0V11a.75.75 0 01.75-.75zm-3.5-2a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5a.75.75 0 01.75-.75zm7 0a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5a.75.75 0 01.75-.75z"></path></svg> <span>${user.company}</span></div>` : ''}
            ${user.location ? `<div><svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path fill-rule="evenodd" d="M8 16s6-5.686 6-10A6 6 0 008 0 6 6 0 002 6c0 4.314 6 10 6 10zm0-7a3 3 0 100-6 3 3 0 000 6z"></path></svg> <span>${user.location}</span></div>` : ''}
            <div><svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path fill-rule="evenodd" d="M8 1.5c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5 6.5-2.91 6.5-6.5-2.91-6.5-6.5-6.5zM8 13c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm.25-7.75h-1.5v4.5a.75.75 0 001.5 0v-4.5z"></path></svg> <span>Joined ${dayjs(user.created_at).format('MMMM D, YYYY')}</span></div>
        </div>

        <div class="profile-stats">
            <div class="stat">
                <h3>${totalRepos}</h3>
                <p>Repositories</p>
            </div>
            <div class="stat">
                <h3>${totalStars}</h3>
                <p>Total Stars</p>
            </div>
             <div class="stat">
                <h3>${user.public_gists}</h3>
                <p>Public Gists</p>
            </div>
            <div class="stat">
                <h3>${user.followers}</h3>
                <p>Followers</p>
            </div>
            <div class="stat">
                <h3>${user.following}</h3>
                <p>Following</p>
            </div>
        </div>
    `;
    profileContainer.innerHTML = profileHTML;
}