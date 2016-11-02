/*
Captura el movimiento del ratón, para que se muestre la posición en 
la que se encuentra en cada momento.
*/

function mouseMov(){
	window.addEventListener("mousemove", function(e){
		document.getElementById("x").innerHTML=`X: ${e.screenX}`;
		document.getElementById("y").innerHTML=`Y: ${e.screenY}`;
	});

}

window.onload=function(){
	mouseMov();
}