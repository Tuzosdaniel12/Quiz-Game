var backButtonEl = document.getElementById("go-back");
var clrButton = document.getElementById("clear");
var listPlayerScores = document.getElementById("player-list");


var scoreInfo = document.getElementById("scoreInfo");
var submitBtn = document.getElementById("intials-button");
var intialsEl = document.getElementById("intials");
var totalScore = document.getElementById("score");

//
function submitScore(e){
    e.preventDefault();
    scoreInfo.style.display = "none";
    var intials = intialsEl.value;
    var playerList = [];
    console.log(JSON.parse(localStorage.getItem("array")));
    if(JSON.parse(localStorage.getItem("array")) === undefined){
        playerList =[{name : intials, score: score, time: timeLeft.textContent }];
    }
    else{
        playerList = JSON.parse(localStorage.getItem("array"));
    }

    playerList.push({name : intials, score: score, time: timeLeft.textContent});
    localStorage.setItem("array", JSON.stringify(playerList));
    //console.log(playerList);
    createScoreListitem();
    location.href = "highscores.html";
}


function createScoreListitem(){
    var storedArray = JSON.parse(localStorage.getItem("array"));
    console.log(storedArray);
    //removeChildren(highscoresList);
    for(i = 0; i < storedArray.length; i++){
        var li = document.createElement("li");
        li.innerHTML =  "Initials: "+ storedArray[i].name + "  Score: " + storedArray[i].score + " Time: " + storedArray[i].time;
        console.log(section.innerHTML);
        listPlayerScores.append(li);
    }
}

function clearFunction(e){
    e.preventDefault();
    removeChildren(listPlayerScores);
    localStorage.setItem("array", "[]");
}

function goBack(e){
   e.preventDefault();
   playAgainClearTime();
   location.href = "index.html";
}

clrButton.addEventListener("click", clearFunction);
backButtonEl.addEventListener("click", goBack);
submitBtn.addEventListener("click", submitScore);
