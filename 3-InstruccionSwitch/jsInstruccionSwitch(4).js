function mostrar() 
{
    //tomo la edad  
    var mesDelAño = document.getElementById('mes').value;

    //alert (mesDelAño);
    switch (mesDelAño) 
    {
        case "Febrero":
            alert("este mes tiene 28 días");
            break;
        case "Enero":
        case "Marzo":    
        case "Mayo":      
        case "Julio":
        case "Agosto":      
        case "Octubre":
        case "Diciembre":
            alert("Este mes tiene 31 días");
            break;
        case "Abril":
        case "Junio":
        case "Septiembre":
        case "Noviembre":
            alert("Este mes tiene 30 días");
            break;
    }

}//FIN DE LA FUNCIÓN

// al seleccionar un mes informar. 
// si tiene 28 días. 
// si tiene 30 días. 
// si tiene 31 días.