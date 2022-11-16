<?php

class Person{
    //data members (must come with an access modifiers):
    public $first_name; //will contain null
    public $last_name="---"; //will contain ---

    //note: the following are errors
    //$first_name; //error , there is no modifier
    //$last_name= ""; //error ,can not accept empty string

    //methods:
    public function show(){ //print is php keyword and this words cannot be used
        //note: must address any dat member via $this->
        echo $this->first_name." ".$this->last_name;
        //$this->first_name $this->last_name //also ok
        $this->print_separator();
    }

    function print_separator(){
        echo "<br/>------------------------------------<br/>";
        //note : if you will not write modifier it will be public
    }
}
?>