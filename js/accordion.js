"use strict";
/*
  4. Практичне завдання:

  Реалізувати функціонал 'акордеону', коли ми натискаємо
  на кнопку елементу та в нас відкривається або закривається
  вміст який до цього елементу відноситься
*/

const accordionBtnEls = document.querySelectorAll(".js-accordion-btn");

accordionBtnEls.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.target.nextElementSibling.classList.toggle("closed");
  });
});

/* При натисканні клівіші з'являється текст, при відпусканні знов ховається */

// const panelEls = document.querySelectorAll(".js-panel");

// document.addEventListener("keydown", (e) => {
//   if (e.code !== "KeyQ") {
//     return;
//   }

//   panelEls.forEach((el) => {
//     el.classList.remove("closed");
//   });
// });

// document.addEventListener("keyup", (e) => {
//   console.log(e);

//   if (e.code !== "KeyQ") {
//     return;
//   }

//   panelEls.forEach((el) => {
//     el.classList.add("closed");
//   });
// });

/* для кожного дів призначена своя клавіша */

// panelEls.forEach((el, index) => {
//   document.addEventListener("keydown", (e) => {
//     if (e.code !== `Digit${index + 1}`) {
//       return;
//     }

//     el.classList.remove("closed");
//   });

//   document.addEventListener("keyup", (e) => {
//     if (e.code !== `Digit${index + 1}`) {
//       return;
//     }

//     el.classList.add("closed");
//   });
// });

// document.querySelector('[target="blank"]'); //знаходження елементу за атрибутом
