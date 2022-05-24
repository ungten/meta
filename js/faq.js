var menuBtn = document.querySelector('.que__button');
var menuBtnSecond = document.querySelector('.que__button2');
var menuBtnThird = document.querySelector('.que__button3');
var menuBtnActive = document.querySelector(".que__button--active")
var colAns = document.querySelector(".column__ans")
var colAnsSecond = document.querySelector(".column__ans2")
var colAnsThird = document.querySelector(".column__ans3")



menuBtn.addEventListener("click", function () {
   menuBtn.classList.toggle("que__button--active")
   colAns.classList.toggle("column__ans--active")
})

menuBtnSecond.addEventListener("click", function () {
   menuBtnSecond.classList.toggle("que__button--active")
   colAnsSecond.classList.toggle("column__ans--active")
})

menuBtnThird.addEventListener("click", function () {
   menuBtnThird.classList.toggle("que__button--active")
   colAnsThird.classList.toggle("column__ans--active")
})
