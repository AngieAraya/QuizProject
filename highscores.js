const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

radioBtnOne = document.querySelector("#one");
radioBtnTwo = document.querySelector("#two");
//console.log(highScores);
    //map tar en inkomande array (highscores) och tillåts att konvertera each of them item to sometihing new in a new array. Vi tar in score objektet och returnerar en string vesion av en li version som har det vi behöver. 
    highScoresList.innerHTML = highScores.map( score => {
        return `<li class="high-score">${score.name} - ${score.score}</li>`;  
    }) 
    .join("");

radioBtnOne.addEventListener("click", function () {
    if (radioBtnOne.value == "one") {
        highScoresList.innerHTML = highScores.map( score => {
            return `<li class="high-score">${score.name} - ${score.score}</li>`;  
        }) 
        .join("");
    }
  });
radioBtnTwo.addEventListener("click", function () {
    if (radioBtnTwo.value == "two") {
        console.log('två');   
        highScoresList.innerHTML = highScores.map( score => {
            return `<li class="high-score">${score.name} - ${score.score}</li>`;  
        }).reverse().join("");
     
    }
  });





    

    // console.log(highScores);
    // console.log(reverse);
    
    