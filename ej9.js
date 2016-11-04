/*
9. Crea una página web que haciendo uso de eventos permita arrastrar una imagen
haciendo uso del ratón (al pulsar sobre la imagen la voy arrastrando hasta que suelto
el botón).
*/

function moveImage(){
	var push=0;
	var img=document.getElementById("image");
	img.addEventListener("mousedown", function(e){
		push = 1;
		x=e.offsetX;
		y=e.offsetY;
	});
	window.addEventListener("mousemove", function(a){
		if(push<2){
			a.preventDefault();
			img.style.top=`${a.clientY-y}px`;
			img.style.left=`${a.clientX-x}px`;		
		}		
	});
	img.addEventListener("mouseup", function(i){
		push=2;
		x=e.offsetX;
		y=e.offsetY;
	});
}

window.onload=function(){
	moveImage();
}