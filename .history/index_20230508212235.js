const currValue = document.getElementById("curr");
const prevValue = document.getElementById("prev");
const operatorBtn = document.querySelectorAll(".operator");
const numBtn = document.querySelectorAll(".num");
const dotBtn = document.querySelector(".dot");
const zeroBtn = document.querySelector(".zero");
const clearBtn = document.querySelector(".clear");
const delBtn = document.querySelector(".del");
const equalBtn = document.querySelector(".equalTo");

let curr = "";
let prev = "";
let operator = "";

const output = () => {
    currValue.innerText = curr;
    prevValue.innerText = prev;
}

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
      output();
    });
  })
}

operation();

const buttons = () => {
  numBtn.forEach((num) => {
    num.addEventListener("click", () => {
      if (num.classList.contains("dot")) {
        if (curr.includes(".")) return;
        curr += num.innerText;
      } else if (num.classList.contains("zero")) {
        if (curr === "") return;
        curr += num.innerText;
      } else {
        curr += num.innerText;
      }
      output();
    });
  });
};

buttons();

const clear = () => {
  clearBtn.addEventListener("click", () => {
    curr = "";
    prev = "";
    operator = "";
    output();
  });
}

clear();

const del = () => {
  delBtn.addEventListener("click", () => {
    curr = curr.slice(0, -1);
    output();
  });
}

del();

const equal = () => {
  equalBtn.addEventListener("click", () => {
    if (curr === "" || prev === "") return;
    curr = eval(`${prev} ${operator} ${curr}`);
    prev = "";
    operator = "";
    output();
  });
}

equal();


