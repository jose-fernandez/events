/*Captura el evento onClick del ratón para que cada vez que 
suceda se ejecute un alert.
*/

function click(){
	document.getElementById("parrafo").onclick=function(){
		document.getElementById("text").innerHTML="WORKS!";
	};
}

window.onload=function(){
	click();
}