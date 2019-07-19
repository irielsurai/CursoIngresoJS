function mostrar()
{

	var contador=0;
	var numero;
	var nuemroDos;
	var suma;

	
	numero = 2;
	numeroDos = "lalala";
	suma = numero*numeroDos;

	alert (numero);
	alert (suma);

	while (isNaN(suma))
	{
		alert ("error");
		suma = prompt ("error, ingrese sólo un número")
	}
	alert ("ingreso correcto" + suma);


	/* para no poner muchas barritas
	//declarar contadores y variables 
	// var respuesta="si";

	//while(respuesta!="no")
	y despues hay que cerrarlo */
	



}//FIN DE LA FUNCIÓN