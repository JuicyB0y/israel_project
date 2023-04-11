<?php 

include 'db.php';

// Check connection
if (mysqli_connect_error()) {
    echo mysqli_connect_error();
    exit();
} else {
    $name = mysqli_real_escape_string($conn,$_POST['name']);
    $company = mysqli_real_escape_string($conn,$_POST['company']);
    $email = mysqli_real_escape_string($conn,$_POST['email']);
    $number = mysqli_real_escape_string($conn,$_POST['number']);
    $text = mysqli_real_escape_string($conn,$_POST['text']);


    $sql = "INSERT INTO form3 (name, company, email, number, text) VALUES ('$name', '$company', '$email', '$number', '$text')";
    $res = mysqli_query($conn,$sql);
    if ($res) {
    echo "Success";
    } else {
        echo "Error:";
    }
    $conn->close();
}
?>