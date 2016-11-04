/*
10.Mejora el ejercicio anterior para que se pueda hacer en una página con un número
cualquiera de imágenes.
*/

function moveImage(){
	var push;
	var listaImg=document.getElementsByTagName("img");
	var img=listaImg[0];
	for (i=0;i<listaImg.length;i++){
		listaImg[i].addEventListener("mousedown", function(e){
			push =true;
			x=e.offsetX;
			y=e.offsetY;
		});
		window.addEventListener("mousemove", function(a){
			if(push){
				a.preventDefault();
				img.style.top=`${a.clientY-y}px`;
				img.style.left=`${a.clientX-x}px`;		
			}		
		});
		listaImg[i].addEventListener("mouseup", function(i){
			push=false;
			x=e.offsetX;
			y=e.offsetY;
		});
	}
}

window.onload=function(){
	moveImage();
}