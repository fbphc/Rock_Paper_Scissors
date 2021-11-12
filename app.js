function getInputValue() {
  let namePlayer = document.getElementById("input").value;
  let field = input.value;
  const form = document.getElementById("form");

  if (field.length < 1) {
    document.getElementById("name").innerHTML = "???";
  } else {
    document.getElementById("name").innerHTML = namePlayer;
  }
  document.getElementById("form").reset();
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  getInputValue();
  document.getElementById("form").reset();
});

const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const possibleChoices = document.querySelectorAll("div.buttons > button");
let userChoice;
let computerChoice;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;

    setTimeout(() => {
      if (possibleChoice === document.getElementById("Rock")) {
        document.getElementById("imgRock").style.visibility = "visible";
        document.getElementById("imgPaper").style.visibility = "hidden";
        document.getElementById("imgScissors").style.visibility = "hidden";
      }

      if (possibleChoice === document.getElementById("Paper")) {
        document.getElementById("imgRock").style.visibility = "hidden";
        document.getElementById("imgPaper").style.visibility = "visible";
        document.getElementById("imgScissors").style.visibility = "hidden";
      }

      if (possibleChoice === document.getElementById("Scissors")) {
        document.getElementById("imgRock").style.visibility = "hidden";
        document.getElementById("imgPaper").style.visibility = "hidden";
        document.getElementById("imgScissors").style.visibility = "visible";
      }

      userChoiceDisplay.innerHTML = userChoice;
    }, 750);

    /* function startCountdown() { */
    let seconds = 4;
    ola();
    let x = setInterval(ola, 250);
    function ola() {
      if (seconds < 2) {
        clearInterval(x);
        document.getElementById("vs").innerHTML = "FIGHT";
      } else if (seconds > 1) {
        seconds--;
        document.getElementById("vs").innerHTML = seconds;
      }
    }
    getResult();
  })
);

const rockOutFunction = "Rock";
const paperOutFunction = "Paper";
const scissorsOutFunction = "Scissors";

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    computerChoice = rockOutFunction;
    setTimeout(() => {
      document.getElementById("imgPcRock").style.visibility = "visible";
      document.getElementById("imgPcPaper").style.visibility = "hidden";
      document.getElementById("imgPcScissors").style.visibility = "hidden";
    }, 750);
  }
  if (randomNumber === 2) {
    computerChoice = paperOutFunction;
    setTimeout(() => {
      document.getElementById("imgPcRock").style.visibility = "hidden";
      document.getElementById("imgPcPaper").style.visibility = "visible";
      document.getElementById("imgPcScissors").style.visibility = "hidden";
    }, 750);
  }
  if (randomNumber === 3) {
    computerChoice = scissorsOutFunction;
    setTimeout(() => {
      document.getElementById("imgPcRock").style.visibility = "hidden";
      document.getElementById("imgPcPaper").style.visibility = "hidden";
      document.getElementById("imgPcScissors").style.visibility = "visible";
    }, 750);
  }

  setTimeout(() => {
    computerChoiceDisplay.innerHTML = computerChoice;
  }, 750);
}

const resultDisplay = document.getElementById("result");
let result;

function getResult() {
  if (computerChoice === userChoice) {
    result = "TIE!";
  }
  if (computerChoice === "Rock" && userChoice === "Paper") {
    result = "you win!";
  }
  if (computerChoice === "Rock" && userChoice === "Scissors") {
    result = "you lose!";
  }
  if (computerChoice === "Paper" && userChoice === "Scissors") {
    result = "you win!";
  }
  if (computerChoice === "Paper" && userChoice === "Rock") {
    result = "you lose!";
  }
  if (computerChoice === "Scissors" && userChoice === "Rock") {
    result = "you win!";
  }
  if (computerChoice === "Scissors" && userChoice === "Paper") {
    result = "you lose!";
  }
  setTimeout(() => {
    resultDisplay.innerHTML = result;
  }, 750);
  scoreUser();
}

let incrementUserScore = 0;
let incrementComputerScore = 0;

function scoreUser() {
  if (result === "you win!") {
    incrementUserScore++;
  } else if (result === "you lose!") {
    incrementComputerScore++;
  } else {
    console.log("suka");
  }
  setTimeout(() => {
    document.getElementById("userScore").innerHTML = incrementUserScore;
    document.getElementById("computerScore").innerHTML = incrementComputerScore;
    console.log(
      "incrementUserScore",
      incrementUserScore,
      incrementComputerScore
    );
  }, 750);
}

// DISABLE BUTTONS //

function submitPoll1() {
  document.getElementById("Rock").disabled = true;
  setTimeout(function () {
    document.getElementById("Rock").disabled = false;
  }, 1000);
}
document.getElementById("Rock").addEventListener("click", submitPoll1);

function submitPoll2() {
  document.getElementById("Paper").disabled = true;
  setTimeout(function () {
    document.getElementById("Paper").disabled = false;
  }, 1000);
}
document.getElementById("Paper").addEventListener("click", submitPoll2);

function submitPoll3() {
  document.getElementById("Scissors").disabled = true;
  setTimeout(function () {
    document.getElementById("Scissors").disabled = false;
  }, 1000);
}
document.getElementById("Scissors").addEventListener("click", submitPoll3);
