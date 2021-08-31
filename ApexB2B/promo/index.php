<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>APEX Business-to-Business Portal</title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="css/main.css" rel="stylesheet" type="text/css">
  <script type="text/javascript" src="js/validation.js"></script>
</head>
    
<section class='grid-container site-form contact'>
    <div class='grid'>
        <form action="mail.php" id="contact-form" onsubmit="return validateForm(['account-number', 'first-name', 'last-name', 'email'])" class="form col-10 offset-1 col-lg-5 offset-7-lg has-logo" method="post">
            <div class='logo'><a href='/index.php'><img src='images/logo.jpg' alt='Apex'></a></div>
            <div class="grid">
                <h1 class='col-12 text-center'>Apex Foot Health Portal Registration</h1>
                <p class='col-12'>Welcome to the Apex Family. Once your information is submitted below, you will receive an email containing your Password and training documentation within one business day. If you have any issues, please contact us at <a href="mailto:aorder@apexfoot.com">aorder@apexfoot.com</a>.</p> 
            </div>
            <fieldset>
                <div  class='grid'>
                    <div class="col-12">
                        <label for="account-number">APEX Account # *</label>
                        <input type="text" name="account-number" id="account-number" class="field">
                    </div>
                    <div class="col-md-6">	
                        <label for="first-name">First Name *</label>
                        <input type="text" name="first-name" id="first-name" class="field">
                    </div>
                    <div class="col-md-6">
                        <label for="last-name">Last Name *</label>
                        <input type="text" name="last-name" id="last-name" class="field">
                  </div>
                    <div class="col-12">
                        <label for="email">Email Address *</label>
                        <input type="text" name="email" id="email" class="field">
                    </div>
                    <div class="col-12">
                        <input type="submit" value="Submit" class="button">
                    </div>
                </div>
            </fieldset>
        </form>
    </div>
</section>
