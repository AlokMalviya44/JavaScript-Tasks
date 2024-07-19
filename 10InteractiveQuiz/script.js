const questions = [
    {
        question: "What is the capital of France?",
        answers: ["Paris", "London", "Berlin","Marseille"],
        correct: 0
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: ["Earth", "Saturn", "Jupiter","Venus"],
        correct: 2
    },
    {
        question: "Most modern TV's draw power even if turned off. The circuit the power is used in does what function?",
        answers: ["Sound", "Remote Control", "Color Balance", "High Voltage"],
        correct: 1
    },
    {
        question: "Who developed Yahoo?",
        answers: ["Dennis Ritchie & Ken Thompson", "David Filo & Jerry Yang", "Vint Cerf & Robert Kahn", "Steve Case & Jeff Bezos"],
        correct: 1
    }
    // Add more questions here
];

const quizContainer = document.querySelector(".quiz-container");
const questionsElements = quizContainer.querySelectorAll(".question");

questionsElements.forEach((questionElement, index) => {
    const submitButton = questionElement.querySelector(".submit");
    const resultElement = questionElement.querySelector(".result");

    submitButton.addEventListener("click", () => {
        const selectedAnswer = questionElement.querySelector("input[type='radio']:checked");
        if (selectedAnswer) {
            const answerIndex = Array.prototype.indexOf.call(questionElement.querySelectorAll("input[type='radio']"), selectedAnswer);
            if (answerIndex === questions[index].correct) {
                resultElement.textContent = "Correct!";
                resultElement.classList.add("correct");
            } else {
                resultElement.textContent = "Incorrect. The correct answer is " + questions[index].answers[questions[index].correct];
                resultElement.classList.add("incorrect");
            }
        } else {
            resultElement.textContent = "Please select an answer.";
        }
    });
});