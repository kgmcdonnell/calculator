let storage = 0;
let screen = document.querySelector(".calc-screen");

const buttons = document.querySelectorAll(".btn-number");

buttons.forEach((button) => {
  button.addEventListener("click", function (event) {
    screen.innerText = button.innerText;
    storage = screen.innerText;
    console.log(storage);
  });
});
