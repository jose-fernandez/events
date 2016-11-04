/*
10.Mejora el ejercicio anterior para que se pueda hacer en una página con un número
cualquiera de imágenes.
*/
class imagen{
	constructor(x){
		this.img=document.getElementById(x);
		this.moveImage(this.img);
	}

	moveImage(img){
		var push=0;
		var that=this;
		img.addEventListener("mousedown", function(e){
			push = 1;
			that.x=e.offsetX;
			that.y=e.offsetY;
		});
		window.addEventListener("mousemove", function(a){
			if(push==1){
				a.preventDefault();
				img.style.top=`${a.clientY-that.y}px`;
				img.style.left=`${a.clientX-that.x}px`;		
			}		
		});
		img.addEventListener("mouseup", function(i){
			push=2;
			that.x=i.offsetX;
			that.y=i.offsetY;
		});
	}

	
}


window.onload=function(){
	new imagen("image1");
	new imagen("image2");
	new imagen("image3");
}