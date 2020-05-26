<?php
require_once 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') :

    $sql1 = "SELECT username FROM highscore";
    $stmt1 = $db->prepare($sql1);
    $stmt1->execute();

    $highScore = $_COOKIE['user_highscore'];
    $username = htmlspecialchars($_POST['username']);

    $rowSQL =" SELECT MAX( score ) AS max FROM highscore ";
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
//OBS! ta bart && $hoghscore >  0 om det knasar
     if($highScore > $largestNumber && $highScore > 0 ){
        $highScoreMsg = "HIGH SCOREEEEE CONGR";
        echo "<script type='text/javascript'>alert('$highScoreMsg');</script>";
            // echo '<h1>Du Har fan max poäng!</h1>';
        }

    } else {

        $sql2 = "SELECT COUNT(*) FROM highscore where username = :username";
        $stmt2 = $db->prepare($sql2);
        $stmt2->bindParam(':username', $username);
        $stmt2->execute();

        $count = 0;
        foreach ($stmt2->fetch(PDO::FETCH_ASSOC) as $value) {
            $count = $value;
            // print_r ($value);

            if($count == 1) {
                // echo 'bajs ha ' . $count;
                 $message = "the username already exists, choose another one.";
                 echo "<script type='text/javascript'>alert('$message');</script>";
                 // echo '<h2>Username already exist</h2>';
                
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

     if($highScore > $largestNumber){
        $highScoreMsg = "HIGH SCOREEEEE CONGR";
        echo "<script type='text/javascript'>alert('$highScoreMsg');</script>";
            // echo '<h1>Du Har fan max poäng!</h1>';
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
    <title>grattis</title>
    <link rel="stylesheet" type="text/css" href="../styles/app.css" />
</head>

<body>
    <div class="container">
        <div id="end" class="flex-center flex-column">
            <h1> You did it!</h1>
            <h2 id="finalScore"></h2>
            <h2 id="totalRight"></h2>
            <h3 id="procent"></h3>
            <form action="" name="myForm" method="POST" onsubmit="return validateForm()">
                <input type="text" name="username" id="username" placeholder="username" required>
                <button type="submit" class="btn">
                    Save
                </button>
            </form>
            <a class="btn" href="http://localhost/Quiz-project/phpSHIT/game.php">Play Again</a>
            <a class="btn" href="http://localhost/Quiz-project/phpSHIT/highScore.php">High Scores</a>
            <a class="btn" href="http://localhost/Quiz-project/phpSHIT/firstPage.php">Go Home</a>
        </div>
    </div>
    <script src="end.js"></script>
</body>

</html>