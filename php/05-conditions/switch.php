<?php

$a = 3;

switch ($a) {
    case 1:
        echo "One.\n";
        break;
    case 2:
        echo "Two.\n";
        break;
    case 3:
        echo "three.\n";
        break;
    default:
        echo "not one or two or three.\n";
}

$str = "a";

switch ($str){
    case "a":
        echo "First letter.\n";
        break;
    case "b":
        echo "Second letter.\n";
        break;
    case "c":
        echo "third letter.\n";
        break;
    default:
        echo "not a or b or c";
}

$day = "sunday";
switch ($day){
    case "sunday" :
    case "monday":
        echo "working day";
        break;
    case "friday":
    case "saturday":
        echo "Shabes";
        break;
}

switch ($a){
    case $a > 100:
        echo "$a is larger then 100.\n";
        break;
    case $a < 100:
        echo "$a is smaller then 100.\n";
        break;
    case 100:
        echo "$a is equal to 100.\n";
}
?>