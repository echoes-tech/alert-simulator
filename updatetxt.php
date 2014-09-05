<?php
// get values
$valeur1 = $_POST['valeur1'];
$valeur2 = $_POST['valeur2'];
$valeur3 = $_POST['valeur3'];
$valeur4 = $_POST['valeur4'];

//opening file for writing
$fichierouvert = fopen ("valeurs.txt", "w+");

//writing values in the file
fputs($fichierouvert,"valeur1=$valeur1\n");
fputs($fichierouvert,"valeur2=$valeur2\n");
fputs($fichierouvert,"valeur3=$valeur3\n");
fputs($fichierouvert,"valeur4=$valeur4\n");

//closing file
fclose ($fichierouvert);

//opening file for reading
$fichierouvert = fopen ("valeurs.txt", "r+");

//reading file
/*while(!feof($fichierouvert))
{
	$page = fgets($fichierouvert, 4096);
	echo $page;
}*/

echo "Valeurs enregistrées";

//closing file
fclose ($fichierouvert);
?>