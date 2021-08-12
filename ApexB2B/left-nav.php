<?php
/*
UserCake Version: 2.0.2
http://usercake.com
*/

if (!securePage($_SERVER['PHP_SELF'])){die();}

//Links for logged in user
if(isUserLoggedIn()) {
	echo "
	<a href='account.php'>Account Home</a>
	<a href='user_settings.php'>User Settings</a>
	<a href='logout.php'>Logout</a>";
	
	//Links for permission level 2 (default admin)
	if ($loggedInUser->checkPermission(array(2))){
	echo "
	<a href='admin_configuration.php'>Admin Configuration</a>
	<a href='admin_users.php'>Admin Users</a>
	<a href='admin_permissions.php'>Admin Permissions</a>
	<a href='admin_pages.php'>Admin Pages</a>";
	}
} 
//Links for users not logged in
else {
	echo "
	<a href='index.php'>Home</a>
	<a href='login-new.php'>Login</a>
	<a href='register.php'>Register</a>
	<a href='forgot-password.php'>Forgot Password</a>";
	if ($emailActivation)
	{
	echo "<a href='resend-activation.php'>Resend Activation Email</a>";
	}
}
?>