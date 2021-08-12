

<?php
/*
UserCake Version: 2.0.2
http://usercake.com
*/

echo "
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class='no-js lt-ie9 lt-ie8 lt-ie7'> <![endif]-->
<!--[if IE 7]>         <html class='no-js lt-ie9 lt-ie8'> <![endif]-->
<!--[if IE 8]>         <html class='no-js lt-ie9'> <![endif]-->
<!--[if gt IE 8]><!--> <html class='no-js'> <!--<![endif]-->
<head>
  <meta charset='utf-8'>
  <meta http-equiv='X-UA-Compatible' content='IE=edge'>
  <title>APEX Business-to-Business Portal</title>
  <meta name='description' content=''>
  <meta name='viewport' content='width=device-width, initial-scale=1'>
  <link rel='stylesheet' href='css/main.css?v=2.0'>
  <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src='https://www.googletagmanager.com/gtag/js?id=UA-120326912-7'></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-120326912-7');
    </script>
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-KK5WJQZ');</script>
    <!-- End Google Tag Manager -->
  <script>
    function validateForm() {
      var loginForm = document.getElementById('login-form'),
          accountField = document.getElementById('account-number'),
          passwordField = document.getElementById('password');

      if (accountField.value === '' || passwordField.value === '') {
        alert('Please enter both fields');
        return false;
      }

    }
  </script>
</head>
";

?>
