// Language data
const translations = {
    "pt": {
        "profileName": "Felipe Almeida da Silva (Felp)",
        "profileTitle": "Engenheiro de Software, Desenvolvedor Fullstack, Game Designer e Developer",
        "profileDescription": "Criando soluções inovadoras através de código, design e tecnologia. Especializado em desenvolvimento web, aplicações móveis e criação de jogos.",
        "linkGitHub": "GitHub",
        "linkGitHubDesc": "Projetos e código fonte",
        "linkLinkedIn": "LinkedIn",
        "linkLinkedInDesc": "Conecte-se profissionalmente",
        "linkPortfolio": "Portfólio",
        "linkPortfolioDesc": "Meus projetos e trabalhos",
        "linkEmail": "E-mail",
        "linkEmailDesc": "Entre em contato",
        "linkYouTube": "YouTube",
        "linkYouTubeDesc": "Tutoriais e conteúdo",
        "skillsTitle": "Habilidades & Tecnologias",
        "footerText": "© 2025 Felipe Felp. Todos os direitos reservados.",
        "accessibilityTitle": "Acessibilidade",
        "increaseText": "Aumentar Texto",
        "decreaseText": "Diminuir Texto",
        "highContrast": "Alto Contraste",
        "readPage": "Ler Página"
    },
    "es": {
        "profileName": "Felipe Almeida da Silva (Felp)",
        "profileTitle": "Ingeniero de Software, Desarrollador Fullstack, Diseñador de Juegos y Desarrollador",
        "profileDescription": "Creando soluciones innovadoras a través de código, diseño y tecnología. Especializado en desarrollo web, aplicaciones móviles y creación de juegos.",
        "linkGitHub": "GitHub",
        "linkGitHubDesc": "Proyectos y código fuente",
        "linkLinkedIn": "LinkedIn",
        "linkLinkedInDesc": "Conéctate profesionalmente",
        "linkPortfolio": "Portafolio",
        "linkPortfolioDesc": "Mis proyectos y trabajos",
        "linkEmail": "Correo",
        "linkEmailDesc": "Ponte en contacto",
        "linkYouTube": "YouTube",
        "linkYouTubeDesc": "Tutoriales y contenido",
        "skillsTitle": "Habilidades & Tecnologías",
        "footerText": "© 2025 Felipe Felp. Todos los derechos reservados.",
        "accessibilityTitle": "Accesibilidad",
        "increaseText": "Aumentar Texto",
        "decreaseText": "Disminuir Texto",
        "highContrast": "Alto Contraste",
        "readPage": "Leer Página"
    },
    "en": {
        "profileName": "Felipe Almeida da Silva (Felp)",
        "profileTitle": "Software Engineer, Fullstack Developer, Game Designer and Developer",
        "profileDescription": "Creating innovative solutions through code, design and technology. Specialized in web development, mobile applications and game creation.",
        "linkGitHub": "GitHub",
        "linkGitHubDesc": "Projects and source code",
        "linkLinkedIn": "LinkedIn",
        "linkLinkedInDesc": "Connect professionally",
        "linkPortfolio": "Portfolio",
        "linkPortfolioDesc": "My projects and works",
        "linkEmail": "Email",
        "linkEmailDesc": "Get in touch",
        "linkYouTube": "YouTube",
        "linkYouTubeDesc": "Tutorials and content",
        "skillsTitle": "Skills & Technologies",
        "footerText": "© 2025 Felipe Felp. All rights reserved.",
        "accessibilityTitle": "Accessibility",
        "increaseText": "Increase Text",
        "decreaseText": "Decrease Text",
        "highContrast": "High Contrast",
        "readPage": "Read Page"
    }
};

// State Management
let currentLanguage = localStorage.getItem("preferredLanguage") || "pt";
let textSize = parseFloat(localStorage.getItem("textSize")) || 1;
let highContrast = localStorage.getItem("highContrast") === "true";

// DOM Elements
const elements = {
    themeToggle: document.getElementById("theme-toggle"),
    themeIcon: document.getElementById("theme-icon"),
    languageToggle: document.getElementById("language-toggle"),
    currentLang: document.getElementById("current-lang"),
    languageDropdown: document.getElementById("language-dropdown"),
    accessibilityToggle: document.getElementById("accessibility-toggle"),
    accessibilityPanel: document.getElementById("accessibility-panel"),
    body: document.body,
    root: document.documentElement
};

// Initialize
function init() {
    // Apply initial states
    changeLanguage(currentLanguage);
    applyTextSize();
    if (highContrast) elements.body.classList.add("high-contrast");
    updateThemeIcon();

    setupEventListeners();
}

