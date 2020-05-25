const DEFAULT_DIFFICULTY = "easy";
let question = document.getElementById("question");
// console.log(question);
let choices = Array.from(document.getElementsByClassName("choice-text"));
// console.log(choices);
let questionCounterText = document.getElementById("questionCounter");
let correctQuestionText = document.getElementById("correctQuestion");
let scoreText = document.getElementById("score");

let currentQuestion = {};
let acceptiongAnswers = false;
let score = 0;
let ans = 0;
let questionCounter = 0;
let availableQuestions = [];
// let difficulty =  localStorage.getItem('difficulty') != null ?  localStorage.getItem('difficulty')  : DEFAULT_DIFFICULTY;
let difficulty = localStorage.getItem("difficulty") ?? DEFAULT_DIFFICULTY;

let questions = [];

//  getQuestions(difficulty);

function getQuestions() {
  fetch(
    `https://opentdb.com/api.php?amount=10&difficulty=${difficulty}&type=multiple`
  )
    .then((res) => {
      return res.json();
    })
    .then((loadedQuestions) => {
      //console.log(loadedQuestions.results);
      // questions = loadedQuestions;
      questions = loadedQuestions.results.map((loadedQuestion) => {
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
        console.log(formattedQuestion);

        return formattedQuestion;
      });
      startGame();
    })
    .catch((err) => {
      console.error(err);
    });
}

const CORRECT_BONUS = 10;
const CORRECT_ANS = 1;
const MAX_QUESTIONS = 3;

startGame = () => {
  questionCounter = 0;
  score = 0;
  ans = 0;
  availableQuestions = [...questions];

  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    // go to the end page
    //  console.log(question);
    console.log(score + "score");
    console.log(ans + "ans");

    localStorage.setItem("mostRecentScore", score);
    localStorage.setItem("rightAns", ans);
    return window.location.assign(
      "http://localhost/Quiz-project/phpSHIT/end.php"
    );
  }
  questionCounter++;
  questionCounterText.innerText = `${questionCounter} / ${MAX_QUESTIONS}`;

  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  // console.log("angie ", availableQuestions);
  console.log("choices ", choices);

  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
    // console.log(number);
    // console.log(currentQuestion);
    //  console.log(choice);
  });
  availableQuestions.splice(questionIndex, 1);
  acceptiongAnswers = true;
};

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    //console.log(e.target);
    if (!acceptiongAnswers) return;

    acceptiongAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];
    //console.log(selectedChoice);
    //console.log(selectedAnswer);
    let classToApply = "incorrect";

    if (selectedAnswer == currentQuestion.answer) {
      classToApply = "correct";
    }

    if (classToApply === "correct") {
      incrementScore(CORRECT_BONUS);
      incrementAns(CORRECT_ANS);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
    // console.log(classToApply);

    //funkar också med ternery operatorn.
    // const classToApply =
    // selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    // console.log(selectedAnswer == currentQuestion.answer);
  });
});

incrementScore = (num) => {
  score += num;
  scoreText.innerText = score;
};

incrementAns = (num) => {
  ans += num;
  correctQuestionText.innerText = `${questionCounter} / ${MAX_QUESTIONS}`;
};
