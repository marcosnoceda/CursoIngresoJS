/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
var dato = prompt("Ingrese un dato", "Harry Potter");

function mostrar()
{
	if (dato != null) {
  
  document.getElementById("txtIdNombre").value= dato;
}
}

