async function loadTranslations() {
  try {
    const response = await fetch('./data/translations.json');
    return await response.json();
  } catch (error) {
    console.error('Error loading translations:', error);
    return {};
  }
}

let currentLang = localStorage.getItem('language') || 'es';
let translations = {};

function updateContent(lang) {
  document.querySelectorAll('[data-lang]').forEach(element => {
    const key = element.getAttribute('data-lang');
    const keys = key.split('.');
    let text = translations[lang];

    for (const k of keys) {
      text = text?.[k];
      if (!text) break;
    }

    if (text) {
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = text;
      } else if (element.tagName === 'SELECT') {
        element.querySelector('option[disabled]').textContent = text;
      } else {
        element.innerHTML = text;
      }
    }
  });

  const toggleButton = document.getElementById('language-toggle');
  if (toggleButton) {
    toggleButton.textContent = lang === 'es' ? 'EN' : 'ES';
  }

  document.documentElement.lang = lang === 'es' ? 'es' : 'en';
}

document.addEventListener('DOMContentLoaded', async () => {
  translations = await loadTranslations();

  updateContent(currentLang);

  const toggleButton = document.getElementById('language-toggle');
  if (toggleButton) {
    toggleButton.addEventListener('click', () => {
      currentLang = currentLang === 'es' ? 'en' : 'es';
      localStorage.setItem('language', currentLang);
      updateContent(currentLang);
    });
  }
});