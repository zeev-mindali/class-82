<?php
    class Person{
        private $firstName;
        private $lastName;

        //a constructor (c'tor) is performed via a "magic method" named __construct

        public function __construct($firstName = null, $lastName = null){
            $this->firstName = $firstName;
            $this->lastName = $lastName;
        }

        public function show(){
            echo "$this->firstName $this->lastName <br/>";
        }
    }
?>