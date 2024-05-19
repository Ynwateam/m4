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
    {
        question: "4+0",
        correct: 4,
        answers: [8,4,0,3],
    },
    {
        question: "x+99=17",
        correct: -82,
        answers: [82,116,-82,-116],
    },
    {
        question: "16:4=",
        correct: 4,
        answers: [7,4,0,3],
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
        btn_block += `<button class="btn" onclick="checkQuestion(${i})">${i}</button>`;

    }
    main.innerHTML += `<nav class="btn_block">${btn_block}</nav>`
}

function checkQuestion(num){
    console.log("a")
    let correct = allQuestions[currentQuestion].correct;
    if (num == correct) {
        countSuccess += 1;
    }
    currentQuestion++
    if (allQuestions.length > currentQuestion){
        generateQuestion()
    }
    else {
        stopQuiz()
    }
    function stopQuiz(){
        start.classList.remove("none");
        main.classList.add("none");
        end.classList.remove("none");
        end.innerHTML =`Решено ${countSuccess} из ${allQuestions.length}`;

        currentQuestion = 0;
        countSuccess = 0;
    }
}
