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
