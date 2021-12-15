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
      "display: flex; justify-content: center; align-items: center; border: 2px solid black; border-radius: 10px;" +
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

const p = new DomElement(
  "#best",
  200,
  200,
  "yellow",
  20,
  "Это новый&nbsp;<b>P</b>"
);
p.createElement();

const div = new DomElement(
  ".block",
  200,
  300,
  "red",
  20,
  "Это новый&nbsp;<b>DIV</b>"
);
div.createElement();
