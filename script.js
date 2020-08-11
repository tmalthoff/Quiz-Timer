var questions = [
    {
        question: "What day is it",
        choices: ["mon", "tues", "wed"],
        answer: "tues"
    }, {
        question: "What day is it now",
        choices: ["mon", "tues", "wed"],
        answer: "wed"
    }, {
        question: "What day is it",
        choices: ["mon", "tues", "wed"],
        answer: "tues"
    }
]

var startScreen = document.getElementById("start-screen");
var quizScreen = document.getElementById("quiz-screen");
var endScreen = document.getElementById("end-screen");
var startBtn = document.getElementById("start-btn");
var questionTitle = document.getElementById("question-title");
var buttonBox = document.getElementById("buttons");

var index = 0;

startBtn.addEventListener("click", startGame);

function startGame() {
    startScreen.setAttribute("class", "hide");
    quizScreen.removeAttribute("class", "hide");
    buildQuestionCard();
}

function buildQuestionCard() {
    var currentQuestion = questions[index];
    questionTitle.textContent = questions[index].question

    buttonBox.innerHTML = "";

    currentQuestion.choices.forEach(function(choice){
        var button = document.createElement("button");
        button.setAttribute("class", "choice");
        button.setAttribute("value", choice);

        button.onclick = evaluateAnswer;
        button.textContent = choice;

        buttonBox.appendChild(button)
    })

}

function evaluateAnswer() {
    console.log(this.value)

    if (this.value !== questions[index].answer) {
        console.log("wrong")
    } else {
        console.log("right")
    }
    index++;
    if(index === questions.length) {
        console.log("game over")
    } else {
    buildQuestionCard();
    }

}