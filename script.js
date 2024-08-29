const quizData = [
  {
    question: "find a pi value",
    a: "3.14",
    b: "10.5",
    c: "100",
    d: "8",
    correct: "a",
  },
  {
    question: "SaaS meaning?",
    a: "Software as a sector",
    b: "Software as a service",
    c: "Service as a software",
    d: "Cars SUVs Sailboats",
    correct: "b",
    
  },
  {
    question: "which is the largest country?",
    a: "Japan",
    b: "China",
    c: "India",
    d: "USA",
    correct: "c",
  },
  {
    question: "when is national voters's day celebrated in india?",
    a: "5 january",
    b: "5 december",
    c: "25 january",
    d: "none of the above",
    correct: "c",
  },
 {
    question: "which part of the boy helps you move?",
    a: "eyes",
    b: "pancreas",
    c: "muscles",
    d: "hands",
    correct: "c",
  },
];

const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

const deselectAnswers = () => {
  answerElements.forEach((answer) => (answer.checked = false));
};

const getSelected = () => {
  let answer;
  answerElements.forEach((answerElement) => {
    if (answerElement.checked) answer = answerElement.id;
  });
  return answer;
};

const loadQuiz = () => {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionElement.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
};

loadQuiz();

submitButton.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) score+=10;
    currentQuiz++;
    if (currentQuiz < quizData.length) loadQuiz();
    else {
      quiz.innerHTML = `
            <h2>You answered ${score}/50{quizData.length} questions correctly</h2>
            <button onclick="history.go(0)">Play Again</button>
        `;
    }
  }
});
