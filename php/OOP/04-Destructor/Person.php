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

        //Destructor is performed via a "magic method" named __destruct:
        public function __destruct(){
            echo "one ".__CLASS__." object has been destroyed!<br/>";
        }
    }
?>