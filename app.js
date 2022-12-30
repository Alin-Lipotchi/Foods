// Variables

const menuButton = document.querySelector(".menu");
const icons = document.querySelectorAll(".section-1-icons i");
let i = 1;

// Navbar

const showMenu = () => {
    document.querySelectorAll(".target").forEach(e => {
        e.classList.toggle("change");
    });
}

menuButton.addEventListener("click", showMenu);

// Section 1 Slideshow

setInterval(() => {
    i++;

    const icon = document.querySelector(".section-1-icons i.change");
    icon.classList.remove("change");

    if(i > icons.length) {
        icons[0].classList.add("change");
        i = 1;
    } else {
        icon.nextElementSibling.classList.add("change");
    }
}, 4000);