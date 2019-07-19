function mostrar()
{

	var numero
	numero = prompt("Ingrese un número entre 0 y 10.");

	while (numero>10 || numero<0)
	{
		numero = prompt("Error, ingrese un número entre 0 y 10.");
	}
	document.getElementById ("Numero").value = numero



}//FIN DE LA FUNCIÓN


// Al presionar el botón pedir un número entre 0 y 9 inclusive.