function setupEventListeners() {
    // Theme
    elements.themeToggle.addEventListener("click", toggleTheme);

    // Language
    elements.languageToggle.addEventListener("click", (e) => {
        e.stopPropagation();
        elements.languageDropdown.classList.toggle("hidden");
        elements.accessibilityPanel.classList.add("hidden");
    });

    document.querySelectorAll(".lang-option").forEach(opt => {
        opt.addEventListener("click", () => {
            changeLanguage(opt.getAttribute("data-lang"));
            elements.languageDropdown.classList.add("hidden");
        });
    });

    // Accessibility
    elements.accessibilityToggle.addEventListener("click", (e) => {
        e.stopPropagation();
        elements.accessibilityPanel.classList.toggle("hidden");
        elements.languageDropdown.classList.add("hidden");
    });

    document.querySelectorAll(".accessibility-btn").forEach(btn => {
        btn.addEventListener("click", (e) => handleAccessibility(e.currentTarget.getAttribute("data-action")));
    });

    // Close on click outside
    document.addEventListener("click", () => {
        elements.languageDropdown.classList.add("hidden");
        elements.accessibilityPanel.classList.add("hidden");
    });
}

// Logic Functions
function toggleTheme() {
    const isDark = elements.root.classList.contains("dark");
    if (isDark) {
        elements.root.classList.remove("dark");
        localStorage.setItem("preferredTheme", "light");
    } else {
        elements.root.classList.add("dark");
        localStorage.setItem("preferredTheme", "dark");
    }
    updateThemeIcon();
}

function updateThemeIcon() {
    const isDark = elements.root.classList.contains("dark");
    elements.themeIcon.className = isDark ? "fas fa-sun" : "fas fa-moon";
}

function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem("preferredLanguage", lang);
    elements.currentLang.textContent = lang.toUpperCase();
    
    const t = translations[lang];
    if (!t) return;

    // Mapeamento direto de IDs para chaves do objeto translations
    const idMap = {
        // IDs existentes no HTML
        'profile-name': 'profileName',
        'profile-title': 'profileTitle',
        'profile-description': 'profileDescription',
        'link-github': 'linkGitHub',
        'link-github-desc': 'linkGitHubDesc',
        'link-linkedin': 'linkLinkedIn',
        'link-linkedin-desc': 'linkLinkedInDesc',
        'link-portfolio': 'linkPortfolio',
        'link-portfolio-desc': 'linkPortfolioDesc',
        'link-email': 'linkEmail',
        'link-email-desc': 'linkEmailDesc',
        'link-youtube': 'linkYouTube',
        'link-youtube-desc': 'linkYouTubeDesc',
        'skills-title': 'skillsTitle',
        'footer-text': 'footerText',
        'accessibility-title': 'accessibilityTitle',
        'increase-text-label': 'increaseText',
        'decrease-text-label': 'decreaseText',
        'high-contrast-label': 'highContrast',
        'read-page-label': 'readPage'
    };

    // Atualiza todos os elementos baseado no mapeamento
    Object.keys(idMap).forEach(id => {
        const el = document.getElementById(id);
        const key = idMap[id];
        if (el && t[key]) {
            el.textContent = t[key];
        }
    });
}

function handleAccessibility(action) {
    switch(action) {
        case "increase-text":
            textSize = Math.min(textSize + 0.1, 1.5);
            break;
        case "decrease-text":
            textSize = Math.max(textSize - 0.1, 0.9);
            break;
        case "high-contrast":
            highContrast = !highContrast;
            elements.body.classList.toggle("high-contrast", highContrast);
            localStorage.setItem("highContrast", highContrast);
            return; // No need to apply text size
        case "read-page":
            readPage();
            return;
    }
    localStorage.setItem("textSize", textSize);
    applyTextSize();
}

function applyTextSize() {
    elements.root.style.fontSize = `${textSize * 16}px`; // Base 16px
}

function readPage() {
    if (!window.speechSynthesis) return alert("Seu navegador não suporta leitura.");
    
    window.speechSynthesis.cancel();
    
    // Construct text to read based on main content
    const content = document.querySelector("main").innerText;
    const utterance = new SpeechSynthesisUtterance(content);
    
    utterance.lang = currentLanguage === 'pt' ? 'pt-BR' : currentLanguage === 'es' ? 'es-ES' : 'en-US';
    utterance.rate = 1;
    utterance.pitch = 1;
    
    window.speechSynthesis.speak(utterance);
}

// Run
init();
