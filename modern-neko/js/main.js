import { translations } from './translations.js';

let currentLang = 'ca';

function updateTranslations() {
    const t = translations[currentLang];
    document.querySelectorAll('[data-t]').forEach(el => {
        const key = el.getAttribute('data-t');
        if (t[key]) {
            el.innerHTML = t[key];
        }
    });
    document.documentElement.lang = currentLang;
}

// Reveal animations on scroll
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });
}

// Language selector
document.getElementById('lang-select').addEventListener('change', (e) => {
    currentLang = e.target.value;
    updateTranslations();
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateTranslations();
    initScrollReveal();
});
