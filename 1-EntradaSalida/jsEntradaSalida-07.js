/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var uno= parseInt(document.getElementById("txtIdNumeroUno").value);
	var dos= parseInt(document.getElementById("txtIdNumeroDos").value);
	var s=uno+dos;
	alert("la suma es " + s);
}
	

function restar()
{var uno= parseInt(document.getElementById("txtIdNumeroUno").value);
	var dos= parseInt(document.getElementById("txtIdNumeroDos").value);
	var s=uno-dos;
	alert("la resta es " + s);
	
}

function multiplicar()
{ var uno= parseInt(document.getElementById("txtIdNumeroUno").value);
	var dos= parseInt(document.getElementById("txtIdNumeroDos").value);
	var s=uno*dos;
	alert("la multiplicacion es " + s);
	
}

function dividir()
{var uno= parseInt(document.getElementById("txtIdNumeroUno").value);
	var dos= parseInt(document.getElementById("txtIdNumeroDos").value);
	var s=uno/dos;
	alert("la divicion es " + s);
	
}

