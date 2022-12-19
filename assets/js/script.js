const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");
const opac = document.querySelector(".opac");

hamburguer.addEventListener("click", () => {
  hamburguer.classList.toggle("active");
  navMenu.classList.toggle("active");
  opac.classList.toggle("active");
});

opac.addEventListener("click", () => {
  hamburguer.classList.remove("active");
  navMenu.classList.remove("active");
  opac.classList.remove("active");
});

document.querySelectorAll(".nav-link", ".opac").forEach((n) =>
  n.addEventListener("click", () => {
    hamburguer.classList.remove("active");
    navMenu.classList.remove("active");
    opac.classList.remove("active");
  })
);

function functionInscript() {
  alert("Obrigado por se inscrever!");
}

function functionFeedback() {
  alert("Obrigado pelo Feedback!");
}
