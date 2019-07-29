function mostrar()
{

	var contador;
	var acumulador;
	var numero;
	var seguir;
	var promedio; 

	seguir = 's';
	contador = 0;
	acumulador = 0;

	while (seguir == 's')
	{
		numero = parseInt (prompt ("Ingrese un número:"));
		while (isNaN(numero))
		{
			alert ("eso no es un número");
			numero = parseInt (prompt ("Ingrese un número de verdad:"));
		}

		contador ++;
		acumulador = acumulador + numero;
		seguir = prompt ("¿Quiere ingresar otro número?");
	}

promedio = acumulador / contador; 

document.getElementById('suma').value = acumulador;
document.getElementById('promedio').value = promedio;

}//FIN DE LA FUNCIÓN