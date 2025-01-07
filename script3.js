let questions = [
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        answer: [
            { text: "Charles Dickens", correct: false },
            { text: "William Shakespeare", correct: true },
            { text: "Jane Austen", correct: false },
            { text: "Mark Twain", correct: false }
        ]
    },
    {
        question: "What is the smallest planet in our solar system?",
        answer: [
            { text: "Earth", correct: false },
            { text: "Mars", correct: false },
            { text: "Mercury", correct: true },
            { text: "Venus", correct: false }
        ]
    },
    {
        question: "Who invented the telephone?",
        answer: [
            { text: "Nikola Tesla", correct: false },
            { text: "Thomas Edison", correct: false },
            { text: "Alexander Graham Bell", correct: true },
            { text: "Guglielmo Marconi", correct: false }
        ]
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        answer: [
            { text: "Oxygen", correct: true },
            { text: "Osmium", correct: false },
            { text: "Ozone", correct: false },
            { text: "Oganesson", correct: false }
        ]
    },
    {
        question: "What is the capital of Canada?",
        answer: [
            { text: "Toronto", correct: false },
            { text: "Ottawa", correct: true },
            { text: "Vancouver", correct: false },
            { text: "Montreal", correct: false }
        ]
    },
    {
        question: "Which country is known as the 'Land of the Rising Sun'?",
        answer: [
            { text: "China", correct: false },
            { text: "Japan", correct: true },
            { text: "India", correct: false },
            { text: "South Korea", correct: false }
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        answer: [
            { text: "Pablo Picasso", correct: false },
            { text: "Vincent van Gogh", correct: false },
            { text: "Leonardo da Vinci", correct: true },
            { text: "Michelangelo", correct: false }
        ]
    },
    {
        question: "Which country is the largest by land area?",
        answer: [
            { text: "United States", correct: false },
            { text: "Canada", correct: false },
            { text: "China", correct: false },
            { text: "Russia", correct: true }
        ]
    },
    {
        question: "In which year did the Titanic sink?",
        answer: [
            { text: "1912", correct: true },
            { text: "1905", correct: false },
            { text: "1920", correct: false },
            { text: "1898", correct: false }
        ]
    },
    {
        question: "What is the hardest natural substance on Earth?",
        answer: [
            { text: "Gold", correct: false },
            { text: "Iron", correct: false },
            { text: "Diamond", correct: true },
            { text: "Platinum", correct: false }
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
