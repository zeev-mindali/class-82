<?php 

    require_once "Person.php";

    $p1 = new Person("Zeev","mindali",48);
    $p1->show();
    $p1->set_age(24);
    echo "New age: ".$p1->get_age()."<br/>";

    $p2 = new Person("Or","Baasa",-22);
    $p2->show();
    $p2->set_age(-13);
    echo "new age: ".$p2->get_age()."<br/>";

?>