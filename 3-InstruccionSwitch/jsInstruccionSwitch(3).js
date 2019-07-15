function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
switch (mesDelAño)
{
    case "Febrero":
        alert ("este mes no tiene mas e 29 dias");
        break;
    case "Enero":
    case "Marzo":
    case "Abril":
    case "Mayo":
    case "Junio":  
    case "Julio":
    case "Agosto":
    case "Septiembre":
    case "Octubre":
    case "Noviembre":
    case "Diciembre":
        alert  ("Este mes tiene 30 o más días");
        break;
}
}//FIN DE LA FUNCIÓN

// al seleccionar un mes informar. 
// si es Febrero: " Este mes no tiene más de 29 días." 
// si NO es Febrero: "Este mes tiene 30 o más días"