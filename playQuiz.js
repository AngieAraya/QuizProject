const DEFAULT_DIFFICULTY = "easy";
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterHtml = document.getElementById("questionCounter");
const correctQuestionHtml = document.getElementById("correctQuestion");
const scoreHtml = document.getElementById("score");

let currentQuestion = {};
let acceptingAnswers = false;
let points = 0;
let answer = 0;
let questionCounter = 0;
let availableQuestions = [];
// let difficulty =  localStorage.getItem('difficulty') != null ?  localStorage.getItem('difficulty')  : DEFAULT_DIFFICULTY;
let difficulty = localStorage.getItem("difficulty") ?? DEFAULT_DIFFICULTY;
let questions = [];

function getQuestions() {
  fetch(
    `https://opentdb.com/api.php?amount=10&difficulty=${difficulty}&type=multiple`
  )
    .then((res) => {
      return res.json();
    })
    .then((fetchedQuestion) => {
      questions = fetchedQuestion.results.map((loadedQuestion) => {
        const formattedQuestion = {
          question: loadedQuestion.question,
        };
        const answerChoices = [...loadedQuestion.incorrect_answers];

        formattedQuestion.answer = Math.floor(Math.random() * 3) + 1;

        answerChoices.splice(
          formattedQuestion.answer - 1,
          0,
          loadedQuestion.correct_answer
        );

        answerChoices.forEach((choice, index) => {
          formattedQuestion["choice" + (index + 1)] = choice;
        });

        return formattedQuestion;
      });
      startQuiz();
    })
    .catch((err) => {
      console.error(err);
    });
}

let SetDifficultyPoints = 0;
let correctAnswer = 1;
const AMOUNT_OF_QUESTIONS = 10;

if (difficulty == "easy") {
  SetDifficultyPoints = 1;
}
if (difficulty == "medium") {
  SetDifficultyPoints = 3;
}
if (difficulty == "hard") {
  SetDifficultyPoints = 5;
}

startQuiz = () => {
  questionCounter = 0;
  points = 0;
  answer = 0;
  availableQuestions = [...questions];

  fetchNewQuestion();
};

fetchNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter >= AMOUNT_OF_QUESTIONS) {
    localStorage.setItem("playerPoints", points);
    localStorage.setItem("rightAnswer", answer);
    return window.location.assign("http://localhost/Quiz-project/end.php");
  }
  questionCounter++;
  questionCounterHtml.innerText = `${questionCounter} / ${AMOUNT_OF_QUESTIONS}`;

  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuestions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    let classToApply = "incorrect";

    if (selectedAnswer == currentQuestion.answer) {
      classToApply = "correct";
    }

    if (classToApply === "correct") {
      incrementScore(SetDifficultyPoints);
      incrementAns(correctAnswer);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      fetchNewQuestion();
    }, 1000);
  });
});

incrementScore = (num) => {
  points += num;
  scoreHtml.innerText = points;
};

incrementAns = (num) => {
  answer += num;
  correctQuestionHtml.innerText = `${answer} / ${AMOUNT_OF_QUESTIONS}`;
};
