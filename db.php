<?php
function OpenCon(){

$serverName="localhost";
$dBUsername="root";
$dBPassword="root";
$dBName="db";
$conn=mysqli_connect($serverName,$dBUsername, $dBPassword, $dBName);
return $conn;
}
if(!$conn){
    die("Connection Failed: ".mysqli_connect_error());
}
?>