<?php
/*
UserCake Version: 2.0.2
http://usercake.com
*/


require_once("models/config.php");
if (!securePage($_SERVER['PHP_SELF'])){die();}

//Prevent the user visiting the logged in page if he is not logged in
if(!isUserLoggedIn()) { header("Location: login.php"); die(); }

if(!empty($_POST))
{
	$errors = array();
	$successes = array();
	$password = $_POST["password"];
	$password_new = $_POST["passwordc"];
	$password_confirm = $_POST["passwordcheck"];
	
	$errors = array();
	$email = $_POST["email"];
	
	//Perform some validation
	//Feel free to edit / change as required
	
	//Confirm the hashes match before updating a users password
	$entered_pass = generateHash($password,$loggedInUser->hash_pw);
	
	if (trim($password) == ""){
		$errors[] = lang("ACCOUNT_SPECIFY_PASSWORD");
	}
	else if($entered_pass != $loggedInUser->hash_pw)
	{
		//No match
		$errors[] = lang("ACCOUNT_PASSWORD_INVALID");
	}	
	if($email != $loggedInUser->email)
	{
		if(trim($email) == "")
		{
			$errors[] = lang("ACCOUNT_SPECIFY_EMAIL");
		}
		else if(!isValidEmail($email))
		{
			$errors[] = lang("ACCOUNT_INVALID_EMAIL");
		}
		else if(emailExists($email))
		{
			$errors[] = lang("ACCOUNT_EMAIL_IN_USE", array($email));	
		}
		
		//End data validation
		if(count($errors) == 0)
		{
			$loggedInUser->updateEmail($email);
			$successes[] = lang("ACCOUNT_EMAIL_UPDATED");
		}
	}
	
	if ($password_new != "" OR $password_confirm != "")
	{
		if(trim($password_new) == "")
		{
			$errors[] = lang("ACCOUNT_SPECIFY_NEW_PASSWORD");
		}
		else if(trim($password_confirm) == "")
		{
			$errors[] = lang("ACCOUNT_SPECIFY_CONFIRM_PASSWORD");
		}
		else if(minMaxRange(8,50,$password_new))
		{	
			$errors[] = lang("ACCOUNT_NEW_PASSWORD_LENGTH",array(8,50));
		}
		else if($password_new != $password_confirm)
		{
			$errors[] = lang("ACCOUNT_PASS_MISMATCH");
		}
		
		//End data validation
		if(count($errors) == 0)
		{
			//Also prevent updating if someone attempts to update with the same password
			$entered_pass_new = generateHash($password_new,$loggedInUser->hash_pw);
			
			if($entered_pass_new == $loggedInUser->hash_pw)
			{
				//Don't update, this fool is trying to update with the same password Â¬Â¬
				$errors[] = lang("ACCOUNT_PASSWORD_NOTHING_TO_UPDATE");
			}
			else
			{
				//This function will create the new hash and update the hash_pw property.
				$loggedInUser->updatePassword($password_new);
				$successes[] = lang("ACCOUNT_PASSWORD_UPDATED");
			}
		}
	}
	if(count($errors) == 0 AND count($successes) == 0){
		$errors[] = lang("NOTHING_TO_UPDATE");
	}
}

require_once("models/header.php");
echo "
<body>
    <section class='grid-container main account no-bg'>
        <div class='grid justify-space-around align-start'>
            <div class='col-10 col-md-3 menu has-logo'>
                <div class='logo'><a href='/index.php'><img src='images/logo.jpg' alt='Apex'></a></div>
                <div class='main-menu'>
                    <div>";
                    include('left-nav.php');

                echo "
                </div>
                </div>
            </div>
            <div class='col-10 col-md-5 menu'>
                <div id='regbox' class='grid'>
                    <div class='col-12'>";
                        echo resultBlock($errors,$successes);
                    echo "
                    </div>
                    <h1 class='col-12'>User Settings</h1>
                    <form name='updateAccount' action='".$_SERVER['PHP_SELF']."' class=\"form col-12\" method=\"post\">
                        <div class='grid'>
                            <div class='col-12 col-md-6'>
                                <label>Current Password:</label>
                                <input type='password' name='password' />
                            </div>
                            <div class='col-12 col-md-6'>
                                <label>Email:</label>
                                <input type='text' name='email' value='".$loggedInUser->email."' />
                            </div>
                            <div class='col-12 col-md-6'>
                                <label>New Pass:</label>
                                <input type='password' name='passwordc' />
                            </div>
                            <div class='col-12 col-md-6'>
                                <label>Confirm Pass:</label>
                                <input type='password' name='passwordcheck' />
                            </div>
                            <label>&nbsp;</label>
                            <dic class='col-12 text-center'>
                                <input type='submit' value='Update' class='submit button' />
                            </div>
                            <div class='col-12 text-center'>";
                                echo resultBlock($errors,$successes);
                                echo "
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </section>
    </body>
</html>";
?>

<link rel='stylesheet' href='css/main.css?v=2.0'>
