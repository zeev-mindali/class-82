<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>
        <?php echo "This line is using PHP commands" ?>
    </p>
    <div>
        <?php
            date_default_timezone_set("israel"); //old format date_default_timezone_set("asia/jerusalem")
            echo "Server date & time: ".date("d/m/Y H:i:s");
        ?>
    </div>
</body>
</html>