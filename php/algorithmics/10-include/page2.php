<?php

//include - will include the specified file,
//but if the specified file has already been included, it will be included again.
//if the file doesn't exists - an error will be created but the script wont halt:
//include "page1.php";

// include_once - same as include, but won't include files that have been included erlier:
//include_once "page1.php";

//require_once - same as include_once , but if the files doesn't exist, will halt the script:
require_once "page1.php"; //this is the best way...

?>