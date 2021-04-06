const navSlive = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-link');
    const navlink = document.querySelectorAll('.nav-link li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navlink.forEach((link, index) => {

            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkfade 0.5s ease forwards ${index / 7 + 0.8}s`;
            }

        });

        burger.classList.toggle('toggle');

    })



}
navSlive();
