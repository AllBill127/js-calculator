const currValue = document.getElementById("curr");
const prevValue = document.getElementById("prev");
const operatorBtn = document.querySelectorAll(".operator");
const numBtn = document.querySelectorAll(".num");
const clearBtn = document.querySelector(".clear");
const delBtn = document.querySelector(".del");
const equalBtn = document.querySelector(".equalTo");

let curr = "0";
let prev = "0";
let operator = "";

const display = () => {
  currValue.innerText = curr;
  prevValue.innerText = prev;
};

display();

const operation = () => {
  operatorBtn.forEach((operator) => {
    operator.addEventListener("click", () => {
      if (curr === "") return;
      if (prev !== "") {
        prev = curr;
      } else {
        prev = curr;
      }
      curr = operator.innerText;
      prev = curr;
      curr = "";
      display();
    });
  });
};

operation();

const buttons = () => {
  numBtn.forEach((num) => {
    num.addEventListener("click", () => {
      if (num.classList.contains("dot")) {
        if (curr.includes(".") || curr === "") {
          return;
        } else {
          curr += num.innerText;
        }
      } else if (num.classList.contains("zero")) {
        if (curr === "") return;
        curr += num.innerText;
      } else {
        curr += num.innerText;
      }
      display();
    });
  });
};

buttons();

const clear = () => {
  clearBtn.addEventListener("click", () => {
    curr = "";
    prev = "";
    operator = "";
    display();
  });
};

clear();

const del = () => {
  delBtn.addEventListener("click", () => {
    curr = curr.slice(0, -1);
    display();
  });
};

del();
