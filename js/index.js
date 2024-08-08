const abrirMenu = document.querySelector("#abrir-menu");
const cerrarMenu = document.querySelector("#cerrar-menu");
const aside = document.querySelector("nav")

abrirMenu.addEventListener("click", () => {
  aside.classList.add("menu-visible");
})

cerrarMenu.addEventListener("click", () => {
  aside.classList.remove("menu-visible");
})
