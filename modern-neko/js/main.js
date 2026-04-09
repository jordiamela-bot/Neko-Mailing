import { translations } from './translations.js';

let currentLang = 'ca';

function updateTranslations() {
    const t = translations[currentLang];

    // Text elements
    document.querySelectorAll('[data-t]').forEach(el => {
        const key = el.getAttribute('data-t');
        if (t[key]) {
            el.innerHTML = t[key];
        }
    });

    // Attribute elements (meta descriptions, etc)
    document.querySelectorAll('[data-t-content]').forEach(el => {
        const key = el.getAttribute('data-t-content');
        if (t[key]) {
            el.setAttribute('content', t[key]);
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

// Cookies Logic
function initCookies() {
    const banner = document.getElementById('cookie-banner');
    const mainView = document.getElementById('cookie-main-view');
    const configView = document.getElementById('cookie-config-view');

    const acceptBtn = document.getElementById('accept-cookies');
    const configureBtn = document.getElementById('configure-cookies');
    const cancelBtn = document.getElementById('cancel-cookies');
    const saveBtn = document.getElementById('save-cookies');

    if (!localStorage.getItem('cookies_accepted')) {
        banner.style.display = 'block';
    }

    acceptBtn.addEventListener('click', () => {
        localStorage.setItem('cookies_accepted', 'all');
        banner.style.display = 'none';
    });

    configureBtn.addEventListener('click', () => {
        mainView.style.display = 'none';
        configView.style.display = 'block';
    });

    cancelBtn.addEventListener('click', () => {
        localStorage.setItem('cookies_accepted', 'none');
        banner.style.display = 'none';
    });

    saveBtn.addEventListener('click', () => {
        const prefs = {
            stats: document.getElementById('cookie-stats').checked,
            marketing: document.getElementById('cookie-marketing').checked
        };
        localStorage.setItem('cookies_accepted', JSON.stringify(prefs));
        banner.style.display = 'none';
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
    initCookies();
});
