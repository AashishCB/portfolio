document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetClass = link.getAttribute('data-target');
            const targetSection = document.querySelector(`.${targetClass}`);
            targetSection.scrollIntoView({behavior: 'smooth'});
        });
    });
});

window.addEventListener('load', () => {
    let x = document.getElementById("navigation")
    if (window.innerWidth > 992) {
        x.hidden = false;
    }
    else if (x.hidden === false && window.innerWidth <= 992) {
        x.hidden = true;
    }
})

window.addEventListener('resize', () => {
    let x = document.getElementById("navigation")
    if (window.innerWidth > 992) {
        x.hidden = false;
    }
    else if (x.hidden === false && window.innerWidth <= 992) {
        x.hidden = true;
    }
})

function toggleNavbar() {
    let x = document.getElementById("navigation")
    x.hidden = !x.hidden;
}
