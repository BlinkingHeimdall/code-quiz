var startBtn = document.getElementById("start");
var timeEl = document.getElementById("time-remaining");
var nextBtn = document.getElementById("next-button");
var spanRight = document.getElementById("right");
var spanWrong = document.getElementById("wrong");
var quizName = document.getElementById("quiz-name-div");
var quizQuestionEl = document.getElementById("hidden-container");
var questTextEl = document.getElementById("question-text");
var quizScoreEl = document.getElementById("hidden-score-container");
var submitBtn = document.getElementById("submit-button");
var controlsEl = document.getElementById("hidden-controls-container");
var answerEl = document.getElementById("options");
var answerBtn = document.querySelectorAll(".answers");
var rightEl = document.getElementById("right-answers");
var btn = document.createElement("button");
var rightResultsEl = document.getElementById("hidden-right");
var wrongResultsEl = document.getElementById("hidden-wrong");
var highScoreBtn = document.getElementById("high-score-button");
var highScoreEl = document.getElementById("hidden-high-score");
var playAgainBtn = document.getElementById("play-again");

btn.className += "buttons";
var btn2 = document.createElement("button");
btn2.className += "buttons";
let btn3 = document.createElement("button");
btn3.className += "buttons";
let btn4 = document.createElement("button");
btn4.className += "buttons";

var initialsInput = document.getElementById("initials");

var score = 0;
var timeInterval 




// array of questions
var quizQuestions = ["What is == in Js?", "What does ++ mean in Js?", "What does -- mean in Js?", "What does Boolean mean?"];

// both incorrect and correct answers for all questions
var buttonOneAnswers = ['super-equals', 'When you have to invite someone to a wedding it is funny how this is actually kinda correct', 'super negative like my attitude','true/false'];
var buttonTwoAnswers = ['comparison operator','super positive', 'decrements the value', 'on/off'];
var buttonThreeAnswers = ['I did not take notes on this', 'adds one increment to a value', 'ultra dumb', '1/0'];
var buttonFourAnswers = ['Where are my socks', 'dead tree',  'wrong answer', 'all of the above technically',];


//the correct answers to the questions

var correctAnswers = ['comparison operator', 'adds one increment to a value', 'decrements the value','all of the above technically'];

var index = 0;


// question index

var index = 0;

// button index

var buttonOneIndex = 0;
var buttonTwoIndex = 0;
var buttonThreeIndex = 0;
var buttonFourIndex = 0;
var correctAnswersIndex = 0;



// this makes the questions and answers appear when the start button is pressed


function quizStart() {
    startBtn.addEventListener("click", function () {
        quizName.setAttribute("style", "display:none");
        quizQuestionEl.setAttribute("style", "display: block");
        controlsEl.setAttribute("style", "display: block;");
        questTextEl.innerText = quizQuestions[0];

        btn.textContent = buttonOneAnswers[0];
        answerEl.appendChild(btn);

        btn2.textContent = buttonTwoAnswers[0];
        answerEl.appendChild(btn2);

        btn3.textContent = buttonThreeAnswers[0];
        answerEl.appendChild(btn3);

        btn4.textContent = buttonFourAnswers[0];
        answerEl.appendChild(btn4);



        btn.addEventListener("click", function (event) {
            if (event.target.innerText === correctAnswers[index]) {
                score++;
                rightResultsEl.setAttribute("style", "display: block;");

            }
            else {
                score--;
                wrongResultsEl.setAttribute("style", "display: block;");
                timeLeft = timeLeft - 3;
            }
        })

        btn2.addEventListener("click", function (event) {
            if (event.target.innerText === correctAnswers[index]) {
                score++;
                rightResultsEl.setAttribute("style", "display: block;");

            }
            else {
                score--;
                wrongResultsEl.setAttribute("style", "display: block;");
                timeLeft = timeLeft - 3;

            }
        })

        btn3.addEventListener("click", function (event) {
            if (event.target.innerText === correctAnswers[index]) {
                score++;
                rightResultsEl.setAttribute("style", "display: block;");
            }
            else {
                score--;
                wrongResultsEl.setAttribute("style", "display: block;");
                timeLeft = timeLeft - 3;
            }
        })

        btn4.addEventListener("click", function (event) {
            if (event.target.innerText === correctAnswers[index]) {
                score++;
                rightResultsEl.setAttribute("style", "display: block;");
            }
            else {
                score--;
                wrongResultsEl.setAttribute("style", "display: block;");
                timeLeft = timeLeft - 3;
            }
        })



        countdownTimer();

    })


}

