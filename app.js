document.querySelectorAll('.app-card').forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    let currentLang = localStorage.getItem('hub_lang') || 'en';

    function applyTranslations() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (hubTranslations[currentLang] && hubTranslations[currentLang][key]) {
                el.innerHTML = hubTranslations[currentLang][key];
            }
        });

        document.querySelectorAll('.launch-text').forEach(el => {
            el.innerHTML = hubTranslations[currentLang].launchApp;
        });

        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.id === `lang-${currentLang}`);
        });
    }

    document.getElementById('lang-en').addEventListener('click', () => {
        currentLang = 'en';
        localStorage.setItem('hub_lang', 'en');
        localStorage.setItem('mandrake_lang', 'en');
        localStorage.setItem('killteam_lang', 'en');
        localStorage.setItem('arbites_lang', 'en');
        applyTranslations();
    });

    document.getElementById('lang-de').addEventListener('click', () => {
        currentLang = 'de';
        localStorage.setItem('hub_lang', 'de');
        localStorage.setItem('mandrake_lang', 'de');
        localStorage.setItem('killteam_lang', 'de');
        localStorage.setItem('arbites_lang', 'de');
        applyTranslations();
    });

    applyTranslations();
});
