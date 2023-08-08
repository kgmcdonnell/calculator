// declaring variables
let storage = [];
let operation;
let answer;
let screen = document.querySelector(".calc-screen");

// adding an event listener for each numbered button
const numberedButtons = document.querySelectorAll(".btn-number");
numberedButtons.forEach((button) => {
  button.addEventListener("click", function (event) {
    screen.innerText = button.innerText;
    storage.push(screen.innerText);
  });
});

// adding an event listener for each operation button and storing operation into a variable
const operationButtons = document.querySelectorAll(".btn-operation");
operationButtons.forEach((button) => {
  button.addEventListener("click", function (event) {
    if (button.classList.contains("multiply")) {
      operation = "multiply";
    } else if (button.classList.contains("divide")) {
      operation = "divide";
    } else if (button.classList.contains("add")) {
      operation = "add";
    } else if (button.classList.contains("minus")) {
      operation = "minus";
    } else if (button.classList.contains("equal")) {
      result(storage, operation);
    } else if (button.classList.contains("clear")) {
      storage = [];
      answer = 0;
      screen.innerText = 0;
    } else if (button.classList.contains("back")) {
      storage.splice(-1);
      screen.innerText = 0;
    }
  });
});

function result(storage, operation) {
  console.log("this is my result function");
  console.log(storage);
  console.log(operation);
  if (operation === "multiply") {
    for (let i = 0; i < storage.length; i++) {
      if (i === 0) {
        answer = storage[i];
      } else {
        answer = answer * storage[i];
      }
    }
  } else if (operation === "divide") {
    for (let i = 0; i < storage.length; i++) {
      if (i === 0) {
        answer = storage[i];
      } else {
        answer = answer / storage[i];
      }
    }
  } else if (operation === "add") {
    for (let i = 0; i < storage.length; i++) {
      if (i === 0) {
        answer = parseInt(storage[i]);
      } else {
        answer = answer + parseInt(storage[i]);
      }
    }
  } else if (operation === "minus") {
    for (let i = 0; i < storage[i]; i++) {
      console.log(i);
      if (i === 0) {
        answer = parseInt(storage[i]);
      } else {
        answer = answer - parseInt(storage[i]);
      }
    }
  }
  console.log(answer);
  screen.innerText = answer;
}
