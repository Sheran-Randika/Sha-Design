let lastScrollTop = 0;
const header = document.querySelector('header');
const mobileNav = document.querySelector('.mobileNav');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        header.style.top = '-200px';
        mobileNav.style.display = 'none'; 
    } else {
        header.style.top = '0'; 
        mobileNav.style.display = 'block'; 
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});


const hamburgerMenu = document.getElementById('hamburger-menu');
const menu = document.getElementById('menu');

hamburgerMenu.addEventListener('click', () => {
    console.log('clicked');
    menu.classList.toggle('show');
    
    
});
