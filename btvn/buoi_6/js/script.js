let menu = document.querySelector('#menu-icon');
let navList = document.querySelector('.navlist');
let closeBtn = document.querySelector('bx-x');

menu.onclick= () =>{
    menu.classList.toggle('bx-x');
    navList.classList.toggle('open');
};
if (menu.style.display === 'flex'){
    closeBtn.addEventListener('click', () => {
        menu.style.display === "none"
    })
}

const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
})

sr.reveal('.hero-text', {delay: 200, origin: 'top'});
sr.reveal('.hero-img', {delay: 450, origin: 'top'});
sr.reveal('.icons', {delay: 500, origin: 'left'});
