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
        header.style.backgroundColor = isScrollingDown ? '#000' : '#0d0808bd';
        mobileNav.style.display = isScrollingDown ? 'block' : 'block'; 
        navFirst.style.display = isScrollingDown ? 'none' : 'none';
        navSecond.style.display = isScrollingDown ? 'none' : 'none';
        header.style.height = isScrollingDown ? '58px' : '58px';
        logo.style.width = isScrollingDown ? '40px' : '40px';
    } else {
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

const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.mainImg');
const maxTranslate = 300;

let index = 0;

function nextImage() {
    index = (index + 1) % images.length;
    const translatePercentage = Math.min(index * 100, maxTranslate);
    slider.style.transform = `translateX(-${translatePercentage}%)`;
}

// Show the first image initially
nextImage();

// Auto-advance the slider every 3 seconds (adjust as needed)
setInterval(nextImage, 3000);

      

    