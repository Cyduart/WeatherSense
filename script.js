function handleScroll() {
  const navbar = document.querySelector(".navbar");
  const header = document.querySelector("header");

  // Obtém a altura do header
  const headerHeight = header.getBoundingClientRect().height;

  // Verifica se o scroll da página é maior do que a altura do header
  if (window.scrollY > headerHeight) {
    navbar.classList.add("fixed-navbar");
  } else {
    navbar.classList.remove("fixed-navbar");
  }
}
window.addEventListener("scroll", handleScroll);
