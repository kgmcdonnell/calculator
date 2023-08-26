// declaring variables
let storage = [];
let operation = [];
let answer;
let screen = document.querySelector(".calc-screen");

// adding an event listener for each numbered button
const numberedButtons = document.querySelectorAll(".btn");
numberedButtons.forEach((button) => {
  button.addEventListener("click", function (event) {
    screen.innerText = button.innerText;
    if (button.classList.contains("btn-number")) {
      if (isNaN(parseInt(storage[storage.length - 1])) === false) {
        storage[storage.length - 1] = storage[storage.length - 1] + screen.innerText;
      } else {
        storage.push(screen.innerText);
      }
    } else if (
      button.classList.contains("btn-operation") &&
      !button.classList.contains("equal") &&
      !button.classList.contains("btn-operation-gray")
    ) {
      storage.push(screen.innerText);
    } else if (button.classList.contains("equal")) {
      separateOperations(storage);
      result(storage, operation);
    } else if (button.classList.contains("clear")) {
      console.log("this is my clear");
      storage = [];
      operation = [];
      answer = 0;
    } else if (button.classList.contains("back")) {
      console.log("this is my back button");
      storage.splice(-1);
    }
    if (storage.length > 0) {
      screen.innerText = storage[storage.length - 1];
    } else {
      screen.innerText = 0;
    }
  });
});

function separateOperations(storage) {
  for (let i = 0; i < storage.length; i++) {
    if (isNaN(storage[i])) {
      operation.push(storage[i]);
      storage.splice(i, 1);
      i--;
    }
  }
  return operation;
}

function result(storage, operation) {
  answer = parseFloat(storage[0]);
  // Remove storage value after assigned to answer
  storage.splice(0, 1);
  // If an operation exists, perform first operation on answer and first number in storage
  while (operation[0]) {
    if (operation[0] === "×") {
      answer = answer * parseFloat(storage[0]);
    } else if (operation[0] === "÷") {
      answer = answer / parseFloat(storage[0]);
    } else if (operation[0] === "+") {
      answer = answer + parseFloat(storage[0]);
    } else if (operation[0] === "−") {
      answer = answer - parseFloat(storage[0]);
    }
    // remove first operation from array
    operation.splice(0, 1);
    // remove first number from storage array
    storage.splice(0, 1);
  }
  // Save the answer in storage
  storage.push(answer);
  screen.innerText = answer;
}
