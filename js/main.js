// Show hidden nav menu
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            nav.classList.toggle("show");
        })
    }
}

showMenu("nav-toggle", "nav-menu");


// Hide the nav menu after selecting a nav item
function linkAction() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show");
}

const navLink = document.querySelectorAll(".nav__link");

navLink.forEach(n => n.addEventListener("click", linkAction));