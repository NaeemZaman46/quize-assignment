const quizData = [
    {
        question: "What is the capital of France?",
        answers: {
            a: "Paris",
            b: "London",
            c: "Berlin"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: {
            a: "Jupiter",
            b: "Saturn",
            c: "Neptune"
        },
        correctAnswer: "a"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        answers: {
            a: "Harper Lee",
            b: "J.K. Rowling",
            c: "Stephen King"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the chemical symbol for water?",
        answers: {
            a: "H2O",
            b: "CO2",
            c: "O2"
        },
        correctAnswer: "a"
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: {
            a: "Leonardo da Vinci",
            b: "Pablo Picasso",
            c: "Vincent van Gogh"
        },
        correctAnswer: "a"
    }
];

const quizContainer = document.getElementById("quiz");
const submitButton = document.getElementById("submit");

function buildQuiz() {
    const output = [];

    quizData.forEach((questionData, questionIndex) => {
        const answers = [];

        for (const letter in questionData.answers) {
            answers.push(
                `<label>
                    <input type="radio" name="question${questionIndex}" value="${letter}">
                    ${letter}: ${questionData.answers[letter]}
                </label>`
            );
        }

        output.push(
            `<div class="quiz-item">
                <div class="question">${questionData.question}</div>
                <div class="answers">${answers.join("")}</div>
            </div>`
        );
    });

    quizContainer.innerHTML = output.join("");
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll(".answers");

    let score = 0;
    const userAnswers = [];

    quizData.forEach((questionData, questionIndex) => {
        const answerContainer = answerContainers[questionIndex];
        const selector = `input[name=question${questionIndex}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        userAnswers.push(userAnswer);

        if (userAnswer === questionData.correctAnswer) {
            score++;
        }
    });

    const result = `
        <div class="result">
            <h2>Your Score: ${score}/${quizData.length}</h2>
            <h3>Correct Answers:</h3>
            <ul>
                ${quizData.map((questionData, questionIndex) => {
                    return `<li>${questionData.question} - ${questionData.answers[questionData.correctAnswer]}</li>`;
                }).join("")}
            </ul>
            <h3>Your Answers:</h3>
            <ul>
                ${userAnswers.map((userAnswer, questionIndex) => {
                    return `<li>${quizData[questionIndex].question} - ${quizData[questionIndex].answers[userAnswer]}</li>`;
                }).join("")}
            </ul>
        </div>
    `;

    quizContainer.innerHTML = result;
}

buildQuiz();

submitButton.addEventListener("click", showResults);
