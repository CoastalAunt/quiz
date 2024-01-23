let startButton = document.querySelector(".start-button");
let startWrapper = document.querySelector(".start-wrapper ");
let quizWrapper = document.querySelector(".quiz-wrapper ");
let question_heading = document.getElementsByClassName("question_heading");
let change = document.getElementsByClassName("change");

function startGame() {
    startWrapper.classList.add("hide");
    quizWrapper.classList.remove("hide");
};



startButton.addEventListener("click", startGame);



question_heading.textContent = "'nj gbplf ";


function generateQuestion() {

    let a = randomInt(1, 10);
    let b = randomInt(1, 10);

    let sign = Math.random() < 0.5 ? "+" : "-";

    if (sign === "+") {
        correctAnswer = a + b;
    } else {
        correctAnswer = a - b;
    }

    question_heading.textContent = `${a} ${sign} ${b} = ?`;
}

