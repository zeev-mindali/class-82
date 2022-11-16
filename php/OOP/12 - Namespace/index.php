<?php

require_once "Person.php";
require_once "College.php";

// There are three ways of using a class resides in a different namespace: 

// First way - explicit declaration: 
$p1 = new Zeev\Person();
$p1->show();

// Second way - implicit declaration: 
use AssafFinkelshtein\Person; // Must ends with a class!
$p2 = new Person();
$p2->show();

// Third way - alias explicit declaration: 
use Zeev as AF;
$p3 = new AF\Person();
$p3->show();

// If we want in the same script to use the two different Person,
// we can't use the implicit declaration, only the explicit ways:

$p4 = new JohnBryce\Person();
$p4->show();

use HiTech as HT;
$p5 = new HT\Person();
$p5->show();