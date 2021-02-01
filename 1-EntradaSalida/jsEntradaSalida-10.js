/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var inporte= parseInt(document.getElementById("txtIdImporte").value);
	var descuento= inporte - inporte * 0.25; 
	
	document.getElementById("txtIdResultado").value=descuento;
	
}
