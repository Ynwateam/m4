let start = document.getElementById("start")
let end = document.getElementById("end")
let main = document.getElementById("main")

let currentQuestion = 0
let countSuccess = 0

let allQuestions = [
    {
        question: "2+2",
        correct: 4,
        answers: [1,2,4,5],
    },
    {
        question: "4+4",
        correct: 8,
        answers: [8,2,4,5],
    },
];
start.addEventListener("click", startProgram)
function startProgram(){
    start.classList.add("none");
    end.classList.add("none");
    main.classList.remove("none");
    generateQuestion()
}
function generateQuestion(){
    let question = allQuestions[currentQuestion].question
    main.innerHTML = `<h3 class="question">${question}</h3>`;

    let answers = allQuestions[currentQuestion].answers;
    let btn_block = ''
    for (let i of answers){
        btn_block += `<button class="btn">${i}</button>`;

    }
    main.innerHTML += `<nav class="btn_block">${btn_block}</nav>`
}
