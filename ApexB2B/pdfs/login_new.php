

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



require_once("header.php");

echo "
<body>
  <div class='container'>
    <div class='header'>
      <div class='logo'><img src='images/logo.gif' alt='Aetrex'></div>
      <p><a href='http://www.aetrex.com/'>Back to Aetrex.com</a></p>
    </div>
    <div class='main'>
      <div class='welcome-text'>
        <h2>Welcome to the Aetrex business-to-business portal. Log in using your account number and password.</h2>
        <p>
          <strong>Don’t have an account number or password?</strong><br>
          <a href='contact.php'>Please contact us</a>.
        </p>
      </div>

      <div class='form-panel'>
        <div class='form-header'>Log in</div>
        <form id='login-form' action='".$_SERVER['PHP_SELF']."' method='post' onsubmit='return validateForm()' class='form'>
          <fieldset>
            <div class='form-row'>
              <label for='account-number'>
                Account Number
              </label>
              <input type='text' name='username' id='username' value='' class='field'>
            </div>
            <div class='form-row'>
              <label for='password'>
                <a href='forgot-password.php' class='help' tabindex='99'>Forgot password?</a>
                Password
              </label>
              <input type='password' name='password' id='password' value='' class='field'>
            </div>
            <div class='form-row last'>
              <input type='submit' value='Log in' class='login-button'>
              ";
              
              echo resultBlock($errors,$successes);
              
              echo "
            </div>
          </fieldset>
        </form>
      </div>
    </div>
";

require_once("footer.php");
?>
