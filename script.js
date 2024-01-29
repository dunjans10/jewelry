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