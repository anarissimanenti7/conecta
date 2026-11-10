
// MENU MOBILE
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");

        const menuAberto = navLinks.classList.contains("show");

        menuToggle.setAttribute("aria-expanded", menuAberto);
    });
}

// FECHAR MENU AO CLICAR EM UM LINK
if (navLinks) {
    const links = navLinks.querySelectorAll("a");

    links.forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("show");

            if (menuToggle) {
                menuToggle.setAttribute("aria-expanded", "false");
            }
        });
    });
}
