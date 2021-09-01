<?php
 
 if($_POST) {
     $promo-name = "";
     $promo-email = "";
      
     if(isset($_POST['promo-name'])) {
         $promo-name = filter_var($_POST['promo-name'], FILTER_SANITIZE_STRING);
     }
      
     if(isset($_POST['promo-email'])) {
         $promo-email = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['promo-email']);
         $promo-email = filter_var($promo-email, FILTER_VALIDATE_EMAIL); 
     }
      
  
     $recipient = "anna.conway@ohi.net";
      
     $headers  = 'MIME-Version: 1.0' . "\r\n"
     .'Content-type: text/html; charset=utf-8' . "\r\n"
     .'From: ' . $promo-email . "\r\n";
  
     $email_content = "<html><body>";
     $email_content .= "<table style='font-family: Arial;'><tbody><tr><td style='background: #eee; padding: 10px;'>Visitor Name</td><td style='background: #fda; padding: 10px;'>$promo-name</td></tr>";
     $email_content .= "<tr><td style='background: #eee; padding: 10px;'>Visitor Email</td><td style='background: #fda; padding: 10px;'>$promo-email</td></tr></tbody></table>";
     $email_content .= '</body></html>';
  
     echo $email_content;
      
     if(mail($recipient, "Apex B2B Promo Email", $email_content, $headers)) {
         echo '<p>Thank you.</p>';
     } else {
         echo '<p>We are sorry but the promo form did not go through.</p>';
     }
      
 } else {
     echo '<p>Something went wrong</p>';
 }
  
 ?>