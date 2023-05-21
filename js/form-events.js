"use strict";
/*
  2. Події елементів форм: focus, blur, change, input, submit

  Об'єкт події

  Реалізувати функціонал додавання та прибирання кастомного 
  outline у інпуту імені

  Реалізувати функціонал виведення введено ім'я у елемент span

  Реалізувати функціонал за яким кнопка сабміту стане 
  активною коли введене ім'я та вибраний checkbox

  Реалізувати функціонал при сабміті за яким у консоль 
  виводиться введене ім'я користувача, очищається форма та
  не перезавантажується сторінка - preventDefault
*/

const formEl = document.querySelector(".js-contact-form");
const formInputEl = document.querySelector(".js-username-input");
const formCheckboxEl = document.querySelector(".js-policy-checkbox");
const userNameOutputEl = document.querySelector(".js-username-output");
const formSubmitBtnEl = document.querySelector(".js-contact-form-submit");

formInputEl.addEventListener("focus", (e) => {
  //e - це event, обєкт події
  e.target.style.outline = "10px solid red"; //target - це властивість яка посилається на елемент що спричинив цю подію
});

formInputEl.addEventListener("blur", (e) => {
  // подія blur протилежна до focus, тобто вона спрацьовує коли ми виходимо з нашого елементу
  e.target.style.outline = "none";
});

formInputEl.addEventListener("input", (e) => {
  // userNameOutputEl.textContent = e.target.value;
  userNameOutputEl.innerText =
    e.target.value.length !== 0 ? `, ${e.target.value},` : ""; //додаємо коми
});

formCheckboxEl.addEventListener("change", (e) => {
  if (formInputEl.value !== "" && e.target.checked) {
    formSubmitBtnEl.disabled = false; //без лапок

    return;
  }

  formSubmitBtnEl.disabled = true;
});

formEl.addEventListener("submit", (e) => {
  e.preventDefault(); //скидаємо налаштування браузера за замовчуванням

  console.log(formInputEl.value);

  e.target.reset(); //очищення форми (очищення усіх полів)

  formSubmitBtnEl.disabled = true; //неактивна кнопка

  userNameOutputEl.textContent = "";
});
