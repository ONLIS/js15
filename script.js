"use strict";

const DomElement = function (selector, height, width, bg, fsz, content) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fsz = fsz;
  this.content = content;
  this.createElement = function () {
    let newElm = {};
    if (this.selector[0] == "#") {
      newElm = document.createElement("p");
      newElm.id = "best";
    } else if (this.selector[0] == ".") {
      newElm = document.createElement("div");
      newElm.classList.add("block");
    }
    newElm.innerHTML = this.content;
    newElm.style.cssText =
      "position: absolute; display: flex; justify-content: center; align-items: center; border: 2px solid black; border-radius: 10px;" +
      "height: " +
      this.height +
      "px; width: " +
      this.width +
      "px; background: " +
      this.bg +
      "; font-size: " +
      this.fsz +
      "px;";
    document.body.append(newElm);
  };
};
const div = new DomElement(".block", 100, 100, "red", 20, "Квадрат");
let elmTop;
let elmLeft;
let divElm;
document.addEventListener("DOMContentLoaded", () => {
  div.createElement();
  divElm = document.querySelector(".block");
});
document.addEventListener("keydown", (event) => {
  if (event.keyCode === 40) {
    if (divElm.style.top === "") {
      elmTop = 0;
    } else {
      elmTop = parseInt(divElm.style.top);
    }
    elmTop += 10;
    divElm.style.top = elmTop + "px";
  }
  if (event.keyCode === 38) {
    if (divElm.style.top === "") {
      elmTop = 0;
    } else {
      elmTop = parseInt(divElm.style.top);
    }
    elmTop -= 10;
    elmTop = elmTop < 0 ? 0 : elmTop;
    divElm.style.top = elmTop + "px";
  }
  if (event.keyCode === 39) {
    if (divElm.style.left === "") {
      elmLeft = 0;
    } else {
      elmLeft = parseInt(divElm.style.left);
    }
    elmLeft += 10;
    divElm.style.left = elmLeft + "px";
  }
  if (event.keyCode === 37) {
    if (divElm.style.left === "") {
      elmLeft = 0;
    } else {
      elmLeft = parseInt(divElm.style.left);
    }
    elmLeft -= 10;
    elmLeft = elmLeft < 0 ? 0 : elmLeft;
    divElm.style.left = elmLeft + "px";
  }
});
