document.querySelector("#firstGuess").setAttribute("disabled", "disabled");
let msgElement = document.querySelector(".messaging");

// Set an initial variable for keeping count of the guess attempts
let attempts = 0;
let GUESSED_WORD;
let FIRST_GUESS;
let getMaxNum;

// If the setMax button is clicked...
document.querySelector("#setMax").addEventListener("click", function () {
  // Get the maximum number input from user
  getMaxNum = document.querySelector("#maxNum").value;
  //
  if (getMaxNum && getMaxNum >= 5) {
    // The number the user is suppose to guess, it uses the maxNum as its upper bound
    GUESSED_WORD = Math.trunc(Math.random() * getMaxNum) + 1;
    console.log(GUESSED_WORD);

    document.querySelector("#firstGuess").setAttribute("max", getMaxNum);
    document.querySelector("#maxNum").setAttribute("disabled", "disabled");
    document.querySelector("#setMax").setAttribute("disabled", "disabled");
    document.querySelector("#firstGuess").removeAttribute("disabled");
    msgElement.textContent = "Start Guessing...";
    // Displays message to the user if no number was inputed...
  } else {
    msgElement.textContent = `Ooops, a value is required to start playing the Game... 
      The Maximum value must be at least 5 and above`;
  }
});

// Get the value of the first Guess from the user
document.querySelector("#try").addEventListener("click", function () {
  FIRST_GUESS = parseInt(document.querySelector("#firstGuess").value);

  if (FIRST_GUESS) {
    // Checks if user input guess is greater than the random Guessed Number
    if (FIRST_GUESS <= getMaxNum) {
      // Compare the randomly generated guessed word against your guess number
      if (FIRST_GUESS !== GUESSED_WORD) {
        if (FIRST_GUESS < GUESSED_WORD) {
          msgElement.textContent = "Too Low 📉, Try Again";
          attempts++;
        } else if (FIRST_GUESS > GUESSED_WORD) {
          msgElement.textContent = "Too High 📈, Try Again";
          attempts++;
        }
      } else if (FIRST_GUESS === GUESSED_WORD) {
        attempts++;
        msgElement.textContent = "CONGRATULATIONS 🎉🎈 YOU WON 🥇";
        document.querySelector(".number").textContent = GUESSED_WORD;
        document.querySelector(".number").style.backgroundColor = "green";
        document.querySelector(".number").style.color = "white";
        document.querySelector(".container").style.backgroundColor = "#462729";
        document.querySelector(
          ".attempts"
        ).textContent = `After ${attempts} attempt${attempts > 1 ? "s" : ""}`;
        document
          .querySelector("#firstGuess")
          .setAttribute("disabled", "disabled");
        document.querySelector("#maxNum").setAttribute("disabled", "disabled");
        document.querySelector("#try").setAttribute("disabled", "disabled");
      }
    } else {
      msgElement.textContent = `Your guess cannot be greater than the max Number (${getMaxNum}) set`;
    }
  } else {
    msgElement.textContent = "YOU HAVE TO GUESS! 😁";
  }
});

// RESTART BUTTON - EVENT HANDLER
document.querySelector(".again").addEventListener("click", function () {
  location.reload();
});
document.querySelector(".quit").addEventListener("click", function () {
  location.reload();
});
