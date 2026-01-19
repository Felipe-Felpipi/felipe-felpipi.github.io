/* Estilos Base (Normal) */
.glass-effect {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.5);
}

.dark .glass-effect {
    background: rgba(15, 23, 42, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.link-card {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid #e2e8f0;
}

.link-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px -5px rgba(14, 165, 233, 0.15); 
    border-color: #38bdf8;
}

.dark .link-card {
    border: 1px solid #334155;
}

.dark .link-card:hover {
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5);
    border-color: #38bdf8;
}

/* --- CORREÇÃO DO ALTO CONTRASTE (Padrão Acessibilidade Real) --- */

/* Quando a classe .high-contrast estiver ativa no body */
body.high-contrast {
    background-image: none !important;
    background-color: #000000 !important; /* Fundo Preto Puro */
    color: #FFFF00 !important; /* Texto Amarelo Padrão */
}

/* Removemos sombras, efeitos de vidro e gradientes */
body.high-contrast * {
    box-shadow: none !important;
    text-shadow: none !important;
    backdrop-filter: none !important;
    background-image: none !important;
    transition: none !important; /* Remove animações para reduzir tontura */
}

/* Força fundos pretos e bordas brancas nos cartões */
body.high-contrast .glass-effect,
body.high-contrast .link-card,
body.high-contrast .bg-white,
body.high-contrast nav a,
body.high-contrast section,
body.high-contrast #language-dropdown,
body.high-contrast #accessibility-panel {
    background-color: #000000 !important;
    border: 2px solid #FFFFFF !important;
    color: #FFFF00 !important;
}

/* Títulos em Branco para hierarquia */
body.high-contrast h1,
body.high-contrast h2,
body.high-contrast h3,
body.high-contrast strong,
body.high-contrast .font-bold {
    color: #FFFFFF !important;
}

/* Links e Ícones em Ciano ou Amarelo */
body.high-contrast i,
body.high-contrast span {
    color: #FFFF00 !important;
}

body.high-contrast a:hover {
    text-decoration: underline !important;
    background-color: #333 !important;
}

/* Ajuste específico para a foto não ficar estourada, mas ter borda */
body.high-contrast img {
    filter: grayscale(100%) contrast(1.2);
    border: 2px solid #FFFFFF !important;
}

/* Botões de ação */
body.high-contrast button {
    background-color: #000000 !important;
    border: 2px solid #FFFF00 !important;
    color: #FFFF00 !important;
}

body.high-contrast button:hover {
    background-color: #FFFF00 !important;
    color: #000000 !important;
}

/* Utilitários */
.hidden { display: none !important; }
