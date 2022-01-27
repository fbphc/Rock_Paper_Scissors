/* TEMPORANEO
function playerChoice (){}


 document.getElementById("userScore").innerHTML = incrementUserScore;
    document.getElementById("computerScore").innerHTML = incrementComputerScore;
*/

function getInputValue() {
  let namePlayer = document.getElementById("input").value;
  let field = input.value;
  const form = document.getElementById("form");

  if (field.length < 1) {
    document.getElementById("name").innerHTML = "???";
  } else {
    document.getElementById("name").innerHTML = namePlayer;
  }
  localStorage.setItem("user", namePlayer || "???");
  document.getElementById("form").reset();
}

window.onload = function(){
  if(localStorage.getItem("user")){
    document.getElementById("name").innerHTML = localStorage.getItem("user");
  }
  if(localStorage.getItem("userScore")){
    document.getElementById("userScore").innerHTML = localStorage.getItem("userScore");
  }
  if(localStorage.getItem("computerScore")){
    document.getElementById("computerScore").innerHTML = localStorage.getItem("computerScore");
  }
}


form.addEventListener("submit", function (event) {
  event.preventDefault();
  getInputValue();
  document.getElementById("form").reset();
});

const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const possibleChoices = document.querySelectorAll("div.buttons > button");
const userSelections = document.querySelectorAll(".imgGame img");
const computerSelections = document.querySelectorAll(".imgPcGame img");
const choices = ["Rock", "Paper", "Scissors"];
let userChoice;
let computerChoice;
const resetButton = document.getElementById("resetBtn");

resetButton.onclick = function(){
  localStorage.clear();
  location.reload();
}

function resetChoices(imgArray, display) {
  /* INI. COND. STEP */
  for (let i = 0; i < imgArray.length; i++) {
    imgArray[i].style.visibility = "hidden";
  }
  display.innerHTML = "";
}

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    disable(possibleChoices);
    setTimeout(() => {
      resetChoices(userSelections, userChoiceDisplay);
      userSelections[choices.indexOf(e.target.id)].style.visibility = "visible";
      userChoiceDisplay.innerHTML = userChoice;
      enable(possibleChoices);
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

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  computerChoice = choices[randomNumber];
  resetChoices(computerSelections, computerChoiceDisplay);
  setTimeout(() => {
    computerSelections[randomNumber].style.visibility = "visible";
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
    localStorage.setItem("userScore", incrementUserScore);
  } else if (result === "you lose!") {
    incrementComputerScore++;
    localStorage.setItem("computerScore", incrementComputerScore);
  } 
  setTimeout(() => {
    document.getElementById("userScore").innerHTML = incrementUserScore;
    document.getElementById("computerScore").innerHTML = incrementComputerScore;
  }, 750);
}

// DISABLE BUTTONS //

function enable(buttons) {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = false;
  }
}

function disable(buttons) {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
  }
}

