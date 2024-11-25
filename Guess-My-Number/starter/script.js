'use strict';

//      Program Variables
let randomNumber = Math.ceil(Math.random()*20);
let maskedBoxedValue = document.querySelector(".number").textContent;
let directionMessage = document.querySelector(".message").textContent;
let inputField = document.querySelector("input");
let userInputValue = Number.parseInt(document.querySelector(".guess").value);
let validationBtn = document.querySelector(".check");
let restartBtn = document.querySelector(".again");
let highScoreText = document.querySelector("span.highscore").textContent;
let scoreText = document.querySelector(".score").textContent;







// Function to compare the random variable with the users quess
function compareActualValueWithGuess(){
  console.log(userInputValue);
  console.log(randomNumber);

    if(randomNumber !== userInputValue){

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


// EventListeners for the program
validationBtn.addEventListener("click", compareActualValueWithGuess);
inputField.addEventListener('change', changeInputValue);





function gameLogic(guessIsCorrect){

  scoreText = document.querySelector('.score').textContent;

   // Logic for an incorrect quess

   if(guessIsCorrect === false && Number.parseInt(document.querySelector('.score').textContent)>=0){

     // Subracts 1 from the score until it gets to 0

     document.querySelector(".score").innerText = Number.parseInt(scoreText)-1;

     // Message Changes to GAME OVER

     if(Number.parseInt(document.querySelector('.score').textContent) === 0){

       document.querySelector('.message').innerText = "GAME OVER!"

     }

   }

   if(guessIsCorrect === true){


     //   check to see if user has a high score

     document.querySelector(".number").innerText = document.querySelector('input').value;
     document.querySelector(".message").innerText = "You Guesed the Correct Number! 🥳 🎉"





   }


}



// PsuedoCode
// user Enters value
// value is compared to the random value
// if value is correct game ends and Score is checked to see if its the new high score
// if value is wrong point are removed from users score
// user can restart game
