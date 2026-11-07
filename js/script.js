const menuButton = document.querySelector(".menu-button");
const globalNav = document.querySelector(".global-nav");

menuButton.addEventListener("click", () => {
  const isOpen = globalNav.classList.toggle("is-open");

  menuButton.setAttribute("aria-expanded", isOpen);
});

globalNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    globalNav.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});