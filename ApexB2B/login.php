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
                    <div class='col-md-12'>
                    <h2>New APEX B2B Customer Portal</h2>
                    <p>&nbsp;</p>
                    <p>We have been working hard to improve the APEX customer portal and are excited to announce that the NEW APEX Customer Portal will be live soon.</p>
                    <p>&nbsp;</p>
        <p>If need access to the new portal, please register to receive your new login information. Once you complete sign-up you will be contacted within 48 hours on next steps. If you have any questions, please contact us at <a href='mailto:aorder@apexfoot.com'>aorder@apexfoot.com</a>.</p>
                    <p>&nbsp;</p>
                    <p><a href='https://go.pardot.com/l/847503/2022-11-14/3db8zx' target='_blank'>Register Here</a></p>
                    </div>
                </div>
            </form>
        </div>
    </section>
";


// require_once("footer.php");
?>
