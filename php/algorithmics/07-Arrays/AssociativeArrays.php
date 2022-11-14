<?php

//first way:
$arr1 = array("sky"=>"blue", "sun"=>"yellow", "grass"=>"green");
echo "sky is ".$arr1["sky"]."<br/>";
echo "sun is ".$arr1["sun"]."<br/>";
echo "grass is ".$arr1["grass"]."<br/>";

echo "--------------<br/>";

//second way:
$arr1 = ["sky"=>"blue", "sun"=>"yellow", "grass"=>"green"];
echo "sky is ".$arr1["sky"]."<br/>";
echo "sun is ".$arr1["sun"]."<br/>";
echo "grass is ".$arr1["grass"]."<br/>";

echo "--------------<br/>";

$arr3["sky"]="blue";
$arr3["sun"]="yellow";
$arr3["grass"]="green";
echo "sky is ".$arr1["sky"]."<br/>";
echo "sun is ".$arr1["sun"]."<br/>";
echo "grass is ".$arr1["grass"]."<br/>";

?>