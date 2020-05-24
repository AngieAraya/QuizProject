const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
 const finalScore = document.getElementById('finalScore');
 const totalRight = document.getElementById('totalRight');
 const procent = document.getElementById('procent');
 const mostRecentScore = localStorage.getItem('mostRecentScore');
 const rightAns = localStorage.getItem('rightAns');

 const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    // console.log(highScores);
const MAX_HIGH_SCORES = 5;

// finalScore.innerText = 'Total pints ' + mostRecentScore ; 
// totalRight.innerText = 'Total Right ' + rightAns; 
let math = rightAns / 0.1;
finalScore.innerText = `Total ${mostRecentScore} Points` ; 
totalRight.innerText = `Total ${rightAns} Right` ; 
procent.innerText = `${math} % right` ; 
// procent.innerText = `Total ${rightAns} Right` ; 
// console.log(math + 'matte');

// console.log(mostRecentScore + "hej");

//tarbort disabled figuren
// username.addEventListener("keyup", () => {
//     //console.log(username.value);
//     saveScoreBtn.disabled = !username.value;
// });

// saveScoreBtn.addEventListener('submit', function(){
//     return validateInput()

// });
function validateLetters(inputText) {
    var letters = /^[a-öA-Ö\s]+$/;
    if (inputText.value.match(letters)) {
      return true;
    } else {
      return false;
    }
  }

function validateForm(){
    var x = document.forms["myForm"]["username"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
// alert(x);
// alert(x.length);    
    if (x.length < 3 || x.length > 20) {
      alert('ska vara mellan 3 - 20 bokstäver');
      return false;
    }
       if (!validateLetters(username)) {
        alert('bara bokstäver');
        return false;

        // let alert = document.createElement("span");
        // alert.classList.add("alert");
        // alert.textContent = "Namn får endast innehålla bokstäver";
        // username.after(alert);
        // error = true;
    }
      else{
         saveScore();
    }
  
}
    // let highScoreNames = highScores.map(highScore => highScore.name);

    // if(highScoreNames.includes(username.value)){
    //     alert('namnet finns redan');
    // }

    // // else if (!highScoreNames.includes(username.value)) {
    //     //     //console.log(username.value.length);
    //     //       saveScore();
    //     // }
    // }
    
    
    function saveScore() {
        // e.preventDefault();
        // console.log("clicked the saved buttooon");
        // window.location.href="end.php?uid=1";

        //sparar i cookies för att sen kunna hämta i backend via en $cookies request
       document.cookie=`user_highscore=${mostRecentScore}`;

         const score = {
             //här slumpar man bara
             // score: Math.floor(Math.random() * 100),
             score: mostRecentScore,
             name: username.value
         };
         //lägger till score till array listan
         highScores.push(score);
         //sorterar arrayen highscore i localstorage
         highScores.sort( (a,b) => {
             return b.score - a.score;
         });
         highScores.splice(5);
         //uppdatera localstorage. OBS måste tringify när man setaritem
         localStorage.setItem("highScores", JSON.stringify(highScores));
     
        // console.log(highScores);
    
 }
