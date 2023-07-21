function handleScroll() {
  const navbar = document.querySelector(".navbar");
  const header = document.querySelector("header");
  const headerHeight = header.getBoundingClientRect().height;
  if (window.scrollY > headerHeight) {
    navbar.classList.add("fixed-navbar");
  } else {
    navbar.classList.remove("fixed-navbar");
  }
}

window.addEventListener("scroll", handleScroll);

document.querySelector('.busca').addEventListener('submit', (event) => {
  event.preventDefault();

  let input = document.querySelector('#searchInput').value;

  console.log(input);

});
