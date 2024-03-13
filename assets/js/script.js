/* ---------- Scroll ---------- */
const gotopButton = document.querySelector('.go-top-button');

window.addEventListener('scroll', () => {
    if(window.scrollY >= 200){
        gotopButton.classList.add('visible');
    }else{
        gotopButton.classList.remove('visible');
    }
})

gotopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
});

/* ---------- Menu Mobile ---------- */
const openMenuMobile = document.querySelector('.header .navigation .menu-mobile.open');
const closeMenuMobile = document.querySelector('.header .navigation .menu-mobile.close');
const menu = document.querySelector('.header .navigation .menu');

openMenuMobile.addEventListener('click', () => {
    menu.classList.add('visible')
    openMenuMobile.style.display = 'none';
    closeMenuMobile.style.display = 'flex';
});
closeMenuMobile.addEventListener('click', () => {
    menu.classList.remove('visible')
    closeMenuMobile.style.display = 'none';
    openMenuMobile.style.display = 'flex';
});