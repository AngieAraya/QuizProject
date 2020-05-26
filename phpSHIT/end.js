const username = document.getElementById("username");
const finalScore = document.getElementById("finalScore");
const totalRight = document.getElementById("totalRight");
const procent = document.getElementById("procent");
const mostRecentScore = localStorage.getItem("mostRecentScore");
const rightAns = localStorage.getItem("rightAns");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
// const MAX_HIGH_SCORES = 5;

let math = rightAns / 0.1;
finalScore.innerText = `Total ${mostRecentScore} Points`;
totalRight.innerText = `Total ${rightAns} Right`;
procent.innerText = `${math} % right`;
// procent.innerText = `Total ${rightAns} Right` ;
// console.log(math + 'matte');

// console.log(mostRecentScore + "hej");

function validateLetters(inputText) {
  var letters = /^[a-öA-Ö\s]+$/;
  if (inputText.value.match(letters)) {
    return true;
  } else {
    return false;
  }
}

function validateForm() {
  var x = document.forms["myForm"]["username"].value;
console.log(x , 'hej');
  let remText = x.replace(/\s/g, "");
//   let xLetters = remText.length;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }

  if (remText.length < 3 || remText.length > 20) {
    alert("ska vara mellan 3 - 20 bokstäver");
    return false;
  }
  if (!validateLetters(username)) {
    alert("bara bokstäver");
    return false;

    // let alert = document.createElement("span");
    // alert.classList.add("alert");
    // alert.textContent = "Namn får endast innehålla bokstäver";
    // username.after(alert);
    // error = true;
  } else {
    saveScore();
  }
}

function saveScore() {

  //sparar i cookies för att sen kunna hämta i backend via en $cookies request
  document.cookie = `user_highscore=${mostRecentScore}`;

  const score = {
    score: mostRecentScore,
    name: username.value,
  };
  //lägger till score till array listan
  highScores.push(score);
  //sorterar arrayen highscore i localstorage
  highScores.sort((a, b) => {
    return b.score - a.score;
  });
  highScores.splice(5);
  //uppdatera localstorage. OBS måste tringify när man setaritem
  localStorage.setItem("highScores", JSON.stringify(highScores));

  // console.log(highScores);
}
