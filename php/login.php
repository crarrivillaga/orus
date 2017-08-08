<?php
    $user = "OrusSociety";
    $pass = "orus@security@";

    $usuario = $_POST['usuario'];
    $password = $_POST['cont'];

    if ($usuario === $user && $password === $pass){
        header("Location:../port.html");
    }else{
        header("Location:../msg_error.html");
    }
?>