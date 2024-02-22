const header = document.querySelector('header');
const mobileNav = document.querySelector('.mobileNav');
const navFirst = document.querySelector('.navFirst');
const navSecond = document.querySelector('.navSecond');
const logo = document.querySelector('.logo img');

let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const isScrollingDown = scrollTop > lastScrollTop;

    if (window.innerWidth <= 746) {
        // For mobile view
        header.style.backgroundColor = isScrollingDown ? '#000' : '#0d0808bd';
        mobileNav.style.display = isScrollingDown ? 'block' : 'block'; 
        navFirst.style.display = isScrollingDown ? 'none' : 'none';
        navSecond.style.display = isScrollingDown ? 'none' : 'none';
        header.style.height = isScrollingDown ? '58px' : '58px';
        logo.style.width = isScrollingDown ? '40px' : '40px';
    } else {
        // For normal view
        header.style.backgroundColor = isScrollingDown ? '#000' : '#0d0808bd';
        navFirst.style.display = isScrollingDown ? 'none' : 'block';
        navSecond.style.display = isScrollingDown ? 'none' : 'block';
        logo.style.width = isScrollingDown ? '40px' : '110px';
    }

    lastScrollTop = scrollTop;
});

const hamburgerMenu = document.getElementById('hamburger-menu');
const menu = document.getElementById('menu');

hamburgerMenu.addEventListener('click', () => {
    menu.classList.toggle('show');
});

// Ensure hamburger menu icon remains visible in mobile view
window.addEventListener('resize', function() {
    if (window.innerWidth <= 746) {
        hamburgerMenu.style.display = 'block';
    } else {
        hamburgerMenu.style.display = 'none';
        menu.classList.remove('show');
    }
});


const arrowBtn  = document.querySelectorAll(".OtherCountry i");
const OtherCountryContent = document.querySelector(".OtherCountryContent");
const firstCardWidth = OtherCountryContent.querySelector(".OtherCountryContent1").offsetWidth;

arrowBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        OtherCountryContent.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth ;

    });
      });

const arrowBtnF  = document.querySelectorAll(".services i");
const serviceBoxes = document.querySelector(".serviceBoxes");
const firstCardWidthF = serviceBoxes.querySelector(".serviceBox1").offsetWidth;

arrowBtnF.forEach(btn => {
    btn.addEventListener("click", () => {
        serviceBoxes.scrollLeft += btn.id === "left" ? -firstCardWidthF : firstCardWidthF ;

    });
      });
      

    