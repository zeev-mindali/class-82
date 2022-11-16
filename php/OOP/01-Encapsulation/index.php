<?php

    require_once "Person.php";

    //create one object
    $p1 = new Person;
    $p1->first_name = "Zeev";
    $p1->last_name = "Mindali";
    $p1->show();

    //create another object
    $p2 = new Person;
    $p2->first_name = "Noa";
    $p2->last_name = "Markowitz";
    $p2->show();

    //create another object
    $p3 = new Person;
    $p3->first_name = "Haaron";
    $p3->last_name = "halevy";
    $p3->bike = "Ninja";
    $p3->show();
    //קול ששון וקול שמחה קול חתן וקול כלה
    $p2->last_name = "halevy";
?>