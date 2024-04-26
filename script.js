// Array of questions along with their answers
let questionSet = [
    { question: "How many CIT concentrations are there?", answer: "4" },
    { question: "What is the highest paying CIT concentration?", answer: "Web Development" },
    { question: "Which of the following is not a CIT career?", answer: "Mechanical Administrator" },
    { question: "True or False: CIT is a 6 year degree?", answer: "False" },
    { question: "What is the percentage outlook of technical writers between 2022 & 2032?", answer: "10%" },
    { question: "What is the name of a legally/ethically employed hacker?", answer: "White-Hat Hacker" },
    { question: "True or False: CIT does not have a masters program?", answer: "False" },
    { question: "Which of the following is not a CIT career?", answer: "Mechanical Administrator" },
    { question: "Are Web/Software Developers able to work remote?", answer: "Yes" },
    { question: "What is the average salary of a Game Developer?", answer: "$70,000/year" }
];

let questionNumber = 0;

// Function to set up the quiz question based on button click
const setupQuestion = (num) => {
    questionNumber = num - 1;
    document.querySelector("#answer").textContent = "";
    document.querySelector("#question").textContent = questionSet[questionNumber].question;
};

// Function to check the answer when Check Answer button is clicked
const checkAnswer = () => {
    document.querySelector("#answer").textContent = `Answer: ${questionSet[questionNumber].answer}`;
};

// Add and event listener to question buttons
document.querySelectorAll(".qBtn").forEach(button => {
    button.addEventListener("click", (e) => {
        setupQuestion(parseInt(e.target.getAttribute("num")));
    });
});

// Add an event listener to Check Answer button
document.querySelector("#check").addEventListener("click", checkAnswer);