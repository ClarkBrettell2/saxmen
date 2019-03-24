const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressbarfull = document.getElementById('progressbarfull');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [{
        question: "Who shot Mr Burns?",
        choice1: "Maggie Simpson",
        choice2: "Joey joe joe Junior Shabbado",
        choice3: "Homer Simpson",
        choice4: "Jebadiah Springfield",
        answer: 1
    },

    {
        question: "Who is married to Marge?",
        choice1: "Ned",
        choice2: "Joey joe joe Junior Shabbado",
        choice3: "Homer Simpson",
        choice4: "Lionel Hutz",
        answer: 3

    },

    {
        question: "Who plays Mcbain?",
        choice1: "Moe Syzlak",
        choice2: "Rainier Wolfcastle",
        choice3: "Homer Simpson",
        choice4: "Todd Flanders",
        answer: 2

    },

    {
        question: "Who is the bartender?",
        choice1: "Moe Syzlak",
        choice2: "Karl",
        choice3: "Lenny",
        choice4: "Rod Flanders",
        answer: 1

    },

    {
        question: "What instrument does Lisa play?",
        choice1: "Tennis Raquet",
        choice2: "Air Guitar",
        choice3: "Saxophone",
        choice4: "Trombone",
        answer: 3

    }
]

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions]
    getNewQuestion();
}

getNewQuestion = () => {

    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        return window.location.assign('/end.html');
    }

    questionCounter++;
    progressText.innerText = "Question " + questionCounter + "/" + MAX_QUESTIONS;
    progressbarfull.style.width = `${(questionCounter / MAX_QUESTIONS )*100}%`;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;

};

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        const classToApply =
            selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

        if (classToApply === 'correct') {
            incrementScore(CORRECT_BONUS);
        }

        selectedChoice.parentElement.classList.add(classToApply);
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);


    });
});

incrementScore = num => {
    score += num;
    scoreText.innerText = score;

}
startGame();