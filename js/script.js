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
                link.style.animation = `navLinkfade 1.5s ease forwards ${index / 7 + 0.8}s`;
            }

        });

        burger.classList.toggle('toggle');

    })



}
const language = () => {
    const lang = document.querySelectorAll('.icon');
    const bar = document.querySelector('.progress');
    const comp = document.querySelectorAll('.niveau2');
    const pro= document.querySelectorAll('.niveau div');
    lang.forEach((langu, index) => {
        langu.addEventListener('click', (event) => {
            event.preventDefault();
            bar.classList.toggle('haut');
            comp.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = ''
                } else {
                    link.style.animation = `navLinkfade 0.5s ease forwards ${index / 7 + 0.8}s`;
                    
                }
            });

            pro.forEach((link, index)=>{
                
                    link.classList.toggle(`ani${index}`);
                    
                
            })
        });

    });

}
const menu =() =>{
    const section=document.querySelectorAll('section');
    section.classList.toggle('hidden');
}
menu();
language();
navSlive();
