<?php

require_once "Car.php";
require_once "Game.php";

$game = new Game();
$car = new Car();
$car->no_fuel = [$game, "show_fuel_message"]; // Registering the event: 
$car->drive();