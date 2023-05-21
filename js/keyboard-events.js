"use strict";
/*
  3. Події клавіатури: keydown, keyup
*/

const outputEl = document.querySelector(".js-output");

const handleKeysUp = (event) => {
  console.log(event);
  outputEl.insertAdjacentHTML(
    "beforeend",
    `code: ${event.code} <br> key: ${event.key} <br> <hr>`
  );
};

// outputEl.addEventListener("keydown", (e) => { // неправльно, події keydown, keyup вішаємо на document
//   console.log("e.target");
// });

document.addEventListener("keydown", handleKeysUp);

// document.addEventListener("keyup", (e) => {
//   console.log(e.target);
// });
