<?php 

    require_once "shape.php";

    class Circle extends Shape{
        private $radius;
        const PI = 3.1415;

        public function __construct($x = 0, $y = 0, $radius = 0){
            $this->x= $x;
            $this->y= $y;
            $this->set_radius($radius);
        }

        public function get_radius(){
            return $this->radius;
        }

        public function set_radius($radius){
            if ($radius>0){
                $this->radius = $radius;
            }
        }

        //override abstract method (we writing the implementation)
        public function get_area(){
            return self::PI * $this->radius*$this->radius;
        }
    }

?>