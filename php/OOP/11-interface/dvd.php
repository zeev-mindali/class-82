// extends: ElectronicDevice, implments PlayerInterface,TestingInterface

<?php
    require_once "ElectronicDevice.php";
    require_once "PlayerInterface.php";
    require_once "TestingInterface.php";

    class DVD extends ElectronicDevice implements PlayerInterface, TestingInterface{
        
    	/**
	 * @return mixed
	 */
	public function play() {
        echo "Playing ....<br/>";
	}
	
	/**
	 * @return mixed
	 */
	public function pause() {
        echo "Pausing....<Br/>"
	}
	
	/**
	 * @return mixed
	 */
	public function stop() {
        echo "Stopping....<br/>";
	}
	
	/**
	 * @return mixed
	 */
	public function test() {
        echo "Testing....<br/>";
	}
}


?>