function mostrar()
{
    var sexo;
    sexo = prompt("Ingrese f ó m .");
    while (sexo != "f" && sexo != "m")
    {
        sexo = prompt("Error, ingrese f ó m .");
    }
    alert ("genial, sos un binario");



    
    document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN

// Al presionar el botón pedir un sexo 'f' para femenino, 'm' para masculino. 