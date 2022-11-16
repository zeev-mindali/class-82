<?php

    class Person{
        public $firstName;
        public $lastName;
        private $age;

        public function __construct($firstName = null, $lastName = null,$age=null){
            $this->firstName = $firstName;
            $this->lastName = $lastName;
            $this->set_age($age);
        }

        //getter:
        public function get_age(){
            return $this->age;
        }

        //setter:
        public function set_age($age){
            if ($age>=0 && $age<=120){
                $this->age = $age;
            }
        }

        public function show(){
            echo "$this->firstName $this->lastName, Age: $this->age<br/>";
        }
    }

?>