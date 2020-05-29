const username = document.getElementById("username");
const finalScore = document.getElementById("finalScore");
const totalRight = document.getElementById("totalRight");
const procent = document.getElementById("procent");
const playerPoints = localStorage.getItem("playerPoints");
const rightAnswer = localStorage.getItem("rightAnswer");

let math = rightAnswer / 0.1;
finalScore.innerText = `Total ${playerPoints} Points`;
totalRight.innerText = `Correct answer ${rightAnswer} / 10`;
procent.innerText = `${math} % right`;

function validateLetters(inputText) {
  var letters = /^[a-öA-Ö\s]+$/;
  if (inputText.value.match(letters)) {
    return true;
  } else {
    return false;
  }
}

function validateForm() {
    const alerts = document.querySelectorAll(".alert");
    let error = false;

  var x = document.forms["myForm"]["username"].value;
  console.log("whitespace?" + x);
  console.log("whitespace?" + x);
  
  let remText = x.replace(/\s/g, "");

  if (x == "") {
   // alert("Name must be filled out");
   let alert = document.createElement("span");
   alert.classList.add("alert");
   alert.textContent = "Name must be filled out";
   username.after(alert);
  setTimeout(function(){
    alert.remove()
   }, 3000)
    error = true;
    return false;
  }

  if (remText.length < 3 || remText.length > 20) {
  //  alert("Name must be between 3 - 20 letters ");
  let alert = document.createElement("span");
  alert.classList.add("alert");
  alert.textContent = "Name must be between 3 - 20 letters ";
  username.after(alert);
  setTimeout(function(){
    alert.remove()
  }, 3000)

    error = true;
    return false;
  }
  if (!validateLetters(username)) {
    // alert("Name can only contain letters");
    let alert = document.createElement("span");
    alert.classList.add("alert");
    alert.textContent = "Name can only contain letters";
    username.after(alert);
    setTimeout(function(){
      alert.remove()
     }, 3000)
    error = true;
    return false;
  } else {
    saveScore();
  }

  if (error) {
    return false;
  } else {
    return true;
  }
}

function saveScore() {
  document.cookie = `user_highscore=${playerPoints}`;

}
