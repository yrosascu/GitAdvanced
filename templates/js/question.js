const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = true;
let availableQuestions =[];

/*   Agregar funcion de escucha del microfono  */
var answerText = document.getElementById("answerQuestion")
var str = answerText.innerHTML;

answerText.innerHTML = "";

var speed = 40;
var iteratorLetterAnswer = 0;
// fin de funcion de escucha del microfono

let questions = [
    {
        question: "¿Hace cuánto tiempo se inicio el dolor?",
        answer: "3 días",
        priority: false
    },
    {
        question: "Indique el tipo del dolor del paciente",
        choice1: "Pulsátil",
        choice2: "Palpitante",
        choice3: "Opresivo",
        choice4: "Punzante",
        choice5: "Lacinante",
        choice6: "Penetrante",
        answer: 1,
        priority: true
    },
    {
        question: "¿Es un dolor unilateral o bilateral?",
        priority: true
    },
    {
        question: "Especifíque en qué región del cerebro se ubica el dolor",
        choice1: "Occipital",
        choice2: "Parietal",
        choice3: "Frontal",
        choice4: "Orbital",
        choice5: "Supraorbital",
        choice6: "Facial",
        priority: false
    }
]

function startInterview() {
    questionCounter = 0;
    availableQuestions = [... questions];
    console.log(availableQuestions)

    getNewQuestion();
}

function getNewQuestion(){
    questionCounter++;
    getAnswer()
}

function getAnswer(){
    if(iteratorLetterAnswer < str.length){
        answerText.innerHTML += str.charAt(iteratorLetterAnswer);
        iteratorLetterAnswer++;
        setTimeout(getAnswer, speed)
    }
}

startInterview();