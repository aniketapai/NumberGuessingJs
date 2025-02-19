const num = Math.floor(Math.random() * 100) + 1;
let tries = 5;

document.getElementById("submit").onclick = function () {
  let guess = parseInt(document.getElementById("guess").value);
  let msg = document.getElementById("hint");
  let count = document.getElementById("attempts");

  if (guess < 1 || guess > 100 || isNaN(guess)) {
    msg.textContent = "Pick a number between 1 and 100";
    return;
  }

  tries--;
  count.textContent = "Attempts: " + tries;

  if (guess === num) {
    msg.textContent = "You got it! The number was " + num;
    document.getElementById("submit").disabled = true;
  } else {
    msg.textContent = guess < num ? "Too low" : "Too high";
  }

  if (tries === 0 && guess !== num) {
    alert("You lost! The number was " + num);
    document.getElementById("submit").disabled = true;
  }
};
