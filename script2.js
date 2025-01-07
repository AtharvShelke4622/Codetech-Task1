let questions = [
    {
        question: "Who was the first President of the United States?",
        answer: [
            { text: "George Washington", correct: true },
            { text: "Thomas Jefferson", correct: false },
            { text: "Abraham Lincoln", correct: false },
            { text: "John Adams", correct: false }
        ]
    },
    {
        question: "In which year did World War II end?",
        answer: [
            { text: "1945", correct: true },
            { text: "1939", correct: false },
            { text: "1918", correct: false },
            { text: "1950", correct: false }
        ]
    },
    {
        question: "Who was the leader of the Soviet Union during World War II?",
        answer: [
            { text: "Leon Trotsky", correct: false },
            { text: "Joseph Stalin", correct: true },
            { text: "Vladimir Lenin", correct: false },
            { text: "Nikita Khrushchev", correct: false }
        ]
    },
    {
        question: "Which empire was ruled by Julius Caesar?",
        answer: [
            { text: "Roman Empire", correct: true },
            { text: "Ottoman Empire", correct: false },
            { text: "Byzantine Empire", correct: false },
            { text: "Persian Empire", correct: false }
        ]
    },
    {
        question: "Which ancient civilization built the pyramids?",
        answer: [
            { text: "Egyptians", correct: true },
            { text: "Romans", correct: false },
            { text: "Greeks", correct: false },
            { text: "Aztecs", correct: false }
        ]
    },
    {
        question: "Who was the first man to step on the moon?",
        answer: [
            { text: "Neil Armstrong", correct: true },
            { text: "Buzz Aldrin", correct: false },
            { text: "Yuri Gagarin", correct: false },
            { text: "Michael Collins", correct: false }
        ]
    },
    {
        question: "Which war was fought between the North and South regions of the United States?",
        answer: [
            { text: "The Civil War", correct: true },
            { text: "World War I", correct: false },
            { text: "World War II", correct: false },
            { text: "The Revolutionary War", correct: false }
        ]
    },
    {
        question: "Who was the famous queen of ancient Egypt?",
        answer: [
            { text: "Cleopatra", correct: true },
            { text: "Nefertiti", correct: false },
            { text: "Hatshepsut", correct: false },
            { text: "Isis", correct: false }
        ]
    },
    {
        question: "Who discovered America in 1492?",
        answer: [
            { text: "Christopher Columbus", correct: true },
            { text: "Ferdinand Magellan", correct: false },
            { text: "Marco Polo", correct: false },
            { text: "Vasco da Gama", correct: false }
        ]
    },
    {
        question: "What year did the French Revolution begin?",
        answer: [
            { text: "1776", correct: false },
            { text: "1789", correct: true },
            { text: "1799", correct: false },
            { text: "1812", correct: false }
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
