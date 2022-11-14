<?php

//Mathematics Operators:
$a = 100;
$b = 200;

echo $a+$b.PHP_EOL; //300
echo $a-$b.PHP_EOL; //-100
echo $a*$b.PHP_EOL; //2000
echo $a/$b.PHP_EOL; //0.5
echo $a%$b.PHP_EOL; //100


//shorted Operators:
$x = 10;
$x += 8; //$x = $x + 8;
$x -= 8; //$x = $x - 8;
$x *= 8; //$x = $x * 8;
$x /= 8; //$x = $x / 8;
$x %= 8; //$x = $x % 8;

$x++; //$x = $x + 1; post increment
$x--; //$x = $x - 1; post decrement

++$x; //$x = $x + 1; pre increment
--$x; //$x = $x - 1; pre decrement

// Comparison operators
$a = 100;
$b = 200;

echo ($a > $b).PHP_EOL; //""
echo ($a < $b).PHP_EOL; //1
echo ($a >= $b).PHP_EOL; //""
echo ($a <= $b).PHP_EOL; //1
echo ($a == $b).PHP_EOL; //""
echo ($a != $b).PHP_EOL; //1
echo ($a === $b).PHP_EOL; //""
echo ($a !== $b).PHP_EOL; //1

//logic operators
echo ($a < $b and $a == 100).PHP_EOL; //1
echo ($a < $b && $a == 100).PHP_EOL; //1
echo ($a > $b or $a == 100).PHP_EOL; //1
echo ($a > $b || $a == 100).PHP_EOL; //1

echo !($a > $b).PHP_EOL; //1
?>