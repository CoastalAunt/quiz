let startButton = document.querySelector(".start-button")
let startWrapper = document.querySelector(".start-wrapper")
let quizWrapper = document.querySelector(".quiz-wrapper")
let answers = document.querySelectorAll(".answer_row button")
let quetion = document.querySelector(".question_heading")
let c = document.querySelector(".answer_1")




function startGame() {
    startWrapper.classList.add("hide");
    quizWrapper.classList.remove("hide");
};

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


function generateQuestion() {

    let a = getRandomInt(50);
    let b = getRandomInt(50);
    let signs = getRandomInt(2) < 0.5 ? "+" : "-";
    let c = eval(`${a} ${signs} ${b}`);
    if (signs === "+") {
        correctAnswer = a + b;
    } else {
        correctAnswer = a - b;
    }

    quetion.textContent = `${a} ${signs} ${b} = ?`;
    c.textContent = 'c';
}



startButton.addEventListener("click", startGame);


generateQuestion()
