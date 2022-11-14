<?php
    //take parameters:
    $fullName = $_POST["fullName"];
    $message = $_POST["message"];

    //save them to text file:
    $data2save = "full Name: $fullName\nMessage: $message\n";
    file_put_contents("Details.txt", $data2save, FILE_APPEND); 
?>

// Note:
// $_POST is for POST verb...
// $_GET is for GET verb...
// $_COOKIE is for COOKIE verb...
// $_REQUEST containes POST, GET cookies
// FILE_APPEND will cause append to the file.