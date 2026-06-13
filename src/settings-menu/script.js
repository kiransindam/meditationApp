// DOM Elements
const openSettingsBtn = document.getElementById('openSettingsBtn');
const closeSettingsBtn = document.getElementById('closeSettingsBtn');
const saveSettingsBtn = document.getElementById('saveSettingsBtn');
const resetSettingsBtn = document.getElementById('resetSettingsBtn');
const settingsModal = document.getElementById('settingsModal');

const themeToggle = document.getElementById('themeToggle');
const fontSizeSlider = document.getElementById('fontSizeSlider');
const fontSizeValue = document.getElementById('fontSizeValue');
const notifToggle = document.getElementById('notifToggle');

// Default Settings
const defaultSettings = {
    isDarkMode: false,
    fontSize: 16,
    notificationsEnabled: true
};

// Load settings from localStorage or use defaults
function loadSettings() {
    const savedSettings = JSON.parse(localStorage.getItem('appSettings')) || defaultSettings;
    
    // Apply to UI
    themeToggle.checked = savedSettings.isDarkMode;
    fontSizeSlider.value = savedSettings.fontSize;
    fontSizeValue.textContent = savedSettings.fontSize;
    notifToggle.checked = savedSettings.notificationsEnabled;
    
    // Apply to Document
    applySettings(savedSettings);
}

// Apply settings to the actual page
function applySettings(settings) {
    if (settings.isDarkMode) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
    document.body.style.fontSize = `${settings.fontSize}px`;
}

// Save settings to localStorage
function saveSettings() {
    const currentSettings = {
        isDarkMode: themeToggle.checked,
        fontSize: parseInt(fontSizeSlider.value, 10),
        notificationsEnabled: notifToggle.checked
    };
    
    localStorage.setItem('appSettings', JSON.stringify(currentSettings));
    applySettings(currentSettings);
    closeModal();
}

// Reset to default settings
function resetSettings() {
    themeToggle.checked = defaultSettings.isDarkMode;
    fontSizeSlider.value = defaultSettings.fontSize;
    fontSizeValue.textContent = defaultSettings.fontSize;
    notifToggle.checked = defaultSettings.notificationsEnabled;
    
    applySettings(defaultSettings);
    localStorage.setItem('appSettings', JSON.stringify(defaultSettings));
}

// Modal Controls
function openModal() {
    settingsModal.classList.add('active');
    settingsModal.setAttribute('aria-hidden', 'false');
}

function closeModal() {
    settingsModal.classList.remove('active');
    settingsModal.setAttribute('aria-hidden', 'true');
}

// Event Listeners
openSettingsBtn.addEventListener('click', openModal);
closeSettingsBtn.addEventListener('click', closeModal);
saveSettingsBtn.addEventListener('click', saveSettings);
resetSettingsBtn.addEventListener('click', resetSettings);

// Close modal if clicking outside the content box
settingsModal.addEventListener('click', (e) => {
    if (e.target === settingsModal) {
        closeModal();
    }
});

// Update font size label in real-time
fontSizeSlider.addEventListener('input', (e) => {
    fontSizeValue.textContent = e.target.value;
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', loadSettings);
