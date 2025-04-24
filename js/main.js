//Menú responsive

const abrirMenu = document.querySelector("#open-menu");
const cerrarMenu = document.querySelector("#close-menu");
const nav = document.querySelector("nav")

abrirMenu.addEventListener("click", () => {
  nav.classList.add("nav-visible");
})

cerrarMenu.addEventListener("click", () => {
  nav.classList.remove("nav-visible");
})


//Typewritter

const text = "NUNCA ES TARDE PARA EMPEZAR. LO QUE IMPORTA ES QUE COMIENCES.";
const typewriter = document.getElementById('typewriter');
let index = 0;

function typeEffect() {
  if (index < text.length) {
    typewriter.textContent += text[index];
    index++;
    setTimeout(typeEffect, 90);
  }
}

typeEffect();

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function activateAnimations() {
  const skillsContainer = document.getElementById('skills');
  if (isInViewport(skillsContainer)) {
    skillsContainer.style.opacity = 1;
    const bars = document.querySelectorAll('.bar-fill');
    bars.forEach(bar => {
      const animation = bar.getAttribute('data-animation');
      bar.style.animation = animation;
    });

    window.removeEventListener('scroll', activateAnimations);
    window.removeEventListener('resize', activateAnimations);
  }
}

function activateCircles() {
  const techContainer = document.getElementById('technologies');
  if (isInViewport(techContainer)) {
    techContainer.style.opacity = 1;
    const circles = document.querySelectorAll('.circle');
    circles.forEach(circle => {
      const percentage = circle.getAttribute('data-percentage');
      const progress = circle.querySelector('.progress');
      const offset = 314 - (314 * percentage) / 100;
      progress.style.strokeDashoffset = offset; 
    });

    window.removeEventListener('scroll', activateCircles);
    window.removeEventListener('resize', activateCircles);
  }
}

window.addEventListener('scroll', activateAnimations);
window.addEventListener('resize', activateAnimations);
document.addEventListener('DOMContentLoaded', activateAnimations);

window.addEventListener('scroll', activateCircles);
window.addEventListener('resize', activateCircles);
document.addEventListener('DOMContentLoaded', activateCircles);
