//Scroll menu

function scroll() {
  const menu = document.querySelector(".container-menu-scroll");
  const menuBkg = document.querySelector(".menu-scroll");

  function activeScroll() {
    menu.classList.toggle("container-menu-scroll-js", scrollY > 200);
    menuBkg.classList.toggle("menu-scroll-js", scrollY > 200);
  }

  window.addEventListener("scroll", activeScroll);
}

scroll();

// Animar ao scroll

function scrollAnimado() {
  const sections = document.querySelectorAll(".js-fade-up");
  const windowMetade = window.innerHeight * 0.6;
  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - windowMetade < 0;
      if (isSectionVisible) {
        section.classList.add("ativo-scroll");
      }
    });
  }

  window.addEventListener("scroll", animaScroll);
}

const sections = document.querySelectorAll(".js-fade-right");
const windowMetade = window.innerHeight * 0.6;
function animaScroll() {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const isSectionVisible = sectionTop - windowMetade < 0;
    if (isSectionVisible) {
      section.classList.add("ativo-scroll-right");
    }
  });
}

window.addEventListener("scroll", animaScroll);

scrollAnimado();

// Slide de pagina

const linksInternos = document.querySelectorAll('.js-link a[href^="#"]');

function scrollToSection(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute("href");
  const section = document.querySelector(href);
  const topo = section.offsetTop;

  window.scrollTo({
    top: topo,
    behavior: "smooth",
  });
}

linksInternos.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});

// Menu burguer

const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
  const active = nav.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", active);
  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);
