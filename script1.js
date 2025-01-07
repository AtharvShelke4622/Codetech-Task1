let questions = [
    {
        question: "Which is the largest continent by area?",
        answer: [
            { text: "Africa", correct: false },
            { text: "Asia", correct: true },
            { text: "Europe", correct: false },
            { text: "Antarctica", correct: false }
        ]
    },
    {
        question: "What is the capital city of Australia?",
        answer: [
            { text: "Sydney", correct: false },
            { text: "Melbourne", correct: false },
            { text: "Canberra", correct: true },
            { text: "Brisbane", correct: false }
        ]
    },
    {
        question: "Which river is the longest in the world?",
        answer: [
            { text: "Amazon", correct: false },
            { text: "Nile", correct: true },
            { text: "Yangtze", correct: false },
            { text: "Mississippi", correct: false }
        ]
    },
    {
        question: "Which desert is the largest in the world?",
        answer: [
            { text: "Sahara Desert", correct: true },
            { text: "Gobi Desert", correct: false },
            { text: "Kalahari Desert", correct: false },
            { text: "Great Victoria Desert", correct: false }
        ]
    },
    {
        question: "Mount Everest is part of which mountain range?",
        answer: [
            { text: "Alps", correct: false },
            { text: "Himalayas", correct: true },
            { text: "Rockies", correct: false },
            { text: "Andes", correct: false }
        ]
    },
    {
        question: "Which ocean is the deepest in the world?",
        answer: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Pacific Ocean", correct: true },
            { text: "Indian Ocean", correct: false },
            { text: "Arctic Ocean", correct: false }
        ]
    },
    {
        question: "What is the smallest country in the world by area?",
        answer: [
            { text: "Monaco", correct: false },
            { text: "Vatican City", correct: true },
            { text: "San Marino", correct: false },
            { text: "Liechtenstein", correct: false }
        ]
    },
    {
        question: "What is the largest lake in the world by surface area?",
        answer: [
            { text: "Lake Superior", correct: false },
            { text: "Caspian Sea", correct: true },
            { text: "Lake Victoria", correct: false },
            { text: "Lake Baikal", correct: false }
        ]
    },
    {
        question: "Which country has the most time zones?",
        answer: [
            { text: "Russia", correct: false },
            { text: "France", correct: true },
            { text: "United States", correct: false },
            { text: "China", correct: false }
        ]
    },
    {
        question: "Which African country is known as the 'Land of a Thousand Hills'?",
        answer: [
            { text: "Rwanda", correct: true },
            { text: "Kenya", correct: false },
            { text: "Uganda", correct: false },
            { text: "Ethiopia", correct: false }
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
