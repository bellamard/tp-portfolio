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
const progressbar =() =>{
    const progress=[60, 96, 90, 92, 98];
    const pro=document.querySelectorAll('.niveau div');
    pro.forEach((tab, index)=>{
        /* if(tab.style.animation){
            tab.style.animation='';
        }else{
            tab.style.animation=''
        } */
        console.log(tab.className.set)
        
    });
}
progressbar();
language();
navSlive();
