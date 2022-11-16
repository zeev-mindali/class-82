<?php

    // Constants: 
	// 1. Can't use with access modifier, it is always public.
	// 2. Created and used without any $ sign.
	// 3. Must initialize immediately. Can't change it ever again.
	// 4. Can be accessed from within the class via self, static or class name.
	// 5. Can be accessed from outside the class only via class name and not via object.
    class Test{
        const PI = 3.14;
        const vat = 17;

        public function f1(){
            echo "PI: ".self::PI."<br/>";

        }

        public static function f2(){
            echo "PI: ".self::PI."<br/>";
        }
    }  
    
    Test::f2();
    echo "PI: ".Test::PI."<br/>";
?>