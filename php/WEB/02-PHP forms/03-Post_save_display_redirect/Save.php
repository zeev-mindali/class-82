<?php
    //take parameters:
    $fullName = $_POST["fullName"]; //zeev
    $message = $_POST["message"]; //hello my brother from another mother

    //save them to text file:
    $data2save = "full Name: $fullName\nMessage: $message\n";
    //full name: zeev message: hello my brother from another mother
    file_put_contents("Details.txt", $data2save, FILE_APPEND); 

    //display them on page:
    echo "Full name: $fullName<br/>";
    echo "Message: $message";


     //redirect to a "thank you page" (navigate)
     header("Location: ThankYou.html");
?>

// Note:
// $_POST is for POST verb...
// $_GET is for GET verb...
// $_COOKIE is for COOKIE verb...
// $_REQUEST containes POST, GET cookies
// FILE_APPEND will cause append to the file.