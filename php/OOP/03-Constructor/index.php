<?php

    require_once "Person.php";

    $p1 = new Person;
    $p1->show(); //נעל

    $p2 = new Person();
    $p2->show(); //נעל

    $p3 = new Person("Zeev");
    $p3->show(); //zeev null

    $p4 = new Person("Zeev","Mindali");
    $p4->show(); // zeev mindali

?>