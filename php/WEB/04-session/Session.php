<?php

//Initialize user session.
//(must do it on each php file while needs the session):
    session_start();

    $userColor = "";
    if (isset($_POST["save"])){
        $_SESSION["UserColor"] = "green"; //write value
    }
    elseif (isset($_POST["read"])){
        if (isset($_SESSION["UserColor"])){
            $userColor = $_SESSION["UserColor"]; //read value
        }
    }
    elseif (isset($_POST["remove"])){
        unset($_SESSION["UserColor"]); //removes specific value from session
    }
    elseif (isset($_POST["clear"])){
        session_destroy();
    }
?>

<!DOCTYPE html>
<html>
    <body>
        <form method="post">
            <input type="submit" value="SAVE item to session" name="save" />
            <input type="submit" value="READ item from session" name="read" />
            <input type="submit" value="REMOVE item from session" name="remove"/>
            <input type="submit" value="Clear all Session" name="clear"/>
            <hr/>
            <?php
                if ($userColor != ""){
                    echo "<p style='color: $userColor;'>User Color: $userColor</p>";
                }
            ?>
        </form>
    </body>
</html>