<?php
    if(!isset($_SESSION)){
        session_start();
    }

    $pass = urldecode($_GET['p']);//dw about error, edit url to enter password afterwards(?p=passwordhere)
    if($pass=="TWNO1"){
        $_SESSION['Pass_correct'] = 1; //Session is now assigned "Pass_correct"
    }

    if(isset($_SESSION{'Pass_correct'})){
        echo "Login Successful!";
    } else {
        echo "Incorrect Password!";
    }
    ?>
