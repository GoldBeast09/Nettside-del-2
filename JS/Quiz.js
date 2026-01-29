const body = document.body;

const questionElement = document.getElementById("question");
const correctAnswersElement = document.getElementById("correctAnswers");
const totalQuestionsElement = document.getElementById("totalQuestions");
const optionsElement = document.querySelectorAll(".Option");

const nextButton = document.getElementById("nextButton");
const compareAnswersButton = document.getElementById("compareAnswers");

const finalScore = document.getElementsByClassName("correctAnswers");

import { playAudio } from "./sound.js";

const questions = [
  {
    question: "What Battle in 1836 lead to independence of Texas?",
    answers: ["The fight of Texas", "The battle of San Jacinto", "The Mexican disagreement", "The Battle for freedom"],
    corectIndex: 1,
  },
  {
    question: "What is the capital of Texas?",
    answers: ["Houston", "San Antonio", "Dallas", "Austin"],
    corectIndex: 3,
  },
  {
    question: "What is the nickname of Texas?",
    answers: ["The Sunshine State", "The Lone Star State", "The Empire State", "The Peach State"],
    corectIndex: 1,
  },
  {
    question: "Which river forms much of the border between Texas and Mexico?",
    answers: ["Colorado River", "Brazos River", "Rio Grande", "Red River"],
    corectIndex: 2,
  },
  {
    question: "In what year did Texas join the United States?",
    answers: ["1845", "1836", "1861", "1900"],
    corectIndex: 0,
  },
];

let correctAnswers = 0;
let totalQuestions = questions.length;
let answeredQuestions = 0;

let currentQuestionIndex = 0;
let answeredQuestion = false;
let clickedOption = undefined;
let comparedQuestion = false;

const randomQuestion = () => {
  currentQuestionIndex = Math.floor(Math.random() * questions.length);
};

randomQuestion();
updateQuestions(currentQuestionIndex);
updateScore();

clickedQuestion();
function clickedQuestion() {
  optionsElement.forEach((button, index) => {
    button.addEventListener("click", () => {
      if (comparedQuestion === true) {
        return;
      }
      optionsElement.forEach((button) => {
        button.classList.remove("clicked");
      });
      button.classList.add("clicked");
      clickedOption = index;
      AnsweredQuestion();
    });
  });
}

function AnsweredQuestion() {
  answeredQuestion = true;
}

function updateQuestions(currentQuestion) {
  optionsElement.forEach((button, index) => {
    const optionText = button.querySelector(".optionText");
    optionText.textContent = questions[currentQuestion].answers[index];
    button.classList.remove("clicked");
  });
  body.classList.remove("wrongAnswer");
  body.classList.remove("corectAnswer");
  questionElement.textContent = questions[currentQuestion].question;
}

function updateScore() {
  correctAnswersElement.textContent = `${correctAnswers}/${answeredQuestions} Correct`;
  totalQuestionsElement.textContent = `Question ${answeredQuestions}/${totalQuestions}`;
}

compareAnswersButton.addEventListener("click", () => {
  if (answeredQuestion === true) {
    compareAnswers(clickedOption, currentQuestionIndex);
  } else {
    return;
  }
  answeredQuestion = false;
});

function compareAnswers(answer, question) {
  if (answer === questions[question].corectIndex) {
    playAudio("correct-156911.mp3");
    correctAnswers = correctAnswers + 1;
    body.classList.add("corectAnswer");
  } else {
    playAudio("wrong-47985.mp3");
    body.classList.add("wrongAnswer");
  }
  answeredQuestions = answeredQuestions + 1;

  if (currentQuestionIndex === questions.length - 1) {
    currentQuestionIndex = 0;
  } else {
    currentQuestionIndex = currentQuestionIndex + 1;
  }
  comparedQuestion = true;
  updateScore();
}

nextButton.addEventListener("click", () => {
  if (comparedQuestion === true) {
    isQuizDone();
  } else {
    return;
  }
  comparedQuestion = false;
});

function isQuizDone() {
  if (answeredQuestions === questions.length) {
    sessionStorage.setItem("correctAnswers", correctAnswers);
    sessionStorage.setItem("totalQuestions", totalQuestions);
    window.location.href = "QuizComplete.html";
    return;
  } else {
    updateQuestions(currentQuestionIndex);
  }
}
