<?php 


require_once("models/config.php");
if (!securePage($_SERVER['PHP_SELF'])){die();}

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
  <link rel='stylesheet' href='css/main.css'>
  <script src='js/vendor/modernizr-2.6.2.min.js'></script>
</head>
<body>
  <div class='containerindex'>
    <div class='header'>
      <div class='logo'><img src='images/logo.jpg' alt='Apex'></div>
      <p>
      <a href='logout.php'>Logout</a>
      </p>
    </div> <!-- /.header -->
    <div class='main'>
      <div class='welcome-text'>
        <h2>Welcome back, $loggedInUser->displayname.</h2>
        <p>Use the menu on the right to navigate the business-to-business portal. Have questions? <a href='contact.php'>Please contact us</a>.</p>
      </div> <!-- /.welcome-text -->

      <div class='dashboardindex'>
        <div class='column'>
          <h4>My orders</h4>
          <ul>
            <li><a href='http://01-eliteb2bprod-1.theorthoticgroup.com:6394/wa/r/apex/oxordem1?OutputMap=DUA_AJAX&".$_SERVER['QUERY_STRING']."&Arg=NEW' target='_blank' >Enter a new order</a></li>
            <li><a href='http://01-eliteb2bprod-1.theorthoticgroup.com:6394/wa/r/apex/oxordem1?OutputMap=DUA_AJAX&".$_SERVER['QUERY_STRING']."&Arg=MODIFY' target='_blank'>Modify a draft order</a></li>
            <li><a href='http://01-eliteb2bprod-1.theorthoticgroup.com:6394/wa/r/apex/oxstoci1?OutputMap=DUA_AJAX&".$_SERVER['QUERY_STRING']."' target='_blank'>Check item availability</a></li>
            <li><a href='http://01-eliteb2bprod-1.theorthoticgroup.com:6394/wa/r/apex/oxordei1?OutputMap=DUA_AJAX&".$_SERVER['QUERY_STRING']."' target='_blank'>Order status</a></li>
            <li><a href='http://www.apexfoot.com/return-policy-b2b' target='_blank'>Return Policy</a></li>
            <li style='color:red'></li>
          </ul>
        </div> <!-- /.column -->
        <div class='column right'>
          <h4>My account</h4>
          <ul>
            <li><a href='http://01-eliteb2bprod-1.theorthoticgroup.com:6394/wa/r/apex/oxinvci1?OutputMap=DUA_AJAX&".$_SERVER['QUERY_STRING']."' target='_blank'>View Invoice</a></li>
            <li style='color:red'></li>
            <li><a href='http://01-eliteb2bprod-1.theorthoticgroup.com:6394/wa/r/apex/oxstmtr1?OutputMap=DUA_AJAX&".$_SERVER['QUERY_STRING']."' target='_blank' >View statement</a></li>
            <li style='color:red'></li>
          </ul>
        </div> <!-- /.column -->
      </div> <!-- /.dashboard -->
    </div> <!-- /.main -->
		<div>
	<table>
	<tr>
	<p style='text-align:center; color:#75C7B9; font-size:34px; margin: 10px 0px 0px 7px;'>Apex Point-of-Sale</p>
	</tr>
	<tr>
	<td style='padding: 5px 0px 0px 0px;'><a href='http://apexfoot.com/foot-health/'><img src='images/Apex_L1.jpg'></a></td>
	<td style='padding: 5px 0px 0px 0px;'><a href='http://www.apexfoot.com/'><img src='images/Apex_L2.jpg'></a></td>
	<td style='padding: 5px 0px 0px 0px;'><a href='http://www.apexfoot.com/'><img src='images/Lander-3.png'></a></td>
	</tr>
	</table>
	<p style='text-align:center; color:#000; font-size:20; margin: 10px 0px 0px 0px;'><a href='http://apexfoot.com/apex-foot-health-and-wellness/'><img src='images/Lander-4.png'></a></p>
	</div>
";

// require_once("footer.php");

?>
