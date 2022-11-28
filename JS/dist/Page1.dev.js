"use strict";

var menu = document.querySelector('.navbar-toggler');
var navbar = document.querySelector('.navbar .collapse');
var header = document.querySelector('.navbar');

menu.onclick = function () {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
};

window.onscroll = function () {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if (window.scrollY > 0) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
};

var fixedNav = document.querySelector(".navbar"),
    scrollBtn = document.querySelector(".scrollBtn");
window.addEventListener("scroll", function () {
  scrollup();
});
scrollBtn.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
scrollup();

function scrollup() {
  window.scrollY > 50 ? fixedNav.classList.add('active') : fixedNav.classList.remove('active');
  window.scrollY > 100 ? scrollBtn.classList.add('active') : scrollBtn.classList.remove('active');
}

var exploreBtn = document.querySelector('.title .btn'),
    BoxSection = document.querySelector('.box');
exploreBtn.addEventListener('click', function () {
  BoxSection.scrollIntoView({
    behavior: "smooth"
  });
});
var exploreBtn2 = document.querySelector('.btn2 .fas'),
    HeaderSection = document.querySelector('.header');
exploreBtn2.addEventListener('click', function () {
  HeaderSection.scrollIntoView({
    behavior: "smooth"
  });
});
//# sourceMappingURL=Page1.dev.js.map
