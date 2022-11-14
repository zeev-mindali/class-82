<?php
//saving a cookie for one hour (3600 sec)
setcookie("UserColor", "green", time()+3600);
//note: setcookie must be before the <html> tag !!

?>

<!DOCTYPE html>
<html>
    <body>
        <p>Cookie has been saved....</p>
    </body>
</html>