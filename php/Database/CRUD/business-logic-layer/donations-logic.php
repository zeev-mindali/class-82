<?php

require_once "../data-access-layer/dal.php";

    function addDonation($donation){
        //create an insert statement:
        $sql = "INSERT INTO donation(name,family,tel,sum,payment_code,memo) VALUES ('$donation->name','$donation->family','$donation->tel','$donation->sum','$donation->payment_code','$donation->memo)";
        
        //add the donation
        $id = execute($sql);

        //update the id
        $donation->id = $id;

        //return the donation
        return $donation;

    }

    //update existing donation
    function updateDonation($donation){
        //create an update statement

        $sql = "UPDATE donation SET name='$donation->name',family='$donation->family',tel='$donation->tel',sum='$donation->sum',payment_code='$donation->payment_code',memo='$donation->memo WHERE id=$donation->id";
    
        //update that product
        execute($sql);

        //return the donation
        return $donation;
    }

    function deleteDonation($id){
        $sql = "DELETE FROM donation WHERE id=$id";

        //execute the sql
        execute($sql);
    }

    function getAllDonation(){
        $sql = "SELECT * FROM donation";

        //get all donation
        $donations = select($sql);

        return $donations;
    }

    function getAllPayments(){
        $sql = "SELECT * FROM payment";

        $paymentType = select($sql);
        return $paymentType;
    }

    function getDonationRange($from,$to){
        $sql = "SELECT * FROM donation WHERE sum>$from AND sum<$to";

        //get the result
        $donations = select($sql);

        return $donations;
    }
?>