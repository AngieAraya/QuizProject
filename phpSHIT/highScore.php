<?php
 require_once 'db.php';
/*************** HÖGST FÖRST****************/

$sql = "SELECT username, score FROM highscore ORDER BY score DESC";
$stmt = $db->prepare($sql);
$stmt->execute();

$scoreTable = "<table class='tableDesc'>";
$scoreTable .= "<tr>
         <th>Username</th>
         <th>Score</th>
     </tr>";

while ($row = $stmt->fetch(PDO::FETCH_ASSOC)):
        $username = htmlspecialchars($row['username']);
        $score =htmlspecialchars($row['score']);
        $scoreTable .= "<tr>
                <td>$username</td>
                <td>$score</td>
            </tr>";

endwhile;

$scoreTable .= '</table>';

/*************** LÄGST FÖRST****************/

$sql = "SELECT username, score FROM highscore ORDER BY score ASC";
$stmt = $db->prepare($sql);
$stmt->execute();

$scoreTable2 = "<table class='tableAsc hide'>";
$scoreTable2 .= "<tr>
         <th>Username</th>
         <th>Score</th>
     </tr>";

while ($row = $stmt->fetch(PDO::FETCH_ASSOC)):
        $username = htmlspecialchars($row['username']);
        $score =htmlspecialchars($row['score']);
        $scoreTable2 .= "<tr>
                <td>$username</td>
                <td>$score</td>
            </tr>";

endwhile;

$scoreTable2 .= '</table>';


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="../styles/app.css"/>
    <link rel="stylesheet" type="text/css" href="../styles/highscores.css"/>
    <title>High Score</title>
</head>
<body>
    <div class="container">
        <div>
        <input type="radio" id="high" name="alla" checked="checked">
        <label for="hög">högst först</label>
        <input type="radio" id="low" name="alla">
        <label for="låg">lägst först</label>
        </div>
        <div id="highscores" class="flex-center flex-column">
            <h1 id="finalScore"> High Scores</h1>
            <!-- <ul id="highScoresList"></ul> -->
            <?php 
             echo $scoreTable; 
             echo $scoreTable2; 
             ?>
            <a class="btn" href="http://localhost/Quiz-project/phpSHIT/firstPage.php">Go home</a>
        </div>
    </div>
    <script src="highS.js"></script>
</body>
</html>
 