


// scroll nav
const navbar = document.getElementById('navbar');
window.onscroll = function () {
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
        navbar.classList.remove('not-scroll');
    } else {
        navbar.classList.add('not-scroll');
        navbar.classList.remove('scrolled');
    };
}

document.addEventListener("DOMContentLoaded", function () {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");
    const navLinks = document.querySelectorAll(".nav-link");

    // اغلاق النافبار عند الضغط على أي رابط
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (window.innerWidth <= 991) {
                navbarCollapse.classList.remove("show");
                navbarToggler.classList.add("collapsed");
            }
        });
    });

    // اغلاق النافبار عند الضغط خارجها
    document.addEventListener("click", (event) => {
        if (!navbarCollapse.contains(event.target) && !navbarToggler.contains(event.target)) {
            navbarCollapse.classList.remove("show");
            navbarToggler.classList.add("collapsed");
        }
    });
});

