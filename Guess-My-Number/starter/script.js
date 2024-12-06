'use strict';

//      Program Variables
let randomNumber = Math.ceil(Math.random()*20);

let inputField = document.querySelector("input");
let userInputValue = Number.parseInt(document.querySelector(".guess").value);
let validationBtn = document.querySelector(".check");
let restartBtn = document.querySelector(".again");
let scoreText = document.querySelector(".score").textContent;
let highScore = sessionStorage.getItem("highScore");


// Starting Baseline Logic for HighScore
if(highScore === null){

  document.querySelector('.highscore').innerText = 0;

  sessionStorage.setItem("highScore","0");

  highScore = sessionStorage.getItem("highScore");

}else{
  document.querySelector('.highscore').innerText = highScore;
}


// EventListeners for the program
validationBtn.addEventListener("click", compareActualValueWithGuess);
inputField.addEventListener('change', changeInputValue);
restartBtn.addEventListener("click", playAgain);


// Function to compare the random variable with the users quess
function compareActualValueWithGuess(){

    if(randomNumber !== userInputValue){

      if(userInputValue >randomNumber){
        document.querySelector('.message').innerText = " Too High! 📈"
      }else{
        document.querySelector('.message').innerText = " Too Low! 📉"
      }

      gameLogic(false);

    }else{

      gameLogic(true);
    }
}


// function is used to change the value of the userInputValue variable to the entered value once
// the input field has been updated
function changeInputValue(){

  userInputValue = Number.parseInt(document.querySelector('.guess').value);

}


function checkForHighScore(){

    let userScore = Number.parseInt(document.querySelector(".score").textContent);

    if(userScore > Number.parseInt(highScore)){

      sessionStorage.setItem("highScore", userScore.toString());
      document.querySelector(".highscore").innerText =  userScore;

    }

  }


  function playAgain(){

  randomNumber = Math.ceil(Math.random()*20);
  document.querySelector(".number").innerText = "?"
  document.querySelector(".score").innerText = 20;
  document.querySelector("input").value = "";
  document.querySelector(".message").innerText = "Start guessing..."
  document.querySelector(".highscore").innerText = sessionStorage.getItem("highScore");

  }



function gameLogic(guessIsCorrect){

  scoreText = document.querySelector('.score').textContent;

   // Logic for an incorrect quess

   if(guessIsCorrect === false && Number.parseInt(document.querySelector('.score').textContent)>=0){

     // Subracts 1 from the score until it gets to 0

     document.querySelector(".score").innerText = Number.parseInt(scoreText)-1;

     // Message Changes to GAME OVER

     if(Number.parseInt(document.querySelector('.score').textContent) === 0){

       document.querySelector('.message').innerText = "GAME OVER!";

     }

   }

   if(guessIsCorrect === true){

     //   check to see if user has a high score
     checkForHighScore();
     document.querySelector(".number").innerText = document.querySelector('input').value;
     document.querySelector(".message").innerText = "You Guesed the Correct Number! 🥳 🎉";

   }

}


// PsuedoCode
// user Enters value
// value is compared to the random value
// if value is correct game ends and Score is checked to see if its the new high score
// if value is wrong point are removed from users score
// user can restart game
