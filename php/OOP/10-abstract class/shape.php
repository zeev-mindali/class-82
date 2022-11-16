<?php

    //Abstract class - can't create an object

    abstract class Shape {
        public $x;
        public $y;

        public function __construct($x = 0, $y = 0) {
            $this->x = $x;
            $this->y = $y;
        }

        public function show(){
            echo "X= $this->x, Y= $this->y";
        }

        //abstract methods
        //1. have no implementation
        //2. must be overrideen in a non abstract derived class
        //3. can exists only in abstract class
        public abstract function get_area();
    }