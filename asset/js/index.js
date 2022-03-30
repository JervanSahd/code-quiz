// First declare all elements that will be used.
// Global variables
// DOM elements by timer class
var elementTime = document.getElementById("time");

// DOM elements by wrapper class
var eleStartScreen = document.getElementById("start-screen");
var eleQuestions = document.getElementById("questions");
var eleQuestionTitle = document.getElementById("question-title");
var eleChoices = document.getElementById("choices");
var eleEndScreen = document.getElementById("end-screen");
var eleFinalScore = document.getElementById("final-score");
var eleInitials = document.getElementById("initial");


// DOM buttons
var startBtn = document.getElementById("start");
var submitBtn = document.getElementById("submit")



// Create functions based off of criteria
// function onLoad(){
//     // var getScore = document.getElementsByClassName("score");
//     // var getCountDown = document.getElementsByClassName("countDown"); 
//     // getCountDown = 
//     // var getMain = document.getElementsByClassName("main")  

// }

// Presented with a question
function startQuiz(){

  startButton.disabled = true;
  startTimer()
  }


// Answer a question then presented with another question
function answer(){
for (var i = 0; i < questions.length; i++){
  if question

}
};

// click the start button a timer starts
function startTimer(){
    // The setTimer function starts and stops the timer and triggers endTimer() and saveQuiz()
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        // Tests if win condition is met
        if (isWin && timerCount > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
          winGame();
        }
      }
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        loseGame();
      }
    }, 1000);
  
};

// Answer a question incorrectly time is subtracted from the clock
function subtractTime(){

};

// All questions are answered quiz is over
function endQuiz(){
  
}

// the timer reaches 0 the quiz is over
function endTimer(){

};

// Save initials and  score when the quiz is over
function saveQuiz(){

};

// Attach event listener to start button to call timer function on click
startBtn.addEventListener("click", timer);

// Attach event listener to start button to call saveQuiz function on click
submitBtn.addEventListener("click", saveQuiz);