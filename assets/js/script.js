const gotopButton = document.querySelector('.go-top-button');

window.addEventListener('scroll', () => {
    if(window.scrollY >= 200){
        gotopButton.style.display = 'block';
    }else{
        gotopButton.style.display = 'none';
    }
})

gotopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
});