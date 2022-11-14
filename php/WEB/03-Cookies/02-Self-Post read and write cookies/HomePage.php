<?php
    if (isset($_POST["fullName"])){
        //save cookie:
        setcookie("UserFullName", $_POST["fullName"],time()+3600);
        //note : setcookie must be before the <html> tag

        //redirect to same page, so we could take the cookie immediately:
        header("Location: HomePage.php");
    }
?>

<!DOCTYPE html>
<html>
    <body>
        <form method="post">
            <label for="fullName">Enter your full name: </label>
            <input type = "text" id="fullName" name="fullName" value="<?php
                if (isset($_COOKIE["UserFullName"])){
                    echo $_COOKIE["UserFullName"];
                }
            ?>">
            <input type="text" id="fullname" value="zeevik the fox"/>
            <br/><br/>
            <input type="submit" value="save"/>
        </form>
    </body>
</html>