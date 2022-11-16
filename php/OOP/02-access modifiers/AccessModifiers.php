<?php

    class Test{
        //public - accessed from within and from outside the class
        public $var1;

        public function f1(){
            echo "I'm a public function";
        }

        //private - accessed from within can be accessed from outside the class
        private $var2;
        private function f2(){
            echo "I'm a private function";
        }

        //protected - accessed from within and from sub classes
        protected $var3;
        protected function f3(){
            echo "I'm a protected function";
        }
    }

?>