nextBtn.addEventListener("click", nextQuestion);

// questions and answers are flipped through 
function nextQuestion() {
    index++;
    index %= quizQuestions.length;
    questTextEl.innerText = quizQuestions[index];

    correctAnswersIndex++;
    correctAnswersIndex %= correctAnswers.length;

    rightResultsEl.setAttribute("style", "display: none;");
    wrongResultsEl.setAttribute("style", "display: none;");


    btn.addEventListener("click", function (event) {
        if (event.target.innerText === correctAnswers[index]) {
            score +
                rightResultsEl.setAttribute("style", "display: block;");
        }
        else {
            score -
                wrongResultsEl.setAttribute("style", "display: block;");
                timeLeft = timeLeft - 3;
        }
    })

    btn2.addEventListener("click", function (event) {
        if (event.target.innerText === correctAnswers[index]) {
            score +
                rightResultsEl.setAttribute("style", "display: block;");
        }
        else {
            score -
                wrongResultsEl.setAttribute("style", "display: block;");
                timeLeft = timeLeft - 3;
        }
    })

    btn3.addEventListener("click", function (event) {
        if (event.target.innerText === correctAnswers[index]) {
            score +
                rightResultsEl.setAttribute("style", "display: block;");
        }
        else {
            score -
                wrongResultsEl.setAttribute("style", "display: block;");
                timeLeft = timeLeft - 3;
        }
    })

    btn4.addEventListener("click", function (event) {
        if (event.target.innerText === correctAnswers[index]) {
            score +
                rightResultsEl.setAttribute("style", "display: block;");
        }
        else {
            score -
                wrongResultsEl.setAttribute("style", "display: block;");
                timeLeft = timeLeft - 3;

        }
    })

    

    buttonOneIndex++;
    buttonOneIndex %= buttonOneAnswers.length;
    btn.textContent = buttonOneAnswers[index];


    buttonTwoIndex++
    buttonTwoIndex %= buttonTwoAnswers.length;
    btn2.textContent = buttonTwoAnswers[index];

    buttonThreeIndex++
    buttonThreeIndex %= buttonThreeAnswers.length;
    btn3.textContent = buttonThreeAnswers[index];

    buttonFourIndex++
    buttonFourIndex %= buttonFourAnswers.length;
    btn4.textContent = buttonFourAnswers[index];


    if (index < quizQuestions.length - 1) {
        // there are still questions left
    }
    else {
        // last question display score box on next click
        nextBtn.setAttribute("style", "display: none;");
        

    }
    
}
// this function finishes the quiz

function endQuiz() {
    // local storage is used to store the score
    submitBtn.setAttribute("style", "display: none;");
    quizQuestionEl.setAttribute("style", "display: none;");
    wrongResultsEl.setAttribute("style", "display: none;");
    rightResultsEl.setAttribute("style", "display: none;");
    nextBtn.setAttribute("style", "display:none;");
    quizScoreEl.setAttribute("style", "display: block;");
    quizName.setAttribute("style", "display:none;");

    var scoreDisplay = score;
    var scoreEl = document.getElementById("score");
    scoreEl.innerText = "All Done! Your score is " + scoreDisplay;
    clearInterval(timeInterval);

}

    quizStart();