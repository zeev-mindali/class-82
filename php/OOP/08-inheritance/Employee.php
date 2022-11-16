<?php

    require_once "Person.php";

    class Employee extends Person{
        private $salary;

        public function get_salary(){
            return $this->salary;
        }

        public function set_salary($salary){
            if ($salary>=0){
                $this->salary = $salary;
            }
        }
    }

?>