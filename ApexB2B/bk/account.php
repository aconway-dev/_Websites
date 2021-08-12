<?php
/*
UserCake Version: 2.0.2
http://usercake.com
*/

require_once("models/config.php");
if (!securePage($_SERVER['PHP_SELF'])){die();}
require_once("models/header.php");

echo "
<body>
    <section class='grid-container main account no-bg'>
        <div class='grid justify-space-around'>
            <div class='col-10 col-md-3 menu has-logo'>
                <div class='logo'><a href='/index.php'><img src='images/logo.jpg' alt='Apex'></a></div>
                <div class='main-menu'>
                    <div>";
                    include('left-nav.php');
                echo "
                </div>
                </div>
            </div>
            <div class='col-10 col-md-7 menu'>
                <div>
                    <h1>Account</h2>
                    <p>Hey, <strong>$loggedInUser->displayname</strong>. This is an example secure page designed to demonstrate some of the basic features of UserCake. Just so you know, your title at the moment is <strong>$loggedInUser->title</strong>, and that can be changed in the admin panel. You registered this account on <strong>" . date("M d, Y", $loggedInUser->signupTimeStamp()) . "</strong>.</p>
                </div>
            </div>
        </div>
    </section>
    </body>
</html>";
?>

<link rel='stylesheet' href='css/main.css?v=2.0'>

