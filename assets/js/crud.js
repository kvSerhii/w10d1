"use strict";

//READ
const body = document.querySelector("body");

//CREATE
const container = document.createElement("div");

//UPDATE
// body.replaceChild(new, old); //Ex
body.appendChild(container);
body.append(container, document.createElement("p"));
// container.insertBefore(document.createElement("a"));
body.prepend(container);

//DELETE
container.remove(); // same
// body.removeChild(container); // same

//create table
const arr = new Array();
let len = document.links.length;
console.log(len);
for (let i = 0; i < len; i++) {
  arr[i] = document.links[i];
}
// console.log(arr);
const table = document.createElement("table");

let myHead = table.createTHead("Table head");
let newRow = table.insertRow(0);
let newCell = newRow.insertCell(0);

body.prepend(table);
