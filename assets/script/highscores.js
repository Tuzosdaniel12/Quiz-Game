var backButtonEl = document.getElementById("go-back");
var clearButton = document.getElementById("clear");
var listHighscores = document.getElementById("player-list");

function createScoreListitem(){
    var storedArray = JSON.parse(localStorage.getItem("array"));
    //console.log(storedArray);
    //removeChildren(highscoresList);
    
    for(i = 0; i < storedArray.length; i++){
        var li = document.createElement("li");
        li.innerHTML =  "Initials: "+ storedArray[i].name + "  Score: " + storedArray[i].score + " Time: " + storedArray[i].time;
        listHighscores.append(li);
    }
}

function clearFunction(e){
    e.preventDefault();
    localStorage.setItem("array", "[]");
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
