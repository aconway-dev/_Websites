<?php

class userSession {
	public $username = NULL;
	public $session_id = NULL;
	
	function __construct($user_name)
	{
		$this->username = sanitize($user_name);
		$this->session_id = generateActivationToken();		
	}
	
	public function addSession()
	{
		global $oraclei,$emailActivation,$websiteUrl,$db_table_prefix;
		
		$this->removeSession();
		
		//Insert the session into the database providing no errors have been found.
		$stmt = oci_parse($oraclei, "INSERT INTO SESSIONS (
					session_id,
					user_name,
					expiry
					)
					VALUES (
					:sessionid,
					:username,
					SYSDATE+1/24
					)");
				
		oci_bind_by_name($stmt, ":sessionid", $this->session_id);
		oci_bind_by_name($stmt, ":username", $this->username);
		oci_execute($stmt);
		oci_free_statement($stmt);
	}
	
	public function removeSession()
	{
		global $oraclei,$emailActivation,$websiteUrl,$db_table_prefix;
	
		$stmt = oci_parse($oraclei, "DELETE FROM SESSIONS WHERE user_name = :username");
				
		oci_bind_by_name($stmt, ":username", $this->username);
		oci_execute($stmt);
		oci_free_statement($stmt);
	}
	
	public function updateLastAccess()
	{
		global $oraclei,$db_table_prefix;
		
		$stmt = oci_parse($oraclei, "UPDATE SESSIONS
			SET
			expiry = SYSDATE+1/24
			WHERE
			user_name = :username");
			
		oci_bind_by_name($stmt, ":username", $this->username);
		oci_execute($stmt);
		oci_free_statement($stmt);
	}
}

?>
