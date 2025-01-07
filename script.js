let questions = [
    {
        question: "What is the value of √144 + (12 × 3)?",
        answer: [
            { text: "48", correct: true },
            { text: "36", correct: false },
            { text: "60", correct: false },
            { text: "72", correct: false }
        ]
    },
    {
        question: "What is the derivative of 3x² with respect to x?",
        answer: [
            { text: "3", correct: false },
            { text: "6x", correct: true },
            { text: "x²", correct: false },
            { text: "9x", correct: false }
        ]
    },
    {
        question: "Solve: 8 × (2 + 3) - 10 ÷ 2",
        answer: [
            { text: "30", correct: true },
            { text: "25", correct: false },
            { text: "20", correct: false },
            { text: "35", correct: false }
        ]
    },
    {
        question: "What is the value of 2³ × 3²?",
        answer: [
            { text: "72", correct: true },
            { text: "54", correct: false },
            { text: "36", correct: false },
            { text: "64", correct: false }
        ]
    },
    {
        question: "If x = 3 and y = 4, what is the value of x² + y²?",
        answer: [
            { text: "25", correct: true },
            { text: "18", correct: false },
            { text: "20", correct: false },
            { text: "35", correct: false }
        ]
    },
    {
        question: "What is the integral of x² dx?",
        answer: [
            { text: "x³/3 + C", correct: true },
            { text: "2x + C", correct: false },
            { text: "x³/2 + C", correct: false },
            { text: "x²/2 + C", correct: false }
        ]
    },
    {
        question: "Solve for x: 2x + 5 = 15",
        answer: [
            { text: "5", correct: true },
            { text: "10", correct: false },
            { text: "20", correct: false },
            { text: "0", correct: false }
        ]
    },
    {
        question: "Simplify: (5² - 4²) ÷ (7 - 3)",
        answer: [
            { text: "6.25", correct: false },
            { text: "9", correct: true },
            { text: "16", correct: false },
            { text: "12", correct: false }
        ]
    },
    {
        question: "What is the value of cos(60°) + sin(30°)?",
        answer: [
            { text: "1", correct: true },
            { text: "0.5", correct: false },
            { text: "1.5", correct: false },
            { text: "0", correct: false }
        ]
    },
    {
        question: "If log₃(27) = x, what is x?",
        answer: [
            { text: "3", correct: true },
            { text: "9", correct: false },
            { text: "27", correct: false },
            { text: "1", correct: false }
        ]
    }
];

let questionEle = document.querySelector(".question");
let ansBox = document.querySelector(".answer");
let nextButton = document.querySelector(".next-button");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let QuestionNo = currentQuestionIndex + 1;
    questionEle.innerHTML = QuestionNo + ". " + currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        let button = document.createElement("button");
        button.classList.add("ans");
        button.innerHTML = answer.text;
        ansBox.appendChild(button);

        button.addEventListener("click", (e) => {
            e.target.disabled = true;
            if (answer.correct) {
                e.target.classList.add("correct");
                score++;
            } else {
                e.target.classList.add("incorrect");
            }
            Array.from(ansBox.children).forEach(button => {
                if (button.dataset.correct === "true") {
                    button.classList.add("correct");
                }
                button.disabled = true;
            });
            nextButton.style.display = "block";
        });
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (ansBox.firstChild) {
        ansBox.removeChild(ansBox.firstChild);
    }
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
});

function showResults() {
    resetState();
    questionEle.innerHTML = `Quiz Finished! Your score is ${score}/${questions.length}`;
    nextButton.style.display = "none";
}

startQuiz();
