<?php

include "math_functions.php";


echo getAvg(11,22,33);

sayHi();

showMessage("Hello", 5);
showMessage("This is cool!");

function sayHi(){
    echo "Hi!\n";
}

function showMessage($message, $times=1){
    for ($i=1;$i<=$times;$i++){
        echo $message."\n";
    }
}
?>