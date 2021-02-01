/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{

	var uno= parseInt(document.getElementById("txtIdNumeroUno").value);
	var dos= parseInt(document.getElementById("txtIdNumeroDos").value);
	var s=uno/dos;
	alert("la suma es " + s);
}

