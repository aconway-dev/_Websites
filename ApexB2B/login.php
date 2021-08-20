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
                    <a href='pdfs/Apex_A-Wave_Prefab_Sell_Sheet_Order_Form_USA.pdf' target='_blank' onclick='ga(‘send’, ‘event’, [PDF], [Download], [Apex Orthotic Suite]);'><img class='flex-img' src='images/orthotic-suite.jpg' alt='Orthotic Suite - A-Wave and SelectFlex' /></a>
                </div>
                <div class='col-12 text-center'>
                    <h4>Apex A-Wave Prefabricated Orthotics</h4>
                    <p>Developed by a team of top experts in the field of foot and ankle biomechanics, the Apex Orthotic Suite offers three of the most innovative prefabricated orthotic inserts available.</p>
                    <a class='button slim' target='_blank' href='pdfs/Apex_A-Wave_Prefab_Sell_Sheet_Order_Form_USA.pdf' onclick=\"ga(‘send’, ‘event’, 'PDF', 'Downloads', 'Apex Orthotic Suite’,'');\">Click to View</a>
                </div>
            </div>
        </div>
    </section>";


// require_once("footer.php");
?>
