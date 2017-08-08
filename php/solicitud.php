<?php

	include "conectardb.php";

    $destino = "contacto@orus.com"; //Correo al cual llegaran los mail 
    $name = $_POST['name'];
    $apellido = $_POST['lastname'];
    $emp = $_POST['emp'];
    $email = $_POST['mail'];

    $acc = mysqli_query($db, "INSERT INTO infodb(Nombre,Apellido,Email) values ('$name','$apellido','$email')");

    $contenido = 
    "Nombre: " . $name . 
    "\nApellido: " . $apellido . 
    "\nCorreo Electrónico: " . $email . 
    "\nEmpresa: " . $emp;

    mail($destino,$tema,$contenido);

    if(mail){
        header("Location:../msg.html");
    }

?>