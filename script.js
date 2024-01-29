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
