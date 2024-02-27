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
        header.style.backgroundColor = isScrollingDown ? '#000' : '#000';
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



var swiper = new Swiper(".card_slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: ".arrow-right",
        prevEl: ".arrow-left",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        224: {
            slidesPerView: 1,
          },
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        950: {
            slidesPerView: 2,
            spaceBetween: 80,
          },
        1024: {
          slidesPerView: 2,
          spaceBetween: 80,
        },
        1200: {
            slidesPerView: 3,
          },
      },
  });

  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

