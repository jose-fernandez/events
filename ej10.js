/*
10.Mejora el ejercicio anterior para que se pueda hacer en una página con un número
cualquiera de imágenes.
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