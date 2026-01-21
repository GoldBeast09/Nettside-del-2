const questionElement = document.getElementById("question");
const correctAnswersElement = document.getElementById("correctAnswers");
const totalQuestionsElement = document.getElementById("totalQuestions");
const optionsElement = document.querySelectorAll(".Option");

const questions = [
  {
    question: "Placeholder one",
    answers: ["option1", "option2", "option3", "option4"],
    corectIndex: 1,
  },
  {
    question: "Placeholder two",
    answers: ["option1", "test", "option3", "option4"],
    corectIndex: 2,
  },
  {
    question: "Placeholder three",
    answers: ["option1", "test", "option3", "option4"],
    corectIndex: 3,
  },
  {
    question: "Placeholder four",
    answers: ["option1", "option2", "option3", "option4"],
    corectIndex: 4,
  },
  {
    question: "Placeholder 5",
    answers: ["option1", "option2", "option3", "option4"],
    corectIndex: 1,
  },
];

let correctAnswers = 0;
let totalQuestions = questions.length;
let answeredQuestions = 0;

correctAnswersElement.textContent = `${correctAnswers}/${answeredQuestions} Correct`;
totalQuestionsElement.textContent = `Question ${answeredQuestions}/${totalQuestions}`;

function updateUi(currentQuestion) {
  optionsElement.forEach((button, index) => {
    const optionText = button.querySelector(".optionText");
    optionText.textContent = questions[currentQuestion].answers[index];
  });
  questionElement.textContent = questions[currentQuestion].question;
}

/*
Logic to move to the next question after an answer is selected.
Logic to check if the selected answer is correct and update the score.
Logic to update the displayed question and options for each new question.
Logic to handle the end of the quiz (show results, allow restart, etc.).
*/
