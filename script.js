let lastScrollTop = 0;
const header = document.querySelector('header');
const mobileNav = document.querySelector('.mobileNav');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        header.style.top = '-200px'; // Hide the header when scrolling down
        mobileNav.style.display = 'none'; // Hide the mobileNav when scrolling down
    } else {
        header.style.top = '0'; // Show the header when scrolling up
        mobileNav.style.display = 'block'; // Show the mobileNav when scrolling up
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});


const hamburgerMenu = document.getElementById('hamburger-menu');
const menu = document.getElementById('menu');

hamburgerMenu.addEventListener('click', () => {
    console.log('clicked');
    menu.classList.toggle('show');
    
    
});


