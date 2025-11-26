// Accessibility functionality
function toggleAccessibilityPanel() {
    accessibilityPanel.classList.toggle("hidden");
}

function handleAccessibilityAction(action) {
    switch (action) {
        case "increase-text":
            textSize = Math.min(textSize + 0.1, 1.5);
            applyTextSize();
            break;
        case "decrease-text":
            textSize = Math.max(textSize - 0.1, 0.8);
            applyTextSize();
            break;
        case "high-contrast":
            toggleHighContrast();
            break;
        case "read-page":
            readPageContent();
            break;
    }
}

function applyTextSize() {
    document.documentElement.style.fontSize = `${textSize * 100}%`;
    localStorage.setItem("textSize", textSize);
}

function toggleHighContrast() {
    highContrast = !highContrast;
    document.body.classList.toggle("high-contrast", highContrast);
    localStorage.setItem("highContrast", highContrast);
}

function readPageContent() {
    const content = document.querySelector(".container").innerText;
    if ("speechSynthesis" in window) {
        // Cancel any ongoing speech
        speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(content);
        utterance.lang = currentLanguage === "pt" ? "pt-BR" : currentLanguage === "es" ? "es-ES" : "en-US";
        utterance.rate = 0.8;
        speechSynthesis.speak(utterance);
    } else {
        alert("Seu navegador não suporta leitura de texto.");
    }
}

// Add event listeners for accessibility
if (accessibilityToggle) {
    accessibilityToggle.addEventListener("click", toggleAccessibilityPanel);
}

document.querySelectorAll(".accessibility-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
        const action = e.currentTarget.getAttribute("data-action");
        handleAccessibilityAction(action);
    });
});
