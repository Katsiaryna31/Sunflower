<?php

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    $myAwardSpaceEmail = "support@grupa-sonyashnik.com";
    $myAwardSpaceEmailPassword = "Sonyashnik!2020";
    $myPersonalEmail = "support@grupa-sonyashnik.com";

    require './mailer/Exception.php';
    require './mailer/PHPMailer.php';
    require './mailer/SMTP.php';

    if(isset($_POST['submit'])) {

        $mail = new PHPMailer(true);
        $mail->CharSet = 'UTF-8';
        $mail->SMTPDebug = 0;

        $mail->Host = 'smtp.office365.com';
        $mail->SMTPAuth = true;
        $mail->Username = $myAwardSpaceEmail;
        $mail->Password = $myAwardSpaceEmailPassword;
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        $mail->setFrom($myAwardSpaceEmail, 'Sonyashnik');
        $mail->addAddress($myPersonalEmail);
        $mail->addReplyTo($_POST['email'], $_POST['name']); 

        $mail->isHTML(true);    
        $mail->Subject = 'Запрос через форму';
        $mail->Body = $_POST['message'];


        try {
            if (!$mail->send()) {
                echo 'Mailer Error: '. $mail->ErrorInfo;
            } else {
                echo 'Your message was sent successfully!';
            }
        } catch (Exception $e) {
            echo "Your message could not be sent! PHPMailer Error: {$mail->ErrorInfo}";
        }
        
    } else {
        echo "There is a problem with the contact form!";
    }

?>