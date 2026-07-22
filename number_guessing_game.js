let Guess = document.getElementById("guess");
let Click = document.getElementById("check-btn");
let Result = document.getElementById("result");

let secretNumber = Math.floor(Math.random() * 100) + 1;
Click.addEventListener("click", function () {
  if (Guess.value > secretNumber) {
    Result.innerHTML = "High Try Again..";
  } else if (Guess.value == secretNumber) {
    Result.innerHTML = "You Got it";
  } else if (Guess.value < secretNumber) {
    Result.innerHTML = "Less Try Again..";
  }
});
