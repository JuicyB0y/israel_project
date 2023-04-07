<?php 

header('Access-Control-Allow-Origin: *');

// $servername = "89.117.169.1";
// $username   = "u217800908_Artem_228";
// $password   = "9Z34xR/Ur";
// $dbname     = "u217800908_israel_project";

$servername = "localhost";
$username   = "u217800908_Artem_228";
$password   = "9Z34xR/Ur";
$dbname     = "u217800908_israel_project";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
?>