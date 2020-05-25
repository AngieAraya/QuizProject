<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Angies Quizz</title>
    <link rel="stylesheet" type="text/css" href="../styles/app.css"/>
    <link rel="stylesheet" type="text/css" href="../styles/game.css"/>
</head>
<body onload="getQuestions()">
    <div class="container">
        <div id="game" class="justify-center flex-column">
          <div id="hud">
            <div id="hud-item">
              <p class="hud-prefix">
                Question
              </p>
              <h1 class="hud-main-text" id="questionCounter">
              
              </h1>
            </div>
            <div id="hud-item">
              <p class="hud-prefix">
                QuestionRight
              </p>
              <h1 class="hud-main-text" id="correctQuestion">
                0
              
              </h1>
            </div>
            <div id="hud-item">
              <p class="hud-prefix">
                Score
              </p>
              <h1 class="hud-main-text" id="score">
                0
              </h1>
            </div>
          </div>
            <h2 id="question">Vad är svaret till frågan?</h2>
            <div class="choice-container">
              <p class="choice-prefix">A</p>
              <p class="choice-text" data-number="1">Choice 1</p>
            </div>
            <div class="choice-container">
              <p class="choice-prefix">B</p>
              <p class="choice-text" data-number="2">Choice 2</p>
            </div>
            <div class="choice-container">
              <p class="choice-prefix">C</p>
              <p class="choice-text" data-number="3">Choice 3</p>
            </div>
            <div class="choice-container">
              <p class="choice-prefix">D</p>
              <p class="choice-text" data-number="4">Choice 4</p>
            </div>
        </div>
    </div>    
    <script src="game.js"></script>
</body>
</html>