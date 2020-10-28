var buttonStart = document.getElementById("start-game");
var timeLeft = document.getElementById("time-left");
var questionSection = document.getElementById("question-block");
var introBlock = document.getElementById("intro-block");

var totalSeconds = 120;
var secondPerMinute = 59;
var currentQuestion = 0;


// GIVEN I am taking a code quiz
// WHEN I click the start button

//this event has to fire the time interverval and send me to the question
// THEN a timer starts and I am presented with a question
//I need to store time to jSON so all the pages can access the time 
function startGame(e){
    e.preventDefault();
    clearInterval(interval);
    var interval = setInterval(Timer, 1000);
    introBlock.style.display = "none";
    questionSection.style.display = "block"; 
    
}

function Timer(){
    
    var secondsLeft = totalSeconds --;
    var totalMinutes = Math.floor(secondsLeft/ 60);
    //to display minutes and seconds I need to acces inner text on time-left
    //console.log(totalMinutes, secondsLeft);

    if(secondPerMinute  < 0){
        secondPerMinute = 59;
    }
    else if(totalMinutes == 2){
        totalMinutes = 1;
    }

    timeLeft.textContent = totalMinutes + ":" + secondPerMinute;
    secondPerMinute --;

}




// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score



//event LIStener 
buttonStart.addEventListener("click",startGame);