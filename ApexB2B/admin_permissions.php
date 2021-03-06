<?php
/*
UserCake Version: 2.0.2
http://usercake.com
*/

require_once("models/config.php");
if (!securePage($_SERVER['PHP_SELF'])){die();}

//Forms posted
if(!empty($_POST))
{
	//Delete permission levels
	if(!empty($_POST['delete'])){
		$deletions = $_POST['delete'];
		if ($deletion_count = deletePermission($deletions)){
		$successes[] = lang("PERMISSION_DELETIONS_SUCCESSFUL", array($deletion_count));
		}
	}
	
	//Create new permission level
	if(!empty($_POST['newPermission'])) {
		$permission = trim($_POST['newPermission']);
		
		//Validate request
		if (permissionNameExists($permission)){
			$errors[] = lang("PERMISSION_NAME_IN_USE", array($permission));
		}
		elseif (minMaxRange(1, 50, $permission)){
			$errors[] = lang("PERMISSION_CHAR_LIMIT", array(1, 50));	
		}
		else{
			if (createPermission($permission)) {
			$successes[] = lang("PERMISSION_CREATION_SUCCESSFUL", array($permission));
		}
			else {
				$errors[] = lang("SQL_ERROR");
			}
		}
	}
}

$permissionData = fetchAllPermissions(); //Retrieve list of all permission levels

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
                <div id='regbox' class='grid text-center'>
                    <h1 class='col-12'>User Settings</h1><div class='col-12'>
                    <div class='col-12'>";
                        echo resultBlock($errors,$successes);
                    echo "
                    </div>
<form name='adminPermissions' action='".$_SERVER['PHP_SELF']."' method='post'>
<table class='admin'>
<tr>
<th>Delete</th><th>Permission Name</th>
</tr>";

//List each permission level
foreach ($permissionData as $v1) {
	echo "
	<tr>
	<td><input type='checkbox' name='delete[".$v1['id']."]' id='delete[".$v1['id']."]' value='".$v1['id']."'></td>
	<td><a href='admin_permission.php?id=".$v1['id']."'>".$v1['name']."</a></td>
	</tr>";
}

echo "
</table>
<p>
<label>Permission Name:</label>
<input type='text' name='newPermission' />
</p>                                
<input type='submit' name='Submit' value='Submit' class='button' />
</form>
</div>
</div>
</div>
</section>
</body>
</html>
";

?>
<link rel='stylesheet' href='css/main.css?v=2.0'>