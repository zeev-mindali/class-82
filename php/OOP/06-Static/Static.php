<?php

class Test
{
    public $var1;
    public static $var2;

    // Instance methods can access instance members and static members.
    // Accessing static members can be done via class name, via "self::" and via "static::"
    public function f1()
    {
        echo "I'm in instance method. var1 = $this->var1, var2 = " . static::$var2 . "<br/>";

    }

    public static function f2(){
        echo "i'm in a static method. var2=".self::$var2."<br/>";
    } 
}

Test::$var2 = 100;// Accessing static variable from outside the class.
Test::f2();// Accessing static method from outside the class.

$t = new Test();
$t->var1 = 200;
$t->f1();

?>