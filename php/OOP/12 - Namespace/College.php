<?php

// A different way for declaring a namespace 
// which allows several namespaces in one file:

namespace JohnBryce {
	class Person {
		public function show() {
			echo "Namespace: JohnBryce, Class: Person<br/>";
		}
	}
}

namespace HiTech {
	class Person {
		public function show() {
			echo "Namespace: HiTech, Class: Person<br/>";
		}
	}
}