// declaring variables
let storage = [];
let operation = [];
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
      operation.push("multiply");
    } else if (button.classList.contains("divide")) {
      operation.push("divide");
    } else if (button.classList.contains("add")) {
      operation.push("add");
    } else if (button.classList.contains("minus")) {
      operation.push("minus");
    } else if (button.classList.contains("equal")) {
      result(storage, operation);
    } else if (button.classList.contains("clear")) {
      storage = [];
      operation = [];
      answer = 0;
      screen.innerText = 0;
    } else if (button.classList.contains("back")) {
      storage.splice(-1);
      screen.innerText = 0;
    }
  });
});

function result(storage, operation) {
  console.log("START");
  console.log(storage);
  console.log(operation);
  answer = parseFloat(storage[0]);
  storage.splice(0, 1);
  // loop thru operations, take answer and first number and perform first operation, remove number and operation
  while (operation[0]) {
    if (operation[0] === "multiply") {
      answer = answer * parseFloat(storage[0]);
    } else if (operation[0] === "divide") {
      answer = answer / parseFloat(storage[0]);
    } else if (operation[0] === "add") {
      answer = answer + parseFloat(storage[0]);
    } else if (operation[0] === "minus") {
      answer = answer - parseFloat(storage[0]);
    }

    operation.splice(0, 1);
    storage.splice(0, 1);
    screen.innerText = answer;
  }

  // this would be after all operations are complete
  storage.push(answer);
}
