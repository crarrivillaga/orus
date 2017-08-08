<?php
	$dbname = "cor35030_seguridad_arce";//variable para el nombre de la base de datos
	$host = "cpanelhost.cl"; //variable para el nombre del servidor
	$dbpass = "Vdg@709269"; //variable para la clave del servidor
	$dbuser = "cor35030_crauser"; //variable para el usuario del servidor
	
	$db = mysqli_connect($host,$dbuser,$dbpass) or die (mysqli_error()); //("No se pudo conectar con la Base de Datos.");
	mysqli_select_db($db,$dbname) or die (mysqli_error()); //("No se pudo conectar a la DB.");
?>
