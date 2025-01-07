let questions = [
    {
        question: "What is the chemical symbol for water?",
        answer: [
            { text: "CO2", correct: false },
            { text: "O2", correct: false },
            { text: "H2O", correct: true },
            { text: "HO2", correct: false }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answer: [
            { text: "Venus", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: false }
        ]
    },
    {
        question: "What is the largest organ in the human body?",
        answer: [
            { text: "Heart", correct: false },
            { text: "Liver", correct: false },
            { text: "Skin", correct: true },
            { text: "Brain", correct: false }
        ]
    },
    {
        question: "What is the boiling point of water at sea level?",
        answer: [
            { text: "90°C", correct: false },
            { text: "100°C", correct: true },
            { text: "110°C", correct: false },
            { text: "120°C", correct: false }
        ]
    },
    {
        question: "What is the powerhouse of the cell?",
        answer: [
            { text: "Nucleus", correct: false },
            { text: "Mitochondria", correct: true },
            { text: "Endoplasmic Reticulum", correct: false },
            { text: "Golgi Apparatus", correct: false }
        ]
    },
    {
        question: "Who developed the theory of relativity?",
        answer: [
            { text: "Isaac Newton", correct: false },
            { text: "Albert Einstein", correct: true },
            { text: "Galileo Galilei", correct: false },
            { text: "Niels Bohr", correct: false }
        ]
    },
    {
        question: "What gas do plants absorb from the atmosphere during photosynthesis?",
        answer: [
            { text: "Oxygen", correct: false },
            { text: "Carbon Dioxide", correct: true },
            { text: "Nitrogen", correct: false },
            { text: "Methane", correct: false }
        ]
    },
    {
        question: "What is the speed of light in a vacuum?",
        answer: [
            { text: "300,000 km/s", correct: true },
            { text: "150,000 km/s", correct: false },
            { text: "200,000 km/s", correct: false },
            { text: "500,000 km/s", correct: false }
        ]
    },
    {
        question: "What is the most common element in the Earth's atmosphere?",
        answer: [
            { text: "Oxygen", correct: false },
            { text: "Nitrogen", correct: true },
            { text: "Carbon Dioxide", correct: false },
            { text: "Argon", correct: false }
        ]
    },
    {
        question: "What is the chemical formula for methane?",
        answer: [
            { text: "CH4", correct: true },
            { text: "C2H6", correct: false },
            { text: "C3H8", correct: false },
            { text: "C4H10", correct: false }
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
