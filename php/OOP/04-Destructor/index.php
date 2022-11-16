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

    //the system will call destruct function, and remove the instance from the memory.
    unset($p1,$p2,$p3);

    unset($p4);
?>