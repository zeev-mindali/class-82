<?php

$arr1 = array(10,20,30,"hi");
for ($i=0;$i<count($arr1);$i++) {
    echo $arr1[$i]." ";
}

echo "<br>";
echo "First item: $arr1[0], second item: $arr1[1]";

//second way to create array:
$arr2 = [10,20,30,"hi"];
for ($i=0;$i<count($arr2);$i++){
    echo "$arr2[$i]";
}
echo "<br>";

//third way to create array:
for ($i=0;$i<10;$i++){
    $arr3[$i] = $i * $i; //insert to array by it's index...
    echo "$arr3[$i]";
}

//fourth way to create array:
for ($i = 0;$i<10;$i++){
    $arr4[] = $i*$i;  //adding a new value into the array (push)
    echo "$arr4[$i]";
}
echo "<br/>";


?>