<?php
include 'db.php';
if(isset($_POST['submit'])){
    $first_name=$_POST['first_name'];
    $lsName=$_POST['lsName'];
    $email=$_POST['email'];
    $phone=$_POST['phone'];
    $message=$_POST['message'];
    $sql = "INSERT INTO website(name,lsName, email, phone, major) VALUES('$first_name', '$lsName','$email','$phone','$message');";
    mysqli_query($conn, $sql);
    header("Location: index.html?success");
}
?>