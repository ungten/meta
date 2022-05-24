let mobileMenuBtn = document.querySelector('.menu-btn');
let MenuMob = document.querySelector(".header__mobile-menu")

mobileMenuBtn.addEventListener('click', function () {
   mobileMenuBtn.classList.toggle("menu-btn--active");
   MenuMob.classList.toggle("header__mobile-menu--active");
})
