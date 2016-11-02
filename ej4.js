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
	table=`<table>`;
	for (i=0;i<100;i++){
		table+=`<tr>`;
		for (a=0;a<100;a++){
			table+=`<td></td>`;
		}
		table+="</tr>";
	}
	table+="</table>";
	document.getElementById("table").innerHTML=table;
}

window.onload=function(){
	draw();
}