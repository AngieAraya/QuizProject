<?php
require_once 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') :

    $username = htmlspecialchars($_POST['username']);
    $highScore = $_COOKIE['user_highscore'];

    $sql1 = "SELECT username FROM highscore";
    $stmt1 = $db->prepare($sql1);
    $stmt1->execute();

    $rowSQL = " SELECT MAX( score ) AS max FROM highscore ";
    $stmt3 = $db->prepare($rowSQL);
    $stmt3->execute();
    $rowi = $stmt3->fetch(PDO::FETCH_ASSOC);
    $largestNumber = $rowi['max'];

    if (!$stmt1->fetch(PDO::FETCH_ASSOC)) {

        $sql = "INSERT INTO highscore (username, score)
        VALUES (:username, :score )";

        $stmt = $db->prepare($sql);
        $stmt->bindParam(':username', $username);
        $stmt->bindParam(':score', $highScore);
        $stmt->execute();

        $inputOk = "You are added to High Score";
            echo "<script type='text/javascript'>alert('$inputOk');</script>";

        if ($highScore > $largestNumber && $highScore > 0) {
            $highScoreMsg = "Congratulations High Score!";
            echo "<script type='text/javascript'>alert('$highScoreMsg');</script>";
        }
    } else {

        $sql2 = "SELECT COUNT(*) FROM highscore where username = :username";
        $stmt2 = $db->prepare($sql2);
        $stmt2->bindParam(':username', $username);
        $stmt2->execute();

        $count = 0;
        foreach ($stmt2->fetch(PDO::FETCH_ASSOC) as $value) {
            $count = $value;

            if ($count == 1) {
                $message = "The username already exists, choose another one.";
                echo "<script type='text/javascript'>alert('$message');</script>";
            }
        }

        if ($count >= 1) {
        } else if ($count == 0) {
            $sql = "INSERT INTO highscore ( username, score)
                    VALUES ( :username, :score )";
            $stmt = $db->prepare($sql);
            $stmt->bindParam(':username', $username);
            $stmt->bindParam(':score', $highScore);
            $stmt->execute();
            $inputOk = "You are added to High Score";
            echo "<script type='text/javascript'>alert('$inputOk');</script>";

            if ($highScore > $largestNumber) {
                $highScoreMsg = "Congratulations High Score!";
                echo "<script type='text/javascript'>alert('$highScoreMsg');</script>";
            }
        }
    }

endif;

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Congratulations</title>
    <link rel="stylesheet" type="text/css" href="styles/end_page/style.css" />
</head>

<body>
    <div class="container">
        <div id="end" class="flex-center flex-column">
            <h1> You did it!</h1>
            <h2 id="finalScore" class="finalScore"></h2>
            <h2 id="totalRight" class="totalRight"></h2>
            <h3 id="procent"></h3>
            <form action="" name="myForm" method="POST" onsubmit="return validateForm()">
                <input type="text" name="username" id="username" placeholder="username" required>
                <button type="submit" class="btn">
                    Save to High score
                </button>
            </form>
            <a class="btn" href="http://localhost/Quiz-project/playQuiz.php">Play Again</a>
            <a class="btn" href="http://localhost/Quiz-project/highScore.php">High Scores</a>
            <a class="btn" href="http://localhost/Quiz-project/index.php">Go Home</a>
        </div>
    </div>
    <script src="end.js"></script>
</body>

</html>