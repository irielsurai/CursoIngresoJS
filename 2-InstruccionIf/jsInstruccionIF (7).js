function mostrar()
{
//tomo la edad  

    var edad;
    var edoCivil;

    edad = document.getElementById("edad").value;
    edoCivil = document.getElementById("estadoCivil").value;
    
    if (edad >= 18)
    {   
        if (edoCivil == "Soltero")
        {
            alert ("Es muy pequeño para NO ser soltero.");
        }
    }

}//FIN DE LA FUNCIÓN