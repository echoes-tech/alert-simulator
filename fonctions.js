//Fonction d'instance permettant de vérifier si le navigateur supporte l'objet XMLHTTPRequest
function objet_XMLHttpRequest()
{
//On déclare une variable "mavariable" à null
var mavariable = null;
//Teste si le navigateur prend en charge les XMLHttpRequest
if (window.XMLHttpRequest || window.ActiveXObject){
// Si Internet Explorer alors on utilise les ActiveX
if(window.ActiveXObject){
//On teste IE7 ou supérieur
try{
mavariable = new ActiveXObject("Msxml2.XMLHTTP");
}
//Si une erreur est levée, alors c'est IE 6 ou inférieur
catch(e){
mavariable = new ActiveXObject("Microsoft.XMLHTTP");
}
}
//Navigateurs récents (Firefox, Opéra, Chrome, Safari, ...)
else{
mavariable = new XMLHttpRequest();
}
}
//XMLHttpRequest non supporté par le navigateur
else{
alert("Votre navigateur ne supporte pas l'objet XMLHTTPRequest...");
return null;
}
//On retourne l'objet mavariable
//alert(mavariable);
return mavariable;
}

function teste_ajax(){
 //On déclare une variable
var mavariable = objet_XMLHttpRequest();
 
//get datas from the FORM via POST
var valeur1 = encodeURIComponent(document.getElementById("valeur1").value);
var valeur2 = encodeURIComponent(document.getElementById("valeur2").value); 
var valeur3 = encodeURIComponent(document.getElementById("valeur3").value);
var valeur4 = encodeURIComponent(document.getElementById("valeur4").value); 

//On assigne une fonction à la propriété onreadystatechange 
mavariable.onreadystatechange = function(){ 
//Si l'attribut readyState renvoie 4 et que l'attribut status renvoie 200 
if(mavariable.readyState == 4 && mavariable.status == 200){ 
//On affiche le résultat chargé dans l'attribut responseText qui est affiché dans un div nommé "mondiv" 
document.getElementById("mondiv").innerHTML=mavariable.responseText; 
//On vide le champ message 
//document.getElementById("valeur1").value=''; 
//document.getElementById("valeur2").value=''; 
//document.getElementById("valeur3").value=''; 
//document.getElementById("valeur4").value=''; 
} 
};
 //On déclare la méthode d'envoi
mavariable.open("POST","updatetxt.php",true); 
//On assigne un header 
mavariable.setRequestHeader("Content-type","application/x-www-form-urlencoded"); 
//On envoie 
mavariable.send("valeur1="+valeur1+"&valeur2="+valeur2+"&valeur3="+valeur3+"&valeur4="+valeur4);
}


