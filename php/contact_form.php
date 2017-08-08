<?php

	include "conectardb.php";

    header("Location:../contact.html");

    $destino = "contacto@orus.com"; //Correo al cual llegaran los mail 
    $name = $_POST['name'];
    $apellido = $_POST['lastname'];
    $email = $_POST['mail'];
    $emp = $_POST['emp'];
    $num = $_POST['num'];
    $tema = $_POST['msg'];

    $acc = mysqli_query($db, "INSERT INTO infodb(Nombre,Apellido,Email) values ('$name','$apellido','$email')");

    $contenido = 
    "Nombre: " . $name . 
    "\nApellido: " . $apellido . 
    "\nCorreo Electrónico: " . $email . 
    "\nEmpresa: " . $emp .
    "\nTema: " . $tema;

    mail($destino,$tema,$contenido);

    if(mail){
        header("Location:../msg.html");
    }

?>