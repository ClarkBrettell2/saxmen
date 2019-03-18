const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
{
    question: "Who shot Mr Burns?",
    choice1: "Maggie Simpson",
    choice2: "Joey joe joe Junior Shabbado",
    choice3: "Homer Simpson" ,
    choice4: "Jebadiah Springfield",
    answer: 1
},

{
    question: "Who is married to Marge?",
    choice1: "Ned",
    choice2: "Joey joe joe Junior Shabbado",
    choice3: "Homer Simpson" ,
    choice4: "Lionel Hutz",
    answer: 3

},

{
    question: "Who plays Mcbain?",
    choice1: "Moe Syzlak",
    choice2: "Rainier Wolfcastle",
    choice3: "Homer Simpson" ,
    choice4: "Todd Flanders",
    answer: 2

}
,

{
    question: "Who is the bartender?",
    choice1: "Moe Syzlak",
    choice2: "Karl",
    choice3: "Lenny" ,
    choice4: "Rod Flanders",
    answer: 1

},

{
    question: "What instruments does Lisa play?",
    choice1: "Tennis Raquet",
    choice2: "Air Guitar",
    choice3: "Saxophone" ,
    choice4: "Trombone",
    answer: 3

}
]

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 4;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions]
    console.log(availableQuestions);
}

startGame();