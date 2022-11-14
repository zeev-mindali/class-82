<!DOCTYPE html>
<html>
    <body>
        <?php
        if (isset($_COOKIE["UserColor"])){
            $color = $_COOKIE["UserColor"];
            echo "<p style=\"color: $color;\">Cooke UserColor has been loaded. value: $color.</p>";
        } else {
            echo "<p>There is no cookie with the name : UserColor.</p>";
        }
        ?>
    </body>
</html>