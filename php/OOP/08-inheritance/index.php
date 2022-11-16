<?php

    require_once "Employee.php";

    $e1 = new Employee("Noa","basa");
    $e1->set_salary(22000);
    $e1->show();

    $e2 = new Person("dolev","basa");
    //$e2->set_salary(22000); error - person don't have method of salary


    if($e1 instanceof Person){
        echo "is person";
    }

    if($e1 instanceof Employee){
        echo "is Employee";
    }

    if($e1 instanceof Rabbit){
        echo "Hello ginger";
    }


    class Rabbit{}
?>