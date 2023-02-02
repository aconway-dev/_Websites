    	<!-- modal -->
        <script type="text/javascript" src="https://code.jquery.com/jquery-1.8.2.js"></script>
	<style type="text/css">
	#overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #000;
		filter: alpha(opacity=70);
		-moz-opacity: 0.7;
		-khtml-opacity: 0.7;
		opacity: 0.7;
		z-index: 100;
		display: none;
	}

	.cnt223 a {
		text-decoration: none;
	}

	.popup {
		width: 100%;
		margin: 0 auto;
		display: none;
		position: fixed;
		z-index: 101;
	}

	.cnt223 {
		min-width: 600px;
		width: 600px;
		min-height: 150px;
		margin: 100px auto;
		background: #f3f3f3;
		position: relative;
		z-index: 103;
		padding: 15px 35px;
		border-radius: 5px;
		box-shadow: 0 2px 5px #000;
		text-align: center;
	}

		.cnt223 p {
			clear: both;
			color: #555555;
			/* text-align: justify; */
			font-size: 20px;
			font-family: sans-serif;
		}

			.cnt223 p a {
				color: #d91900;
				font-weight: bold;
			}

		.cnt223 .x {
			float: right;
			height: 35px;
			left: 22px;
			position: relative;
			top: -25px;
			width: 34px;
		}

			.cnt223 .x:hover {
				cursor: pointer;
			}

</style>
	<script type="text/javascript">
		$(document).ready(function() {
			var overlay = $('#overlay');
			var popup = $('.popup');
			function close() {
				popup.fadeOut(250);
				overlay.hide();
				return false;
			};
			overlay.show();
			popup.fadeIn(500);

			$('#close').click(close);
			$('.x').click(close);
			$('#register').click(function() {
					event.preventDefault();
					close();
					window.open('https://go.pardot.com/l/847503/2022-11-14/3db8zx', '_blank');
				}
			);
		});

	</script>

	<div id="overlay" style="display: none"></div>
	<div class='popup' style="display: none">
		<div class="cnt223">
			<h1>COMING SOON!</h1>
			<p>&nbsp;</p>
			<p><strong>New APEX Customer Portal</strong></p>
            <p>&nbsp;</p>
			<p>We have been working hard to improve the APEX customer portal and are excited to announce that on 12/12 the NEW APEX Customer Portal will be live. </p>
            <p>&nbsp;</p>
            <p>To ensure that your access isn't disrupted once the new website goes live, please <a href="" id="register">pre-register</a> to receive your new login information which will be emailed to you on 12/12.</p>
            <p>&nbsp;</p>
			<p><a href="https://go.pardot.com/l/847503/2022-11-14/3db8zx" target="_blank">Pre-Register Here</a></p>
			<p>&nbsp;</p>
			<p><a href="" id="close">Close</a></p>
		</div>
	</div>
	<!-- //modal -->

<?php
/*
UserCake Version: 2.0.2
http://usercake.com
*/

require_once("models/config.php");
if (!securePage($_SERVER['PHP_SELF'])){die();}

//Prevent the user visiting the logged in page if he/she is already logged in
if(isUserLoggedIn()) { header("Location: account.php"); die(); }

//Forms posted
if(!empty($_POST))
{
	$errors = array();
	$username = sanitize(trim($_POST["username"]));
	$password = trim($_POST["password"]);
	
	//Perform some validation
	//Feel free to edit / change as required
	if($username == "")
	{
		$errors[] = lang("ACCOUNT_SPECIFY_USERNAME");
	}
	if($password == "")
	{
		$errors[] = lang("ACCOUNT_SPECIFY_PASSWORD");
	}

	if(count($errors) == 0)
	{
		//A security note here, never tell the user which credential was incorrect
		if(!usernameExists($username))
		{
			$errors[] = lang("ACCOUNT_USER_OR_PASS_INVALID");
		}
		else
		{
			$userdetails = fetchUserDetails($username);
			//See if the user's account is activated
			if($userdetails["active"]==0)
			{
				$errors[] = lang("ACCOUNT_INACTIVE");
			}
			else
			{
				//Hash the password and use the salt from the database to compare the password.
				$entered_pass = generateHash($password,$userdetails["password"]);
				
				if($entered_pass != $userdetails["password"])
				{
					//Again, we know the password is at fault here, but lets not give away the combination incase of someone bruteforcing
					$errors[] = lang("ACCOUNT_USER_OR_PASS_INVALID");
				}
				else
				{
					//Passwords match! we're good to go'
					
					//Construct a new logged in user object
					//Transfer some db data to the session object
					$loggedInUser = new loggedInUser();
					$loggedInUser->email = $userdetails["email"];
					$loggedInUser->user_id = $userdetails["id"];
					$loggedInUser->hash_pw = $userdetails["password"];
					$loggedInUser->title = $userdetails["title"];
					$loggedInUser->displayname = $userdetails["display_name"];
					$loggedInUser->username = $userdetails["user_name"];
					
					//Update last sign in
					$loggedInUser->updateLastSignIn();
					
					$userSession = new userSession($loggedInUser->username);
					$userSession->addSession();

					
					$_SESSION["userCakeUser"] = $loggedInUser;
					
					//Redirect to user account page
					// if administrator
					if ($loggedInUser->checkPermission(array(2)))
					{
						header("Location: account.php");
					}
					else
					{
						header("Location: index.php?Arg=".$userSession->session_id);
					}

					die();
				}
			}
		}
	}
}




