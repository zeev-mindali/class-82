<?php

// All interface methods are public.
// protected or private methods are not allowed.

// An interface for creating any player:
    interface PlayerInterface{
        function play();
        function pause();
        public function stop();
    }

?>