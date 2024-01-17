const quizData = [
    {
        question: 'what is full form of js?',
        a: 'java scope',
        b: 'just secret',
        c: 'java script',
        d: 'jack skill',
        correct: 'c'
    }, {
        question: 'what is the most used programming language in 2019?',
        a: 'Java',
        b: 'C',
        c: 'Pthon',
        d: 'JavaScript',
        correct: 'a'
    }, {
        question: 'What does css stand for?',
        a: 'Color style style',
        b: 'Color style sheet',
        c: 'cascading style sheets',
        d: 'JavaScript',
        correct: 'c'
    }, {
        question: 'what does html stand for?',
        a: 'honest text most limit',
        b: 'higher task markup language',
        c: 'host track mashup lol',
        d: 'hypertext markup language',
        correct: 'd'
    }, {
        question: 'what year was js introduced?',
        a: '1996',
        b: '1195',
        c: '1994',
        d: 'none of the above',
        correct: 'd'
    },
];

const quizContainer = document.querySelector('.quiz-container');
const questionEl = document.getElementById('question');

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.getElementById('showscore');
let currentQuiz = 0;
let score = 0;

loadQuiz();


// FUNCTIONS
function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    // currentQuiz++;
}

function getCheckAnswer() {
    let answer;

    answers.forEach((currentAnswerEl) => {
        if (currentAnswerEl.checked) {
            answer = currentAnswerEl.id;
        }
    });
    return answer;
};

function deselectAll(){
    answers.forEach(function(currentAnswerEl){
        currentAnswerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {


    const checkedAnswer = getCheckAnswer();

    // checking if ans is right
    if (checkedAnswer === quizData[currentQuiz].correct) {
        score++;
    };

    deselectAll();

    currentQuiz++;

    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        showScore.innerHTML = `
                <h3>you have scored: ${score}/${quizData.length}</h3>
                <button class='btn' onclick='location.reload()'>play again</button>
                `;
        showScore.classList.remove('showarea');
    }
})
