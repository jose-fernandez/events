/*
5. Añade las siguientes funcionalidades al ejercicio anterior:
◦ Borrado de lineas con el ratón (mediante la pulsación del botón que tú
decidas)
◦ Borrar por completo el canvas (con un botón).
*/

function draw(){
	var table;

	table=`<table id="tabla">`;
	for (i=0;i<100;i++){
		table+=`<tr>`;
		for (a=0;a<100;a++){
			table+=`<td id="${i}.${a}"></td>`;
		}
		table+="</tr>";
	}
	table+="</table>";
	document.getElementById("table").innerHTML=table;
	document.getElementById("tabla").style.borderCollapse="Collapse";



}

function init(){
	draw();
	for (i=0;i<100;i++){
		for (a=0;a<100;a++){
			document.getElementById(`${i}.${a}`).addEventListener("mousemove", function(e){
				if(e.ctrlKey){
					e.target.style.backgroundColor="red";
				}else if(e.shiftKey){
					e.target.style.backgroundColor="blue";
				}else if(e.altKey)
					e.target.style.backgroundColor="white";
			});
		}	
	}
	document.getElementById("clear").addEventListener("click", function(e){
		document.getElementById("tabla").style.backgroundColor="white";
	});
}

window.onload=function(){
	init();
}