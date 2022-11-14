<?php

$person1 = new stdClass;
$person1->firstName = "Moishe";
$person1->lastName = "Ufnik";
$person1->age=12;

$person2 = new stdClass;
$person2->firstName = "Kipi";
$person2->lastName = "Ben-Kipod";
$person2->age=13;

echo $person1->firstName . " " . $person2->lastName . "\n";
echo "$person2->firstName $person2->lastName\n";


showPerson($person1);
showPerson($person2);
showPerson2($person1);
showPerson2($person2);

function showPerson($person){
    echo "First name: $person->firstName\n";
    echo "Last name: $person->lastName\n";
    echo "Age: $person->age\n";
}

function showPerson2($person){
    foreach($person as $property => $value){
        echo "Property: $property , Value: $value\n";
    }
}

?>