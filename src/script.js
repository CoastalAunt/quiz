/* DOM */

let startButton = document.querySelector(".start-button");
let startWrapper = document.querySelector(".start-wrapper");
let quizWrapper = document.querySelector(".quiz-wrapper");
let questionHeading = document.querySelector(".question-heading");
let answerButtons = document.querySelectorAll(".answer-row > button");

/* project stuff */

const signs = ["-", "+"];

function startGame() {
  startWrapper.classList.add("hide");
  quizWrapper.classList.remove("hide");
  genarateQuestion();
};

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
};

function calc(num1, num2, sing) {
  if (sing === "+") {
    return num1 + num2;
  } else {
    return num1 - num2;
  }
}

function genarateQuestion() {
  let num1 = getRandomInt(50);
  let num2 = getRandomInt(50);
  let sing = signs[getRandomInt(2)];
  let randomAnswerNumber = getRandomInt(5);
  questionHeading.innerHTML = `${num1} ${sing} ${num2}`;

  for (let i = 0; i < answerButtons.length; i += 1) {
    if (i === randomAnswerNumber) {
      answerButtons[i].innerHTML = calc(num1, num2, sing);
      answerButtons[i].classList.add("right");
    } else {
      answerButtons[i].innerHTML = getRandomInt(100);
      answerButtons[i].classList.add("wrong");
    }
  }
}

function removeClasses() {
  for (let i = 0; i < answerButtons.length; i += 1) {
    if (answerButtons[i].classList.contains("right")) {
      answerButtons[i].classList.remove("right");
    }

    if (answerButtons[i].classList.contains("wrong")) {
      answerButtons[i].classList.remove("wrong");
    }
  }
}

setInterval(removeClasses, 1000)

startButton.addEventListener("click", startGame);

for (let i = 0; i < answerButtons.length; i += 1) {
  answerButtons[i].addEventListener("click", genarateQuestion);
}