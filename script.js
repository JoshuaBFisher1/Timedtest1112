const questions = [
  {
    question: "Which of the following is a primitive data type in JavaScript?",
    answers: [
      { text: "Object", correct: false },
      { text: "String", correct: true },
      { text: "Array", correct: false },
      { text: "Function", correct: false },
    ],
  },
  {
    question: " What is the purpose of the let keyword in JavaScript?",
    answers: [
      { text: "To declare a variable that can be reassigned", correct: true },
      { text: "To declare a variable that cannot be reassigned", correct: false },
      { text: "To declare a constant variable", correct: false },
      { text:"To declare a variable that is only accessible within a function" , correct: false },
    ],
  },
  {
    question: "What does the === operator in JavaScript do?",
    answers: [
      { text: "Compares two values for equality, without type coercion", correct: true },
      { text: "Compares two values for equality, with type coercion", correct: false },
      { text: " Assigns a value to a variable", correct: false },
      { text: "Compares two values for inequality, without type coercion", correct: false },
    ],
  },
  {
    question: "Which of the following is not a valid loop statement in JavaScript?",
    answers: [
      { text: "for", correct: false },
      { text: "while", correct: false },
      { text: " repeat", correct: true },
      { text: "do...while", correct: false },
    ],
  },
  {
    question: "What is the result of the following expression: 10 % 3?",
    answers: [
      { text: " 3", correct: false },
      { text: "1", correct: true },
      { text: "0", correct: false },
      { text: "10", correct: false },
    ],
  },
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 35;
let timerInterval;

const container = document.querySelector(".container");
const timer = document.querySelector(".timer");
const questionsContainer = document.querySelector(".questions");
const startButton = document.getElementById("start-btn");

startButton.addEventListener("click", startTest);

function startTest() {
  startButton.classList.add("hide");
  showQuestion();
  startTimer();
}

function showQuestion() {
  const question = questions[currentQuestion];
  const questionElement = document.createElement("div");
  questionElement.classList.add("question");
  questionElement.innerHTML = `
    <h2>${question.question}</h2>
    <div class="answers">
      ${question.answers
        .map(
          (answer) =>
            `<button class="answer-btn ${
              answer.correct ? "correct" : ""
            }">${answer.text}</button>`
        )
        .join("")}
    </div>
  `;
  questionsContainer.appendChild(questionElement);
  const answerButtons = questionElement.querySelectorAll(".answer-btn");
  answerButtons.forEach((button) => {
    button.addEventListener("click", selectAnswer);
  });
}

function selectAnswer(event) {
  const selectedButton = event.target;
  const isCorrect = selectedButton.classList.contains("correct");
  if (isCorrect) {
    score++;
  } else {
    timeLeft = Math.max(0, timeLeft - 5);
  }
  currentQuestion++;
  questionsContainer.innerHTML = "";
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    endTest();
  }
}

function startTimer() {
  timerInterval = setInterval(() => {
    timeLeft--;
    timer.textContent = `${timeLeft} seconds`;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      endTest();
      alert("You lose!");
      startButton.classList.remove("hide");
      timeLeft = 35;
      score = 0;
      currentQuestion = 0;
    } else if (wrongAnswer) { // Add this block for wrong answer
      timeLeft -= 5;
      wrongAnswer = false;
    }
  }, 1000);
}
function endTest() {
  clearInterval(timerInterval);
  questionsContainer.innerHTML = "";
  if (currentQuestion >= questions.length) {
    container.innerHTML = `
      <h2>Congratulations, you have completed the test!</h2>
      <div>
      <p>Your score is: <span id="score">${score}</span></p>
        <label for="initials">Enter your initials:</label>
        <input type="text" id="initials" name="initials">
        <button id="submit-btn">Submit</button>
      </div>
    `;
    const submitButton = document.getElementById("submit-btn");
    submitButton.addEventListener("click", () => {
      const initialsInput = document.getElementById("initials");
      const initials = initialsInput.value;
      // do something with initials, e.g. save to local storage or send to server
      container.innerHTML = `<h2>Thank you for taking the test!</h2>`;
    });
    const resetButton = document.getElementById("reset-btn");
    resetButton.addEventListener("click", () => {
      location.reload();
    });
  } else {
    container.innerHTML = `<h2>You lose!</h2>`;
  }
  startButton.classList.remove("hide");
  timeLeft = 35;
  score = 0;
  currentQuestion = 0;
}
