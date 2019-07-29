function mostrar()
{
	var contador;
	var positivo;
	var negativo;
	var respuesta;

	contadorNeg=0;
	positivo=0;
	negativo=1;
	respuesta = 's';

	while (respuesta == 's')
	{
		numero = parseInt (prompt ("Ingrese un número:"));
		while (isNaN(numero))
		{
			alert ("eso no es un número");
			numero = parseInt (prompt ("Ingrese un número de verdad:"));
		}

		if (numero >= 0)
		{
			positivo = positivo + numero;
		} 
		else
		{
			negativo = negativo * numero;
			contadorNeg = contadorNeg + 1;
		}

		respuesta = prompt ("¿Quiere ingresar otro número?");
	}

	if (contadorNeg == 0)
	{
		negativo = 0;
	}
	document.getElementById('suma').value = positivo;
	document.getElementById('producto').value = negativo;

}//FIN DE LA FUNCIÓN


// Al presionar el botón pedir números hasta 
// que el usuario quiera, sumar los que son 
// positivos y multiplicar los negativos.

