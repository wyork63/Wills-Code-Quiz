var timerEl = document.getElementById('time');


// a timer that starts counting down once the start quiz button is clicked
// the timer continues to go down as the quiz goes on 
// when the correct answer is clicked the timer stays the same 
// when the wrong answer is clicked the timer subtracts 5 
var timeLeft = 75;
var countdown = setInterval(function() {
    timeLeft--;
    document.getElementById('time').textContent = timeLeft;
    if (timeLeft <= 0)
        clearInterval(countdown);
}, 1000);