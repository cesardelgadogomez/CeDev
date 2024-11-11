const abrirMenu = document.querySelector("#open-menu");
const cerrarMenu = document.querySelector("#close-menu");
const nav = document.querySelector("nav")

abrirMenu.addEventListener("click", () => {
  nav.classList.add("nav-visible");
})

cerrarMenu.addEventListener("click", () => {
  nav.classList.remove("nav-visible");
})

//Habilidades

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Función para activar animaciones cuando el elemento es visible
function activateAnimations() {
  const skillsContainer = document.getElementById('skills');
  if (isInViewport(skillsContainer)) {
    skillsContainer.classList.add('animate');
    skillsContainer.style.opacity = 1; // Mostrar la sección al ser visible en el scroll
    window.removeEventListener('scroll', activateAnimations); // Remover evento después de activación
  }
}

window.addEventListener('scroll', activateAnimations);