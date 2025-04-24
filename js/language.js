// Load translations
let translations = {};
let currentLang = localStorage.getItem('language') || 'es';

async function loadTranslations() {
  try {
    const response = await fetch('../data/translations.json');
    translations = await response.json();
    setLanguage(currentLang);
  } catch (error) {
    console.error('Error loading translations:', error);
  }
}

// Set language and update text
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('language', lang);
  
  // Update all elements with data-lang attributes
  document.querySelectorAll('[data-lang]').forEach(element => {
    const key = element.getAttribute('data-lang');
    const section = element.getAttribute('data-section');
    if (translations[lang] && translations[lang][section] && translations[lang][section][key]) {
      element.innerHTML = translations[lang][section][key];
    }
  });

  // Update placeholder attributes
  document.querySelectorAll('[data-lang-placeholder]').forEach(element => {
    const key = element.getAttribute('data-lang-placeholder');
    const section = element.getAttribute('data-section');
    if (translations[lang] && translations[lang][section] && translations[lang][section][key]) {
      element.placeholder = translations[lang][section][key];
    }
  });

  // Update language button text
  const langButton = document.getElementById('lang-toggle');
  if (langButton) {
    langButton.textContent = lang === 'es' ? 'EN' : 'ES';
  }
}

// Toggle language
function toggleLanguage() {
  const newLang = currentLang === 'es' ? 'en' : 'es';
  setLanguage(newLang);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  loadTranslations();
  const langButton = document.getElementById('lang-toggle');
  if (langButton) {
    langButton.addEventListener('click', toggleLanguage);
  }
});