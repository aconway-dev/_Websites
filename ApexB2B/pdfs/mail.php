<?php

require_once("header.php");

if(isset($_POST['account-number']) && isset($_POST['first-name']) && isset($_POST['last-name']) && isset($_POST['email'])) {
  $accountNumber = $_POST['account-number'];
  $firstName = $_POST['first-name'];
  $lastName = $_POST['last-name'];
  $email = $_POST['email'];
  $to  =  'noreply@apexfoot.com';
  $subject = 'Apex B2B Contact Form Submission';
  $message = '<b>Account Number:</b> ' . $accountNumber . '<br>'.
	      '<b>First Name:</b> ' . $firstName . '<br>'.
              '<b>Last Name:</b>' . $lastName . '<br>'.
              '<b>Email:</b>' . $email . '<br>';
  // To send HTML mail, the Content-type header must be set
  $headers  = 'MIME-Version: 1.0' . "\r\n";
  $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
  $headers .= 'From: B2B Portal <noreply@apexfoot.com>' . '\r\n';

  mail($to, $subject, $message, $headers);
  // removed image tagn from logo div
	echo "
	<body>
	  <section class='grid-container site-form contact'>
            <div class='grid'>
                <div action=\"mail.php\" class=\"form col-10 offset-1 col-lg-5 offset-7-lg has-logo\" method=\"post\">
                    <div class='logo'><img src='/index.php' alt='Apex'></div>
                    <div class='grid'>
                       <h1 class='col-12'>Contact form submitted successfully.</h1>
	                   <a href='/index.php' class='col-12'>Continue</a>
                    </div>
                </div>
            </div>
        </section>
	";
  }
  else
  { 
		echo "
		<body>
            <section class='grid-container site-form contact'>
                <div class='grid'>
                    <div action=\"mail.php\" class=\"form col-10 offset-1 col-lg-5 offset-7-lg has-logo\" method=\"post\">
                        <div class='logo'><a href='/index.php'><img src='images/logo.jpg' alt='Apex'></a></div>
                        <div class='grid'>
                           <h1 class='col-12'>Error submitting contact form. Some of the required fields were not entered.</h1>
                           <a class='col-12' href='contact.php'>Back to contact form</a>
                        </div>
                    </div>
                </div>
            </section>";
  }
  
// require_once("footer.php");

?>
