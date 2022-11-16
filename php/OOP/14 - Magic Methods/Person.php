<?php

// A Magic Method is a method starting with "__"
// and which have a specific "trick" or usage.

class Person {
	public $full_name;
	
	// 1. Constructor: 
	public function __construct($full_name = null) {
		$this->full_name = $full_name;
	}
	
	// 2. Destructor: 
	public function __destruct() {
		echo "Destroying a Person object.";
	}
	
	// 3. toString: 
	public function __toString() {
		return "Full Name: $this->full_name<br/>";
	}
}