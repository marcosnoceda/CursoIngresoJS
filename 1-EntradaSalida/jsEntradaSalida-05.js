/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	alert("Usted se llama "+ document.getElementById("txtIdNombre").value + " y tiene " + document.getElementById("txtIdEdad").value + " años");
}

