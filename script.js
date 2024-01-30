/* Show Menu */

const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close')

if(navToggle){
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

if(navClose){
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}


//when we click on each link - remove show-menu

const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


//Change background header

const scrollHeader = () => {
  const header = document.getElementById('header');

  this.scrollY >=50 ? header.classList.add('bg-header') : header.classList.remove('bg-header')

 
}

window.addEventListener('scroll', scrollHeader)

//Swiper JS

const popularSwiper = new Swiper('.popular__content', {
  slidesPerView:'auto',
  centeredSlides:true,
  loop: true,


  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints:{
    768:{
      centeredSlides:false,
    }
  }

});


//FAQ

document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".choose__faq-item");

  faqItems.forEach((item) => {
    const header = item.querySelector(".choose__faq-header");
    const content = item.querySelector(".choose__faq-content");
    const icon = header.querySelector(".choose__faq-icon");

    header.addEventListener("click", function () {
      content.classList.toggle("active");
      icon.classList.toggle("open");


      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.querySelector(".choose__faq-content").classList.remove("active");
          otherItem.querySelector(".choose__faq-icon").classList.remove("open");
        }
      });
    });
  });
});


//Show scroll up

const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up');
  this.scrollY >=350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')

}

window.addEventListener('scroll', scrollUp)


//Scroll sections - Active link
document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('section[id]');

  const scrollActive = () => {
    const scrollY = window.scrollY;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

      if (sectionClass) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          sectionClass.classList.add('active-link');
        } else {
          sectionClass.classList.remove('active-link');
        }
      }
    });
  };

  window.addEventListener('scroll', scrollActive);
});


//Dark Light Theme


const themeButton = document.getElementById('theme-button');

const darkTheme = 'dark-theme';
const iconTheme = 'fa-regular';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-regular fa-moon' : 'fa-regular fa-sun';


if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
}

if (selectedIcon) {
  themeButton.classList[selectedIcon === 'fa-regular fa-moon' ? 'add' : 'remove'](iconTheme);
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle('fa-moon');
  themeButton.classList.toggle('fa-sun');

  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});