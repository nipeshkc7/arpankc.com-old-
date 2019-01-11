<?php
if($_POST){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
//send email
    mail("nipeshkc7@gmail.com", "Feedback from " .$name ." : ".$email , $message);
    echo 'OK';
}
?>