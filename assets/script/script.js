var buttonStart = document.getElementById("start-game");
var timeLeft = document.getElementById("time-left");
var questionSection = document.getElementById("question-block");
var introBlock = document.getElementById("intro-block");
var answers = document.getElementById("answers");
var questionEl = document.getElementById("question");
var correctOrWrongEl = document.getElementById("correctOrWrongAnswer");
var scoreInfo = document.getElementById("scoreInfo");

var interval;
var score = 0;
var totalSeconds = 120;
var currentQuestion = 0;
var answerList = [];
var questions = [
        questionOne = {
            q : "Whats the most common way to create a variable?",
            a: ["var","int","float","string"],
            rightAnswer : 0
        },
        questionTwo = {
            q : "What key word is used to define a function?",
            a: ["module","var","float","function"],
            rightAnswer : 3
        },
        questionThree = {
            q : "How do you start a conditional statement?",
            a: ["else","else if","if","else if"],
            rightAnswer : 2
        },
        questionFour = {
            q : "what special character do you use to declare an array",
            a: ["{}","[]","<>","$$"],
            rightAnswer : 1
        },
        questionFive = {
            q : "how do you set the value of a variable?",
            a: ["==","===","=","!="],
            rightAnswer : 2
        },
        questionSix = {
            q : "What tag we use to link a JavaScript file to html",
            a: ["js","javascript","link","script"],
            rightAnswer : 3
        },
        questionSeven = {
            q : "whats the correct syntax for a for loop?",
            a: ["for i = 0, i < 5, i++",
                "(for i = 0; i < 5; i++)",
                "for i < 5",
                "for i to 5"],
            rightAnswer : 1
        },
        questionEight = {
            q : "What keyword do you use to return value from a function",
            a: ["return","break","float","string"],
            rightAnswer : 0
        },
        questionNine = {
            q : "What event is use to listed when the user, uses enter to input value ",
            a: ["click","hover","dblclick","submit"],
            rightAnswer : 3
        },
        questionTen = {
            q : "How do you target an elemnt by ID",
            a: ["document.getElementByClass()","document.getElementById()","document.querySelector()","document.getElementsByTagName"],
            rightAnswer : 1
        },
]


// GIVEN I am taking a code quiz
// WHEN I click the start button

//this event has to fire the time interverval and send me to the question
// THEN a timer starts and I am presented with a question(go to display quiestion)
function startGame(e){
    e.preventDefault();
    clearInterval(interval);
    interval = setInterval(Timer, 1000);
    introBlock.style.display = "none";
    questionSection.style.display = "block"; 
    displayQuestion();
    
}

//sets time and calls display time to display time
function Timer(){ 
    totalSeconds--;
    var totalMinutes = Math.floor(totalSeconds/ 60);
    console.log(totalMinutes);
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
        //everytime a button is clicked check if they reached the end of questions
        if (currentQuestion === questions.length-1){
            finalScore();
        }
        e.preventDefault(); 
        //console.log(e.target.parentElement.dataIndex);
        var index = parseInt(e.target.parentElement.dataIndex)
        // console.log(index);
        checkAnswer(index);
        removeChildrenBeforeNextQuestion();
        
       
    }
}

//check answer to check right answer al;so displayus if correct
function checkAnswer(index){
    if(index === questions[currentQuestion].rightAnswer){
        correctOrWrongEl.style.display = "block";
        correctOrWrongAnswer.textContent = "Corret";
        score++; 
    }

    else{
        correctOrWrongAnswer.textContent = "Wrong";
        totalSeconds = totalSeconds - 20;
        console.log(totalSeconds);
        if (totalSeconds <= 0){
            finalScore();
        }
    }
    
    
    console.log(score);
}

//removews children and call display next question
function removeChildrenBeforeNextQuestion(){
    while(answers.firstChild){
        answers.removeChild(answers.firstChild);
    }
    currentQuestion++;
    displayQuestion();
}

//clears interval and send to all done block
function finalScore(){
    var secondsLeft = totalSeconds;
    totalSeconds = 120;
    clearInterval(interval);
    questionSection.style.display = "none";
    scoreInfo.style.display = "block";
}



//event LIStener 
buttonStart.addEventListener("click",startGame);
answers.addEventListener("click", answersButtons);