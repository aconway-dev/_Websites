<?php
$conn = oci_connect('ox_prod_83', 'tecsys', '(DESCRIPTION = (ADDRESS = (PROTOCOL = TCP)(HOST = 01-ORADBPROD-1)(PORT = 1521)) (CONNECT_DATA = (SERVER = DEDICATED) (SERVICE_NAME = ELITE) ) )');

$stid = oci_parse($conn, 'select table_name from user_tables');
oci_execute($stid);

echo "<table>\n";
while (($row = oci_fetch_array($stid, OCI_ASSOC+OCI_RETURN_NULLS)) != false) {
    echo "<tr>\n";
    foreach ($row as $item) {
        echo "  <td>".($item !== null ? htmlentities($item, ENT_QUOTES) : "&nbsp;")."</td>\n";
    }
    echo "</tr>\n";
}
echo "</table>\n";

?>


