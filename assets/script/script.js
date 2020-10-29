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


var interval;
var score;
var totalSeconds = 120;
var currentQuestion = 0;


// GIVEN I am taking a code quiz
// WHEN I click the start button

//this event has to fire the time interverval and send me to the question
// THEN a timer starts and I am presented with a question(go to display quiestion)
function startGame(e){
    score = 0;
    e.preventDefault();
    clearInterval(interval);
    interval = setInterval(Timer, 1000);
    introBlock.style.display = "none";
    questionSection.style.display = "block"; 
    displayQuestion(); 
}

//sets time and calls display time to display time
function Timer(){ 
    //check every time to see if time has ran out
    if (totalSeconds <= 0){
        finalScore();
    }
    totalSeconds--;
    var totalMinutes = Math.floor(totalSeconds/ 60);
    minutesLeft = totalMinutes;
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
    secondsLeft = secondsPerMinute; 
}


//creates four children for each answer in every question and display the questions
function displayQuestion(){
    
    questionEl.textContent = questions[currentQuestion].q;
    for(i =0; i < questions[currentQuestion].a.length; i++){
        var li = document.createElement("li")
        li.innerHTML = "<button>" + questions[currentQuestion].a[i] +"</button>";
        li.dataIndex = i;
        console.log(li.dataIndex );
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
        score++; 
    }
    else{
        correctOrWrongEl.style.opacity = 1;
        correctOrWrongAnswer.textContent = "Wrong";
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

//clears interval and send to all done block
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
    if(JSON.parse(localStorage.getItem("array")) === undefined){
        playerList =[{name : intials, score: score, time: timeLeft.textContent }];
    }
    else{
        playerList = JSON.parse(localStorage.getItem("array"));
    }

    playerList.push({name : intials, score: score, time: timeLeft.textContent});
    localStorage.setItem("array", JSON.stringify(playerList));
    //console.log(playerList);
    window.location.href = "highscores.html";
}

buttonStart.addEventListener("click",startGame);
answers.addEventListener("click", answersButtons);
submitBtn.addEventListener("click", submitScore);
intialsEl.addEventListener("submit",submitScore);


