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
    
</head>

<body class='index'>
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src=\"https://www.googletagmanager.com/ns.html?id=GTM-KK5WJQZ\"
    height=\"0\" width=\"0\" style=\"display:none;visibility:hidden\"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    <section class='grid-container main'>
        <div class='grid justify-center'>
            <div class='col-12 col-sm-10 col-md-8 menu has-logo'>
                <div class='grid justify-end'>
                    <div class='col-2 col-bleed text-right'><a class='small' href='logout.php'>Logout</a></div>
                </div>
                <div class='logo'><a href='/index.php'><img src='images/logo.jpg' alt='Apex'></a></div>
                <h1>Welcome back, $loggedInUser->displayname.</h1>
                <p>Have questions? <a href='contact.php'>Please contact us</a>.</p>
                <div class='grid justify-center'>
                    <div class='col-md-4 main-menu'>
                        <div>
                            <h2>My Orders</h2>
                            <a href='http://b2b.apexfoot.com:6394/wa/r/apex/oxordem1?OutputMap=DUA_AJAX&".$_SERVER['QUERY_STRING']."&Arg=NEW' target='_blank' >Enter New Order</a>
                            <a href='http://b2b.apexfoot.com:6394/wa/r/apex/oxordem1?OutputMap=DUA_AJAX&".$_SERVER['QUERY_STRING']."&Arg=MODIFY' target='_blank'>Modify Draft Order</a>
                            <a href='http://b2b.apexfoot.com:6394/wa/r/apex/oxstoci1?OutputMap=DUA_AJAX&".$_SERVER['QUERY_STRING']."' target='_blank'>Check Item Availability</a>
                            <a href='http://b2b.apexfoot.com:6394/wa/r/apex/oxordei1?OutputMap=DUA_AJAX&".$_SERVER['QUERY_STRING']."' target='_blank'>Order Status</a>
                            <a href='return-policy.php'>Return Policy</a>
                            
                            <!-- <a href='//api.ohi.net/FedEx?unit=APEX&src=2' target='_blank'>Shoe Return Shipping Labels (US)</a>
                            <a href='//api.ohi.net/FedEx?unit=APEX&src=4' target='_blank'>CDI Shipping Labels (US)</a>   -->

                            <a href='//returnsportal.ohi.net?unit=1&carrier=1&type=2' target='_blank'>Shoe Return Shipping Labels (US)</a>
                            <a href='//returnsportal.ohi.net?unit=1&carrier=1&type=4' target='_blank'>CDI Shipping Labels (US)</a>   
                            
                            <form id='guest' action='https://row.ups.com/GuestAccess/Guest/Access' method='post' target='_blank'>
                                <input type='hidden' name='Company' value='QXBleA==' />                            
                                <a href='#' onclick='this.parentNode.submit(); return false;' target='_blank'>Shoe Return Shipping Labels (Canada)</a>                                
                            </form>	                          
                        </div>
                    </div>
                    <div class='col-md-4 main-menu'>
                        <div>
                            <h2>My Account</h2>
                            <a href='http://b2b.apexfoot.com:6394/wa/r/apex/oxinvci1?OutputMap=DUA_AJAX&".$_SERVER['QUERY_STRING']."' target='_blank'>View Invoice</a>
                            <a href='http://b2b.apexfoot.com:6394/wa/r/apex/oxstmtr1?OutputMap=DUA_AJAX&".$_SERVER['QUERY_STRING']."' target='_blank' >View Statement</a>
                        </div>
                    </div>
                    <div class='col-md-4 main-menu'>
                        <div>
                            <h2>Products &amp; Resources</h2>
                            <a href='http://apexfootmedia.ohi.net/apex/content/dealers/updates/ApexB2BPortalUsersManual.pdf' target='_blank'>Apex Quick Start Guide</a>
                            <a href='http://ohi.net/university/resources.html?Apex%20Foot%20Health$1' target='_blank'>Dealer Resources</a>
                            <a target='_blank' class='external' href='https://joom.ag/WFre'>Footwear Catalog</a>
                            <a href='pdfs/Apex_A-Wave_Prefab_Sell_Sheet_Order_Form_USA.pdf' target='_blank'>Prefab Orthotics</a>
                            <a href='pdfs/Apex_Copper_Cloud_Socks_Sell_Sheet_Order_Form_2021.pdf' target='_blank'>Copper Cloud&nbsp;Socks</a>
                            <a href='pdfs/Apex_Diabetes_Your_Feet_Brochure.pdf' target='_blank'>Diabetic Footwear</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class='grid-container'>
        <div class='ad-banner grid'>
            <div class='col-12 offset-0 col-sm-10 offset-1-sm col-lg-4 offset-0-lg col-grid banner-card style3'>
                <div class='col-12 col-bleed'>
                    <a target='_blank' class='external' href='https://joom.ag/WFre'><img class='flex-img' src='images/apex-catalog.jpg' alt='2021 Apex Footwear Catalog' /></a>
                </div>
                <div class='col-12 text-center'>
                    <h4>Browse &amp; Download the 2021 Apex Footwear Catalog</h4>
                    <p>70+ Years and Growing! Apex Foot Health Industries is dedicated to
                    designing and manufacturing the finest foot health products available on the market today.Thank you for being a valued customer.</p>
                    <a class='button slim external' target='_blank' href='https://joom.ag/WFre'>Learn More</a>
                </div>
            </div>
            <div class='col-12 offset-0 col-sm-10 offset-1-sm col-lg-4 offset-0-lg col-grid banner-card style3'>
                <div class='col-12 col-bleed'>
                    <a target='_blank' class='external' href='pdfs/Apex_CDI_Sell_Sheet.pdf'><img class='flex-img' src='images/apex-cdi.jpg' alt='2019 Apex Footwear Catalog' /></a>
                </div>
                <div class='col-12'>
                    <h4 class='text-center'>APEX<sup>&reg;</sup> CUSTOM DIABETIC INSERTS</h4>
                    <p class='text-center'>Conform Foam, soft top cover. Light-weight EVA base. <strong>Also available in Trilam version.</strong></p>
                    <div class='grid align-start justify-space-around'>
                        <ul class='col-12 col-sm-4 col-lg-12 col-bleed-y'>
                            <li>Fabricated to precisely fit Apex footwear</li>
                            <li>No adjustments necessary</li>
                            <li>Guaranteed to fit</li>
                            <li>Available with modifications to meet patients’ needs</li>
                        </ul>
                        <ul class='col-12 col-sm-4 col-lg-12 col-bleed-y'>
                            <li>Medicare PDAC Code Verified</li>
                            <li>Unparalleled turn-around time</li>
                        </ul>
                    </div>
                    <div  class='text-center'><a class='button slim external' target='_blank' href='pdfs/Apex_CDI_Sell_Sheet.pdf'>Learn More</a></div>
                </div>
            </div>
            <div class='col-12 offset-0 col-sm-10 offset-1-sm col-lg-4 offset-0-lg col-grid banner-card style3'>
                <div class='col-12 col-bleed'>
                    <a target='_blank' href='pdfs/Apex_Athletic_Performance_SellSheet.pdf'><img class='flex-img' src='images/Apex-Performance-Athletic-Sneaker-Website-Graphic_960x618.jpg' alt='Apex Performance Sneakers' /></a>
                </div>
                <div class='col-12 text-center'>
                    <h4>Apex Performance Athletic Sneakers</h4>
                    <p>Look & Feel Great With Every Step - The Apex Performance Athletic Sneaker, the newest addition to the Apex Active Collection, is equally comfortable and stylish. The traction-orientated, lightweight design makes it perfect for day-to-day wear; the breathable, open mesh upper supports cooling and moisture transfer and the rigid heel counter helps to keep your heel centered and stable.</p>
                    <a class='button slim' target='_blank' href='pdfs/Apex_Athletic_Performance_SellSheet.pdf'>Click to View</a>
                </div>
            </div>
        </div>
    </section>
";

//require_once("footer.php");

?>