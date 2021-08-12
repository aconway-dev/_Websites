<?php
/*
UserCake Version: 2.0.2
http://usercake.com
*/

require_once("models/config.php");
if (!securePage($_SERVER['PHP_SELF'])){die();}

$pages = getPageFiles(); //Retrieve list of pages in root usercake folder
$dbpages = fetchAllPages(); //Retrieve list of pages in pages table
$creations = array();
$deletions = array();

//Check if any pages exist which are not in DB
foreach ($pages as $page){
	if(!isset($dbpages[$page])){
		$creations[] = $page;	
	}
}

//Enter new pages in DB if found
if (count($creations) > 0) {
	createPages($creations)	;
}

if (count($dbpages) > 0){
	//Check if DB contains pages that don't exist
	foreach ($dbpages as $page){
		if(!isset($pages[$page['page']])){
			$deletions[] = $page['id'];	
		}
	}
}

//Delete pages from DB if not found
if (count($deletions) > 0) {
	deletePages($deletions);
}

//Update DB pages
$dbpages = fetchAllPages();

require_once("models/header.php");

echo "
    <section class='grid-container main account no-bg'>
        <div class='grid justify-space-around align-start'>
            <div class='col-10 col-md-3 menu has-logo'>
                <div class='logo'>
                    <a href='/index.php'><img src='images/logo.jpg' alt='Apex'></a>
                </div>
                <div class='main-menu'>
                    <div>";
                    include('left-nav.php');

                echo "
                    </div>
                </div>
            </div>
            <div class='col-10 col-md-5 menu'>
            <div class='grid'>
<table class='admin col-12'>
<tr><th>Id</th><th>Page</th><th>Access</th></tr>";

//Display list of pages
foreach ($dbpages as $page){
	echo "
	<tr>
	<td>
	".$page['id']."
	</td>
	<td>
	<a href ='admin_page.php?id=".$page['id']."'>".$page['page']."</a>
	</td>
	<td>";
	
	//Show public/private setting of page
	if($page['private'] == 0){
		echo "Public";
	}
	else {
		echo "Private";	
	}
	
	echo "
	</td>
	</tr>";
}

echo "
</table>
</div>
</div>
</div>
</section>
</body>
</html>
";

?>
<link rel='stylesheet' href='css/main.css?v=2.0'>
