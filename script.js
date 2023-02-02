const quizData = [
  {
    question: "JavaScript is an _______________ language?",
    a: "Object-Oriented",
    b: "Object-Based",
    c: "Procedural",
    d: "None of the above",
    correct: "a",
  },
  {
    question:
      "Which of the following keywords is used to define a variable in JavaScript?",
    a: "var",
    b: "let",
    c: "const",
    d: "All of the above",
    correct: "d",
  },
  {
    question:
      "Which of the following methods is used to access HTML elements using JavaScript?",
    a: "getElementById()",
    b: "getElementsByClassName()",
    c: "Both A and B",
    d: "None of the above",
    correct: "c",
  },
  {
    question:
      "Which of the following methods can be used to to display data in some form using JavaScript?",
    a: "document.write()",
    b: "console.log()",
    c: "window.alert",
    d: "All of the above",
    correct: "d",
  },
  {
    question: "How can datatype be declared to be a constant type?",
    a: "const",
    b: "var",
    c: "let",
    d: "constant",
    correct: "a",
  },
  {
    question:
      "When the switch statement matches the expression with the given labels, how is the comparison done?",
    a: "Both the datatype and the result of the expressiion are compared.",
    b: "Only the datatype of the expression is compared.",
    c: "Only the value of the expression is compared.",
    d: "None of the above.",
    correct: "a",
  },
  {
    question:
      "What keyword is used to check whether a given property is valid or not?",
    a: "in",
    b: "is in",
    c: "exist",
    d: "lies",
    correct: "a",
  },
  {
    question: "What is the use of the <noscript> tag in javascript?",
    a: "The contents are displayed by non-JS-based browsers.",
    b: "Clears all the cookies and cache.",
    c: "Both A and B",
    d: "None of the above.",
    correct: "a",
  },
  {
    question:
      "When an operator's value is NULL, the typeof returned by the unary operator is:",
    a: "Boolean",
    b: "Undefined",
    c: "Obeject",
    d: "Integer",
    correct: "c",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            
            <button onclick="location.reload()">Reload</button>
            `;
    }
  }
});
