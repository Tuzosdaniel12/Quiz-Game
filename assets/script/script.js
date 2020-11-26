var buttonStart = document.getElementById("start-game");
var timeLeft = document.getElementById("time-left");
var introBlock = document.getElementById("intro-block");
var questionSection = document.getElementById("question-block");
var answers = document.getElementById("answers");
var questionEl = document.getElementById("question");
var correctOrWrongEl = document.getElementById("correctOrWrongAnswer");


var scoreInfo = document.getElementById("scoreInfo");
var submitBtn = document.getElementById("intials-button");
var intialsEl = document.getElementById("intials");
var totalScore = document.getElementById("score");
var wrongSound = new Audio("https://actions.google.com/sounds/v1/cartoon/cartoon_boing.ogg");
var correctSound = new Audio("https://actions.google.com/sounds/v1/cartoon/cartoon_cowbell.ogg");
var audioGame = new Audio("https://actions.google.com/sounds/v1/office/keyboard_typing_fast_far.ogg");
wrongSound.playbackRate = 3.0;
correctSound.playbackRate = 3.0;

var interval;
var score;
var totalSeconds = 120;
var currentQuestion = 0;


// GIVEN I am taking a code quiz
// WHEN I click the start button

//this event fires the time interverval and send me to the displayquestion Function
// THEN a timer starts and I am presented with a question(go to display quiestion)
//hides intro block and displays qhestion block
function startGame(e){
    audioGame.play();
    audioGame.loop = true;
    score = 0;
    e.preventDefault();
    clearInterval(interval);
    interval = setInterval(timer, 1000);
    introBlock.style.display = "none";
    questionSection.style.display = "block"; 
    displayQuestion(); 
}

//sets time and calls display time to display time
function timer(){ 
    //check every time to see if time has ran out
    if (totalSeconds <= 0){
        finalScore();
    }
    totalSeconds--;
    var totalMinutes = Math.floor(totalSeconds/ 60);
    //minutesLeft = totalMinutes;
    //console.log(totalMinutes);
    var secondsPerMinute = totalSeconds % 60;
    displayTime(totalMinutes, secondsPerMinute);
   // console.log(totalMinutes);
}

//formats time as displays time
function displayTime(totalMinutes, secondsPerMinute){
   // console.log(totalMinutes, secondPerMinute);
    if(totalMinutes == 2){
        totalMinutes = 1;
    }
    if(secondsPerMinute < 10){
        timeLeft.textContent = totalMinutes + ":" + "0" + secondsPerMinute;
    }
    else{
        timeLeft.textContent = totalMinutes + ":" + secondsPerMinute;
    }
    //secondsLeft = secondsPerMinute; 
}


//creates four children for each answer in every question and display the questions
function displayQuestion(){    
    questionEl.textContent = questions[currentQuestion].q;
    for(i =0; i < questions[currentQuestion].a.length; i++){
        var li = document.createElement("li")
        li.innerHTML = "<button>" + questions[currentQuestion].a[i] +"</button>";
        li.dataIndex = i;
        //console.log(li.dataIndex );
        answers.append(li);
    }   
}

//when you click each button is going to call check answer function to check answers
function answersButtons(e){
    if(e.target.matches("button")){
        e.preventDefault(); 
        //everytime a button is clicked check if they reached the end of questions
        if (currentQuestion === questions.length-1){
            finalScore();
        }
        //console.log(e.target.parentElement.dataIndex);
        var index = parseInt(e.target.parentElement.dataIndex)
        // console.log(index);
        checkAnswer(index);
        removeChildren(answers);
        currentQuestion++;
        displayQuestion();        
    }
}

//check answer to check right answer al;so displayus if correct
function checkAnswer(index){
    if(index === questions[currentQuestion].rightAnswer){
        correctOrWrongEl.style.opacity = 1;
        correctOrWrongAnswer.textContent = "Corret";
        correctSound.play();
        score++; 
    }
    else{
        correctOrWrongEl.style.opacity = 1;
        correctOrWrongAnswer.textContent = "Wrong";
        wrongSound.play(); 

        totalSeconds = totalSeconds - 20;
        //console.log(totalSeconds);
        if (totalSeconds <= 0){
            finalScore();
        }
    } 
    //console.log(score);
  
    window.setTimeout("correctOrWrongEl.style.opacity = 0;", 500);
}

//removes children from parent element 
function removeChildren(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

//clears interval and send to allDoneBlock
function finalScore(){
    playAgainClearTime();
    totalScore.textContent = "Your Score: " + score;
    questionSection.style.display = "none";
    scoreInfo.style.display = "block";
}

///clears interval and sets everything to starting mode
function playAgainClearTime(){
    currentQuestion = 0;
    totalSeconds = 120;
    clearInterval(interval);
}

//click and submit event, will change to highscore Html
//get and sets player info so it can be used as highscores list
function submitScore(e){
    e.preventDefault();
    scoreInfo.style.display = "none";
    var intials = intialsEl.value;
    var playerList = [];
    //console.log(JSON.parse(localStorage.getItem("array")));
    if(localStorage.getItem("playerListHighScores") !== null){
        playerList = JSON.parse(localStorage.getItem("playerListHighScores"));
        console.log(playerList);
    }
    playerList.push({name : intials, score: score, time: timeLeft.textContent});
    console.log(playerList);
    localStorage.setItem("playerListHighScores", JSON.stringify(playerList));
    //console.log(playerList);
    window.location.href = "highscores.html";
}

buttonStart.addEventListener("click",startGame);
answers.addEventListener("click", answersButtons);
submitBtn.addEventListener("click", submitScore);
intialsEl.addEventListener("submit",submitScore);


