<?php
//get data from form  
$name = $_POST['username'];
$email= $_POST['email'];
$phone= $_POST['phone'];
$subject= $_POST['subject'];
$message= $_POST['message'];
$to = "ifreelance4work@mail.com";
$subject = "Mail From website";

$txt ="Name = ". $username . "\r\n  Email = " . $email . "\r\n Phone = " . $phone . "\r\n Subject = " .$subject . "\r\n Message = " . $message;
$headers = "From: noreply@yoursite.com" . "\r\n" .
"CC: alotimothy01@gmail.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thankyou.html");
?>