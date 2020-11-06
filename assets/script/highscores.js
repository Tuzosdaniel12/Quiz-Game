var backButtonEl = document.getElementById("go-back");
var clearButton = document.getElementById("clear");
var listHighscores = document.getElementById("player-list");

function createScoreListitem(){
    var storedArray = JSON.parse(localStorage.getItem("playerListHighScores"));
    console.log(storedArray);
    //console.log(storedArray);
    //removeChildren(highscoresList);
    for(i = 0; i < storedArray.length; i++){
        var li = document.createElement("li");
        li.innerHTML =  "<span>Initials:</span> "+ storedArray[i].name + "  <span>Score:</span>" + storedArray[i].score + " <span>Time:</span>" + storedArray[i].time;
        listHighscores.append(li);
    }
}

function clearFunction(e){
    e.preventDefault();
    localStorage.setItem("playerListHighScores", "[]");
    //console.log(playerList = JSON.parse(localStorage.getItem("array", "[]")));
    removeChildren(listHighscores);
}

function goBack(e){
   e.preventDefault();
   playAgainClearTime();
   location.href = "index.html";
}


clearButton.addEventListener("click", clearFunction);
backButtonEl.addEventListener("click", goBack);

createScoreListitem();
