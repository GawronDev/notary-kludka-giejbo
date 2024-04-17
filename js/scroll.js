const links = document.querySelectorAll(".nav-link"); // or any other selector what you want

for (const link of links) {
  link.addEventListener("click", scrollToSection);
}

function scrollToSection(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;
  const navbarHeight = document.querySelector(".navbar").offsetHeight

  scroll({
    top: offsetTop - navbarHeight - 10,
    behavior: "smooth"
  });
}