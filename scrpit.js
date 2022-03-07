var startBtn = document.getElementById("start");

function quizStart() {
    startBtn.addEventListener("click", function () {
        quizName.setAttribute("style", "display:none");
        quizQuestionEl.setAttribute("style", "display: block");
        controlsEl.setAttribute("style", "display: block;");