//login chech function
function loggedin()
{
if (isset($_SESSION['username']) || isset($_COOKIE['username']))
{
$loggedin = TRUE;
return $loggedin;
}
}

require_once("header.php");

echo "
<body class='login'>   
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src=\"https://www.googletagmanager.com/ns.html?id=GTM-KK5WJQZ\"
    height=\"0\" width=\"0\" style=\"display:none;visibility:hidden\"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    <section class='grid-container main site-form'>
        <div class='grid justify-center'>
            <form id='login-form' action='".$_SERVER['PHP_SELF']."' method='post' onsubmit='return validateForm()' class='col-12 col-sm-8'>
                <div class='grid text-left'>
                    <div class='col-md-6'>
                        <h1 class='col-12'>Apex Foot Health Portal</h1>
                        <p class='col-12'><strong>Step 1:</strong> <a href='contact.php'><strong>Register Here</strong></a> for a Password</p>
                        <p class='col-12'><strong>Step 2:</strong> Once you submit your registration, we will send you an email that will contain your Password and a PDF on how to use the portal.</p>
                        <p class='col-12'><strong>Step 3:</strong> Login using your APEX Account &#35 and Password.</p>
                        <p class='col-12'>If you have any questions or issues, contact customer service at 1-800-252-2739 or email us at <a href='mailto:aorder@apexfoot.com'>aorder@apexfoot.com</a></p>
                    </div>
                    <div class='col-md-6'>
                        <h1 class='col-12'> </h1>
                        <fieldset class='col-12 col-grid'>
                            <label for='account-number'>Enter Your APEX Account #</label>
                            <input class='col-12' type='text' name='username' id='username' value=''>
                            <p class='col-6'> </p>
                            <label for='password'>Enter Your Password</label>
                            <input class='col-12' type='password' name='password' id='password' value='' class='field'>
                            <p class='col-12'><a href='forgot-password.php' class='help' tabindex='99'>Forgot password?</a></p>
                            <div class='col-12 text-center'><input class='button' type='submit' value='Log in'></div>";
                                
                          echo resultBlock($errors,$successes);

                          echo "
                        </fieldset>
                    </div>
                </div>
            </form>
        </div>
    </section>
    <section class='grid-container'>
        <div class='ad-banner grid'>
            <div class='col-12 offset-0 col-sm-10 offset-1-sm col-lg-4 offset-0-lg col-grid direction-row banner-card style1'>
                <div class='col-6 col-bleed'>
                    <a class='background-link' target='_blank' href='pdfs/Apex_Merchandising_Display_Program_Sell_Sheet_2021.pdf'></a>
                </div>
                <div class='col-6'>
                    <h4>Extend Patient Therapy with the Apex Merchandising Display Program</h4>
                    <p>Every year the Apex footwear program is a solution to help thousands of customers like you care for many more thousands of patients. Everything You Need in One Display Center!</p>
                    <a class='button slim' target='_blank' href='pdfs/Apex_Merchandising_Display_Program_Sell_Sheet_2021.pdf'>Click to View</a>
                </div>
            </div>
            <div class='col-12 offset-0 col-sm-10 offset-1-sm col-lg-4 offset-0-lg col-grid banner-card style3'>
                <div class='col-12'>
                    <a href='https://joom.ag/gKzI' target='_blank' onclick='ga(‘send’, ‘event’, [PDF], [Download], [Apex Orthotic Suite]);'><img class='flex-img' src='images/Jeba-Display-on-Countertop-New-updated_190710.jpg' alt='Jēba Compression Hosiery & Socks' /></a>
                </div>
                <div class='col-12 text-center'>
                <h4>Introducing Jēba Compression Hosiery & Socks!</h4>
                <p>12 Styles You Will Love. Quality You Can Trust. Amazing Low Prices!</p>
                <p>Two Levels of Compression: Preventative 15-20 mmHg and Medical 20-30 mmHg</p>
                <p>Functional & Fashionable</p>
                    <a class='button slim' target='_blank' href='https://joom.ag/gKzI' onclick=\"ga(‘send’, ‘event’, 'PDF', 'Downloads', 'Apex Orthotic Suite’,'');\">Click to View</a>
                </div>
            </div>            
            <div class='col-12 offset-0 col-sm-10 offset-1-sm col-lg-4 offset-0-lg col-grid banner-card style3'>
                <div class='col-12'>
                    <a href='https://b2b.apexfoot.com/ohi1scan/' onclick='ga(‘send’, ‘event’, [PDF], [Download], [Apex Orthotic Suite]);'><img class='flex-img' src='images/Ohi1ScanBanner.png' alt='OHI1Scan' /></a>
                </div>
                <div class='col-12 text-center'>
                    <h4>OHI1Scan: Scan for Custom Diabetic Inserts & Shoes</h4>
                    <p>Use OHI1Scan to scan your patients for Custom Diabetic Inserts and footwear with our easy to use iPad App. Order on the app and get your orders quicker!</p>
                    <a class='button slim' href='https://b2b.apexfoot.com/ohi1scan/' onclick=\"ga(‘send’, ‘event’, 'PDF', 'Downloads', 'OHI1Scan’,'');\">Click to View</a>
                </div>
            </div>
        </div>
    </section>";


// require_once("footer.php");
?>
