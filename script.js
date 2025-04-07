// Control del sidebar (mostrar/ocultar)
let sidebar = document.querySelector(".sidebar");
let menuIcon = document.querySelector(".menu-icon");

menuIcon.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

// Control del menú desplegable
let arrows = document.querySelectorAll(".arrow");

arrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    let arrowParent = e.target.parentElement.parentElement;
    arrowParent.classList.toggle("showMenu");
  });
});
