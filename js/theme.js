// Theme functionality
function toggleTheme() {
    currentTheme = currentTheme === "light" ? "dark" : "light";
    document.documentElement.classList.toggle("dark", currentTheme === "dark");
    localStorage.setItem("preferredTheme", currentTheme);
    updateThemeIcon();
}

function updateThemeIcon() {
    if (currentTheme === "dark") {
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
    } else {
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
    }
}

// Add event listener for theme toggle
if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
}
