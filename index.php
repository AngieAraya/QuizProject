<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quizzy</title>
    <link rel="stylesheet" type="text/css" href="styles/start_page/style.css" />

</head>

<body onload="setDefaultDifficulty()">
    <div class="container">
        <div id="home" class="flex-center flex-column">
            <h1>Quizzy</h1>
            <div class="infoText">
                <h2>Time to answer some questions!</h2> <br>
                <p> You start by choosing the difficulty level. For each correct answer, you get points.
                    depending on the level of the difficulty you get higher points.</p>
                <ul class="pointList">
                    <li>Easy gives 1 point</li>
                    <li>Medium 3 points</li>
                    <li>Hard 5 points</li>
                </ul>
                <p> When all questions are answered you will be able to see your result. If you like, you can join the High score list. Just write in your name and submit.
                    Good luck!</p>
            </div>

            <div>
                <select id="selectedOption" onchange="handleChange()">
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
            </div>

            <a class="btn" href="http://localhost/Quiz-project/playQuiz.php">Play</a>
            <a class="btn" href="http://localhost/Quiz-project/highScore.php">High Scores</a>
        </div>
    </div>
    <script src="index.js"></script>
</body>

</html>