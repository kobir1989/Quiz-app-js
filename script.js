const quizData = [
  {
    question:
      'Which built-in method calls a function for each element in the array?',
    a: 'while()',
    b: 'loop()',
    c: 'forEach()',
    d: 'None of the above',
    correct: 'c',
  },
  {
    question:
      'Which built-in method reverses the order of the elements of an array?',
    a: 'changeOrder(order)',
    b: 'reverse()',
    c: 'sort(order)',
    d: 'None of the above',
    correct: 'b',
  },
  {
    question:
      'Which of the following is a valid type of function javascript supports?',
    a: 'named function',
    b: 'anonymous function',
    c: 'Both the above',
    d: 'None of the above',
    correct: 'c',
  },
  {
    question: 'What year was JavaScript launched?',
    a: '1996',
    b: '1995',
    c: '1994',
    d: 'none of the above',
    correct: 'b',
  },
];

const quiz = document.getElementById('quiz');
const answerEls = document.getElementById('');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const a = document.getElementById('a');
const b = document.getElementById('b');
const c = document.getElementById('c');
const d = document.getElementById('d');
const m = document.getElementById('min');
const s = document.getElementById('sec');
const timeDiv = document.getElementById('timeDiv');
const start = document.getElementById('start');
const again = document.getElementById('again');
let currentQuiz = 0;
let score = 0;
let interval;

function loadQuiz() {
  if (currentQuiz > quizData.length - 1) {
    questionEl.innerHTML = `<h1>Your Total Score:  ${score} <h1/>`;
    a_text.innerHTML = ` Correct Answer is:  (c) forEach()`;
    b_text.innerHTML = ` Correct Answer is: (b) reverse()`;
    c_text.innerHTML = ` Correct Answer is: (c) Both the above`;
    d_text.innerHTML = ` Correct Answer is: (b) 1995`;
    submitBtn.disabled = true;
    again.classList.remove('hidden');
    submitBtn.classList.add('hidden');
    clearInterval(interval);
    m.innerText = '00';
    s.innerText = '00';
  } else {
    questionEl.innerHTML = quizData[currentQuiz].question;
    a_text.innerHTML = quizData[currentQuiz].a;
    b_text.innerHTML = quizData[currentQuiz].b;
    c_text.innerHTML = quizData[currentQuiz].c;
    d_text.innerHTML = quizData[currentQuiz].d;
  }

  deselectAnswers();
}
loadQuiz();

function deselectAnswers() {
  a.checked = false;
  b.checked = false;
  c.checked = false;
  d.checked = false;
}

function getSelected(quiz) {
  if (a.checked && a.value === quizData[quiz].correct) {
    score += 1;
    console.log(quizData[quiz].correct, '1');
  }
  if (b.checked && b.value === quizData[quiz].correct) {
    score += 1;
    console.log(quizData[quiz].correct, '2');
  }
  if (c.checked && c.value === quizData[quiz].correct) {
    score += 1;
    console.log(quizData[quiz].correct, '3');
  }
  if (d.checked && d.value === quizData[quiz].correct) {
    score += 1;
    console.log(quizData[quiz].correct, '4');
  }
  console.log(score);
}

//timeout
let minute = 5;
let time = minute * 60;

function timeCount() {
  if (time < 0) {
    clearInterval(interval);
    timeDiv.innerHTML = `<h2>Time Over!</h2>`;
    questionEl.innerHTML = `<h1>Your Total Score:  ${score} <h1/>`;
    a_text.innerHTML = ` Correct Answer is:  (c) forEach()`;
    b_text.innerHTML = ` Correct Answer is: (b) reverse()`;
    c_text.innerHTML = ` Correct Answer is: (c) Both the above`;
    d_text.innerHTML = ` Correct Answer is: (b) 1995`;
    submitBtn.disabled = true;
  }
  let min = Math.floor(time / 60);
  let sec = Math.floor(time % 60);
  m.innerText = min;
  s.innerText = sec;
  time--;
}

start.addEventListener('click', () => {
  interval = setInterval(timeCount, 1000);
  submitBtn.classList.remove('hidden');
  start.classList.add('hidden');
});

submitBtn.addEventListener('click', () => {
  getSelected(currentQuiz);
  currentQuiz++;
  loadQuiz();
});
again.addEventListener('click', () => {
  location.reload();
});
