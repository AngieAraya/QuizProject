<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Angies Quiz</title>
    <link rel="stylesheet" type="text/css" href="../styles/app.css" />

</head>

<body>
    <div class="container">
        <div id="home" class="flex-center flex-column">
            <h1>Angies Quiz</h1>

            <div style="width:200px;">
                <select id="selectedOption" onchange="handleChange()">
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
            </div>

            <a class="btn" href="http://localhost/Quiz-project/phpSHIT/game.php">Play</a>
            <a class="btn" href="http://localhost/Quiz-project/phpSHIT/highScore.php">High Scores</a>
        </div>
    </div>
    <script src="game.js"></script>
</body>

</html>