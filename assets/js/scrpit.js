var startBtn = document.getElementById("start");
var quizName = document.getElementById("quiz-name-div");
var quizQuestionEl = document.getElementById("hidden-container");
var controlsEl = document.getElementById("hidden-controls-container");
var questTextEl = document.getElementById("question-text");
var btn = document.createElement("button");
var answerEl = document.getElementById("options");

btn.className += "buttons";
var btn2 = document.createElement("button");
btn2.className += "buttons";
let btn3 = document.createElement("button");
btn3.className += "buttons";
let btn4 = document.createElement("button");
btn4.className += "buttons";

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






        

        quizStart();