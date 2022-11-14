<?php

//running over a regular array - getting only the values:
$arr1 = [10,20,30,"hi"];
foreach($arr1 as $item){
    echo "$item ";
}

echo "<br/>";


//running over a regular array - getting indices and values:
foreach($arr1 as $index => $value){
    echo "$index &rarr; $value |";
}

//running over associative array - getting only the values:
$arr2=["sky"=>"blue", "sun"=>"yellow", "grass"=>"green"];
foreach($arr2 as $item){
    echo "$item ";
}
echo "<br/>";
foreach($arr2 as $key => $item){
    echo "$key &rarr; $item | ";
}

?>

