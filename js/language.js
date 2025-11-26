// Language functionality
function toggleLanguageDropdown() {
    languageDropdown.classList.toggle("hidden");
}

function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem("preferredLanguage", lang);
    currentLang.textContent = lang.toUpperCase();
    updateContent();
}

// Add event listeners for language functionality
if (languageToggle) {
    languageToggle.addEventListener("click", toggleLanguageDropdown);
}

document.querySelectorAll(".lang-option").forEach(option => {
    option.addEventListener("click", (e) => {
        const lang = e.currentTarget.getAttribute("data-lang");
        changeLanguage(lang);
        languageDropdown.classList.add("hidden");
    });
});
