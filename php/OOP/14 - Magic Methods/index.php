<?php

require_once "Person.php";

$p = new Person("Moishe Ufnik");
echo $p; // Without the __toString, this line will crash.