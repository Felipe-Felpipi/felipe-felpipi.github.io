// Som ao passar o mouse nos links (hover)
document.querySelectorAll('.links a').forEach(link => {
    link.addEventListener('mouseenter', () => {
        let hoverSound = document.getElementById('hoverSound');
        hoverSound.currentTime = 0; // Reinicia o som
        hoverSound.play();
    });

    // Som de click ao clicar nos links
    link.addEventListener('click', () => {
        document.getElementById('clickSound').play();
    });
});

// Configuração das partículas de fundo
particlesJS('particles-js', {
    particles: {
        number: { value: 80 },
        size: { value: 3 },
        move: {
            speed: 2,
            out_mode: 'bounce'
        }
    }
});

// Emojis caindo na tela
const emojis = ['👨‍💻', '🎮', '👾', '💾', '🖥️', '🕹️','🚀', '🤖','📱','💻','🖱️','⌨️','📁','📡','📖'];

function createEmoji() {
    const emoji = document.createElement('div');
    emoji.classList.add('emoji');
    emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = Math.random() * 100 + 'vw';

    let duration = Math.random() * 3 + 2; // Tempo de queda entre 2s e 5s
    emoji.style.animationDuration = duration + 's';

    document.body.appendChild(emoji);
    
    setTimeout(() => emoji.remove(), duration * 1000); // Remove no tempo exato da animação
}

setInterval(createEmoji, 500);

function typeWriterEffect(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = ""; // Limpa o conteúdo antes de digitar
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

document.addEventListener("DOMContentLoaded", () => {
    const nameElement = document.querySelector("h1");
    typeWriterEffect(nameElement, "Felipe Almeida da Silva", 100);
});
