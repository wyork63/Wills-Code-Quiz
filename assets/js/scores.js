// create ordered list element 
// get ordered list element from html 

// create add item to list function 
console.log("scores.js loaded")
var list = document.getElementById("list");


function loadScores () {
    var highScores = JSON.parse(localStorage.getItem("highscores")) || []
    // document.getElementById("highscores").textContent = highScores;
    for (var index = 0; index < highScores.length; index++) {
        var score = highScores[index];
        var scoreEl = document.createElement ("li");
        list.appendChild(scoreEl); 
        scoreEl.innerHTML = score.initials + ": " + score.timeleft
    }
}
// grab out score

loadScores() 
