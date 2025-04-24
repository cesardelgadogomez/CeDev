//Menú responsive
const abrirMenu = document.querySelector("#open-menu");
const cerrarMenu = document.querySelector("#close-menu");
const nav = document.querySelector("nav");

if (abrirMenu) {
  abrirMenu.addEventListener("click", () => {
    nav.classList.add("nav-visible");
  });
}

if (cerrarMenu) {
  cerrarMenu.addEventListener("click", () => {
    nav.classList.remove("nav-visible");
  });
}

// Typewriter
document.addEventListener('DOMContentLoaded', () => {
  const typewriter = document.getElementById('typewriter');
  if (!typewriter) return;

  function startTypewriter(text) {
    typewriter.textContent = '';
    typewriter.classList.add('active');
    let index = 0;

    function typeEffect() {
      if (index < text.length) {
        typewriter.textContent += text[index];
        index++;
        setTimeout(typeEffect, 90);
      }
    }

    typeEffect();
  }

  setTimeout(() => {
    const text = typewriter.textContent || typewriter.getAttribute('data-current-translation') || '';
    startTypewriter(text);
  }, 200);

  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      // No limpiar el contenido, confiar en language.js para actualizar el texto
      setTimeout(() => {
        typewriter.classList.add('active');
        // El texto ya es actualizado por language.js vía data-lang
      }, 200);
    });
  }
});


function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;
  return (
    rect.top < windowHeight &&
    rect.bottom > 0 &&
    rect.left < windowWidth &&
    rect.right > 0
  );
}

function activateSectionAnimations() {
  const skillsContainer = document.getElementById('skills');
  const techContainer = document.getElementById('technologies');

  // Activar animaciones para skills-container
  if (skillsContainer && isInViewport(skillsContainer)) {
    skillsContainer.style.opacity = 1;
    const bars = document.querySelectorAll('.bar-fill');
    bars.forEach(bar => {
      const animation = bar.getAttribute('data-animation');
      bar.style.animation = animation;
    });
  }

  // Activar animaciones para tech-container
  if (techContainer && isInViewport(techContainer)) {
    techContainer.style.opacity = 1;
    const circles = document.querySelectorAll('.circle');
    circles.forEach(circle => {
      const percentage = circle.getAttribute('data-percentage');
      const progress = circle.querySelector('.progress');
      const offset = 314 - (314 * percentage) / 100;
      progress.style.strokeDashoffset = offset;
    });
  }

  // Si ambos contenedores están activados, eliminar los event listeners
  if (
    (!skillsContainer || (skillsContainer && skillsContainer.style.opacity === '1')) &&
    (!techContainer || (techContainer && techContainer.style.opacity === '1'))
  ) {
    window.removeEventListener('scroll', activateSectionAnimations);
    window.removeEventListener('resize', activateSectionAnimations);
  }
}

// Ejecutar al cargar la página y en eventos de scroll/resize
document.addEventListener('DOMContentLoaded', () => {
  activateSectionAnimations();
  window.addEventListener('scroll', activateSectionAnimations);
  window.addEventListener('resize', activateSectionAnimations);
});