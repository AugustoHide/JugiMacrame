console.log("Site carregado com sucesso!");

const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
  link.addEventListener("click", function(event) {
    event.preventDefault();

    const section = document.querySelector(this.getAttribute("href"));

    if (section) {
      section.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});
