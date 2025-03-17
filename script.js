// script.js
function handleLogout() {
    alert('Logging out...');
}

function toggleEditProfile() {
    const display = document.getElementById('profile-display');
    const form = document.getElementById('profile-form');
    
    if (display.classList.contains('d-none')) {
        // Save profile
        const name = document.getElementById('edit-name').value;
        const email = document.getElementById('edit-email').value;
        const bio = document.getElementById('edit-bio').value;
        
        document.getElementById('profile-name').textContent = name;
        document.getElementById('profile-email').textContent = email;
        document.getElementById('profile-bio').textContent = bio;
        
        display.classList.remove('d-none');
        form.classList.add('d-none');
    } else {
        display.classList.add('d-none');
        form.classList.remove('d-none');
    }
}

function changeTab(tabId) {
    const tabs = ['enrolled', 'completed', 'achievements'];
    tabs.forEach(tab => {
        const element = document.getElementById(tab);
        const navLink = document.querySelector(`.nav-link[onclick="changeTab('${tab}')"]`);
        
        if (tab === tabId) {
            element.classList.remove('d-none');
            navLink.classList.add('active');
        } else {
            element.classList.add('d-none');
            navLink.classList.remove('active');
        }
    });
    
    document.getElementById('settings-panel').classList.add('d-none');
    document.getElementById('profile-tabs').classList.remove('d-none');
}

function showSettings(setting) {
    const settingsPanel = document.getElementById('settings-panel');
    const profileTabs = document.getElementById('profile-tabs');
    const panels = ['notifications', 'security', 'preferences'];

    if (setting === '') {
        settingsPanel.classList.add('d-none');
        profileTabs.classList.remove('d-none');
        return;
    }

    settingsPanel.classList.remove('d-none');
    profileTabs.classList.add('d-none');

    panels.forEach(panel => {
        const element = document.getElementById(`${panel}-panel`);
        if (panel === setting) {
            element.classList.remove('d-none');
        } else {
            element.classList.add('d-none');
        }
    });
}

// Prevent form submission and handle it with JavaScript
document.getElementById('profile-form').addEventListener('submit', function(e) {
    e.preventDefault();
    toggleEditProfile();
});