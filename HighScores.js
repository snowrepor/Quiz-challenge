// Variables declared
var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clear");
var goBack = document.querySelector("#goBack");

// Event listener clears scores
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});

// Local storage is activated
var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if(allScores !== null) {

    for (var i = 0; i < allScores.length; i++) {
        
        var createLi = document.createElement("li");
        createLi.textContent = allScores[i].initials + " " + allScores[i].score;
        highScore.appendChild(createLi);
    
    }
}

// Event listener moves user to index.html
goBack.addEventListener("click", function () {
    window.location.replace("./index.html");
})