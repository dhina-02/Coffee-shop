// Loader

// Show Menu
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav__toggle"),
  navClose = document.getElementById("nav__close");

// Menu show
// Validate if constant exit
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
// Menu hidden
// Validate if constant exit

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
// Remove Menu Mobile
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  //When click nav-links(ex-Home),the show-menu class will be removed
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// Change background header
function scrollHeader() {
  const header = document.getElementById('header');
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 50) header.classList.add('scroll-header');
  else header.classList.remove('scroll-header');
}
window.addEventListener('scroll',scrollHeader);
// mixitup filter products
let mixerProducts = mixitup('.products__content', {
  selectors: {
    target: '.products__card',
  },
  animation: {
    duration: 300,
  },
});
// default filter products
mixerProducts.filter('.delicacies')
// link actime products
const linkProducts = document.querySelectorAll('.products__item')

function activeProducts(){
  linkProducts.forEach(l=> l.classList.remove('active-product'))
  this.classLista.add('active-product')
}
linkProducts.forEach(l=> l.addEventListener('click',activeProducts))