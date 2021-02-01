/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{var uno= parseInt(document.getElementById("txtIdNumeroDividendo").value);
	var dos= parseInt(document.getElementById("txtIdNumeroDivisor").value);
	var s=uno%dos;
	alert("el resto es " + s);
	
}
