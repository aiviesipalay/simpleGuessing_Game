// Generate a random number between 1 and 6
const randomNumber = Math.floor(Math.random() * 6) + 1;
const scoreInput = document.getElementById("score");

let score = 0;

function guessNum() {
  const guessInput = document.getElementById("guess");
  const guess = guessInput.value.trim();

  if (isNaN(guess) || guess < 1 || guess > 6) {
    alert("Please enter a valid number between 1 and 6.");
    return;
    guessInput.value = invalidInput.trim();
    return guessNum();
  
  }
  // Check if the guess is correct
  if (guess === randomNumber) {
    alert("You Win!");
    score++;
  } else {
    alert("You Lose!");
  }
  scoreInput.value = score;

  const continuePlaying = confirm("Do you want to continue playing?");
  if (!continuePlaying) {
    alert(`Game over. Your final score is ${score}.`);
    score = 0;
    guessInput.value = '';
    scoreInput.value = 0;
  } else {
    guessInput.value = '';
  }
}
