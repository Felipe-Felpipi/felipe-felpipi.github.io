// Current state
let currentLanguage = "pt";
let currentTheme = "light";
let textSize = 1; // Base size multiplier
let highContrast = false;

// DOM Elements
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const languageToggle = document.getElementById("language-toggle");
const currentLang = document.getElementById("current-lang");
const languageDropdown = document.getElementById("language-dropdown");
const accessibilityToggle = document.getElementById("accessibility-toggle");
const accessibilityPanel = document.getElementById("accessibility-panel");

// Initialize page
function init() {
    loadPreferences();
    setupEventListeners();
    updateContent();
}

// Load user preferences from localStorage
function loadPreferences() {
    const savedLanguage = localStorage.getItem("preferredLanguage");
    const savedTheme = localStorage.getItem("preferredTheme");
    const savedTextSize = localStorage.getItem("textSize");
    const savedHighContrast = localStorage.getItem("highContrast");

    if (savedLanguage) {
        currentLanguage = savedLanguage;
    }
    if (savedTheme) {
        currentTheme = savedTheme;
        document.documentElement.classList.toggle("dark", savedTheme === "dark");
        updateThemeIcon();
    }
    if (savedTextSize) {
        textSize = parseFloat(savedTextSize);
        applyTextSize();
    }
    if (savedHighContrast === "true") {
        highContrast = true;
        document.body.classList.add("high-contrast");
    }
}

// Setup event listeners
function setupEventListeners() {
    // Close dropdowns when clicking outside
    document.addEventListener("click", (e) => {
        if (!languageToggle.contains(e.target) && !languageDropdown.contains(e.target)) {
            languageDropdown.classList.add("hidden");
        }
        if (!accessibilityToggle.contains(e.target) && !accessibilityPanel.contains(e.target)) {
            accessibilityPanel.classList.add("hidden");
        }
    });
}

// Update all content based on current language
function updateContent() {
    const t = translations[currentLanguage];
    if (!t) return;

    // Update profile section
    document.getElementById("profile-name").textContent = t.profileName;
    document.getElementById("profile-title").textContent = t.profileTitle;
    document.getElementById("profile-description").textContent = t.profileDescription;

    // Update links
    document.getElementById("link-github").textContent = t.linkGitHub;
    document.getElementById("link-github-desc").textContent = t.linkGitHubDesc;
    document.getElementById("link-linkedin").textContent = t.linkLinkedIn;
    document.getElementById("link-linkedin-desc").textContent = t.linkLinkedInDesc;
    document.getElementById("link-portfolio").textContent = t.linkPortfolio;
    document.getElementById("link-portfolio-desc").textContent = t.linkPortfolioDesc;
    document.getElementById("link-email").textContent = t.linkEmail;
    document.getElementById("link-email-desc").textContent = t.linkEmailDesc;
    document.getElementById("link-youtube").textContent = t.linkYouTube;
    document.getElementById("link-youtube-desc").textContent = t.linkYouTubeDesc;

    // Update skills section
    document.getElementById("skills-title").textContent = t.skillsTitle;
    document.getElementById("footer-text").textContent = t.footerText;

    // Update accessibility panel
    document.getElementById("accessibility-title").textContent = t.accessibilityTitle;
    document.getElementById("increase-text-label").textContent = t.increaseText;
    document.getElementById("decrease-text-label").textContent = t.decreaseText;
    document.getElementById("high-contrast-label").textContent = t.highContrast;
    document.getElementById("read-page-label").textContent = t.readPage;
}

// Initialize the application
document.addEventListener("DOMContentLoaded", init);
