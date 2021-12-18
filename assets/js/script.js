
// timer function - need this to be triggered when the user clicks the start game button 
    // when the timer hits zero it will take me to the endscreen id="end-screen"
var timeleft = 60;
var countdown;

var questionsIndex = 0;
var startScreen = document.getElementById("start-screen");
var questions = document.getElementById("questions");
var endScreen = document.getElementById("end-screen");
var questionTitle = document.getElementById("question-title");
var choices = document.getElementById("choices");
var submit = document.getElementById("submit");
var feedback = document.getElementById("feedback");
var initials = document.getElementById("initials");
var score = document.getElementById("final-score");
var timer = document.getElementById("clock");
var highscores;

// function that starts time and quiz 
function startTimer() {
    countdown = setInterval(tick, 1000);

    startQuiz()
};
// found on stackoverflow - https://stackoverflow.com/questions/67496199/javascript-prevent-setinterval-function-from-running-until-button-is-clicked
function tick() {
    if (timeleft < 0) {
        clearInterval(countdown);
            alert("Sorry, you're out of time. Click okay to see your score");
    } else {
        document.getElementById("time").innerHTML = timeleft;   
    }
    timeleft -= 1; // this is what time is subtracted from when wrong // timeleft minus ten 
}

// once the start button is clicked the first question is shown

function startQuiz () {
    startScreen.setAttribute("class","hide")

    questions.removeAttribute("class")

    cycleQuestions()
}
// function that cycle through each question 
function cycleQuestions() {
    var displayQuestion = myQuestions[questionsIndex]

    questionTitle.textContent = displayQuestion.question

    choices.innerHTML = ""
    // sets value of the button to the text in the array so that it can be checked against the answer later
    displayQuestion.answers.forEach(option => {
        var answerButton = document.createElement ("button");
        answerButton.setAttribute ("value", option);
        answerButton.textContent = option;
        // will check to see if the answer is correct
        answerButton.onclick = checkAnswer;
        choices.appendChild(answerButton);
    });


}
// need to add ability to check if the questions are right or wrong 
// when an answer is clicked 
    // the page goes to the next set of questions 
    // the bottom of the page displays either right or wrong 
function checkAnswer () {
    if (this.value === myQuestions[questionsIndex].correctAnswer) {
        console.log("correct") 
        timeleft += 10; // adds ten seconds to time left 
        document.getElementById("feedback").innerHTML = "Correct! 10 seconds added."; // displays answer is right 
    } 
    
    else { 
        console.log("wrong")
        // penalize with minus 10 seconds 
        // do timeleft -10 and set the textcontent to what is displaying the time to time left 
        timeleft -= 10;
        document.getElementById("time").innerHTML = timeleft;
        document.getElementById("feedback").innerHTML = "Wrong! 10 seconds deducted."; 
    }

    questionsIndex++
    
    // if there are questions left in the array keep running cycle questions 
    // if questionsindex > 6 then fireq quiz over function that will take users to end screen 
    // when the question gets to the end it will also stop the tick with clear timeout 

    if (questionsIndex > 5) {
        endScreen.removeAttribute("class");
        questions.setAttribute("class","hide");
        timer.setAttribute("class","hide"); // this hides the timer at the top 
        clearTimeout(countdown);
        document.getElementById("final-score").innerHTML = timeleft; // this adds the time left to the final score
        return cycleQuestions; 
    }

    cycleQuestions()

};


// BELOW - runs once the save button is clicked and initials are saved 


submit.addEventListener ("click", saveNewScores)
    

// way to save score from game 
function saveNewScores () {
    var initials = document.getElementById('initials').value;
    // localStorage.setItem("highscores", JSON.stringify({initials, timeleft}));

    // get highscores if they exist
    var highScores = JSON.parse(localStorage.getItem("highscores")) || []
    console.log(highScores)
    // turn our data into an object / creates new obkect

    newScores = {initials: initials, timeleft: timeleft}

    // add our object to the scores array / pushes object to array

    highScores.push(newScores)
    // add updated array to local storage 

    localStorage.setItem("highscores", JSON.stringify(highScores))

    // kills function to not submit again 
    submit.removeEventListener("click", saveNewScores) // could add function to hide button once clicked
}


// saveNewScores(); 

// office hours save score





//TO DO 
    // add way to store initials with the score of that game







// if the answer is right it logs ten points to their score that is stored in the console log 
//     review the 4.4.6 module on how to store things in the console.log 

// if the answer is wrong it adds zero points to the score but subtracts five seconds off the timer loop?
//     some kind of for loop that says if var=true then add 10 to score (id=final-score)
//         this variable will be an empty array function ie var playerScore = []; 
//     if var = false then -10 from timeleft 

// questions will cycle through one big for loop and pull questions from the questions.js file
//     the end screen will pop up if all the questions are answered or if the timer hits zero
//     if timeleft=0 it triggers the end screen
//     if last questions is answered it hits end screen
//     need to use clearinterval to trigger a function to get to end screen if the user hits zero?     


// once the game is over 
//     text is displayed with the users final score id=final-score
//     submitting this ties the initials to the highscore and logs it in the highscores.html file 


// optional but could somehow tie this array of scores to display on the highscores.html page (this is optional)
    



// startBtn.addEventListener("click", setInterval);
