"use strict";

const list = document.getElementById("list");
const item = document.getElementById("item");
const div = document.getElementById("div");
const input = document.getElementById("input");

// console.log(input);
// console.dir(list.id);
// console.dir(input);

const handler = (event) => {
  console.log(event.currentTarget.tagName);
  const {
    target: { tagName, id },
    target,
  } = event;
  //   const inpt = document.getElementById("input");

  console.log(target.id);
  switch (target /* switch(tagName) */) {
    case div:
      input.value = "tagName";
      break;
    case "LI":
      input.value = "tagName";
      break;
    case "UL":
      input.value = "tagName";
      break;
    default:
      break;
  }
};

const anotherLi = document.getElementById("anotherItem");

console.dir(anotherLi.dataset); // обращение к кастомному свойству data-text-color

// const listHandler = (event) => {
//   console.log(event.target.tagName, "target");
// };

list.addEventListener(
  "click",
  handler,
  { capture: true }
  //   ("click", listHandler, { capture: true })
);
// capture:true - погружение
item.addEventListener("click", handler, true);
div.addEventListener("click", handler, true);
list.addEventListener("click", handler, true);

list.addEventListener("click", (event) => {
  console.log(event.target.tagName);
});

document.getElementById("counter").addEventListener("click", (event) => {
  const {
    ctrlKey,
    shiftKey,
    target: { textContent },
    target,
  } = event;

  if (shiftKey) {
    target.textContent = 0;
    return;
  }

  if (ctrlKey) {
    if (Number(target.textContent) > 0) {
      target.textContent = Number(target.textContent) - 1;
    }
    return;
  }
  target.textContent = Number(target.textContent) + 1;
});
