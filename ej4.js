/*
Eventos onMouseMove y onLoad. Debemos ser capaces de dibujar con 
nuestro ratón en dos colores diferentes. Para ello primero simularemos 
que disponemos de un canvas gráfico: realmente se tratará de una tabla 
con celdas de pequeño tamaño (100x100 puede valer). Tu programa creará 
ese canvas una vez cargada la página (onLoad). Lo siguiente será detectar 
el movimiento del ratón sobre las celdas para pintarlas de un color, el 
cual será rojo si se mantiene pulsada simultaneamente la tecla Ctrl y azul 
si se pulsa Shift. En otro caso no deberá pintarse nada.
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
				}

			});
		}
			
	}	
}

window.onload=function(){
	init();
}