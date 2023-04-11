<?php 

include 'db.php';

// Check connection
if (mysqli_connect_error()) {
    echo mysqli_connect_error();
    exit();
} else {
    $name = mysqli_real_escape_string($conn, $_POST['name']);
    $email = mysqli_real_escape_string($conn,$_POST['email']);
    $number = mysqli_real_escape_string($conn,$_POST['number']);
    $budget = mysqli_real_escape_string($conn,$_POST['budget']);
    $terms = mysqli_real_escape_string($conn,$_POST['terms']);
    $text = mysqli_real_escape_string($conn,$_POST['text']);


    $sql = "INSERT INTO form (name, email, number, budget, terms, text) VALUES ('$name', '$email', '$number', '$budget', '$terms', '$text')";
    $res = mysqli_query($conn,$sql);
    if ($res) {
    echo "Success";
    } else {
        echo "Error:";
    }
    $conn->close();
}
?>