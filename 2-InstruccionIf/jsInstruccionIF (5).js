function mostrar()
{
//tomo la edad  
   
    var edad;
    edad = document.getElementById("edad").value;
    
    // con dos if:
    if (edad > 17)
    {        
        alert ("No es adolescente");           
    }

    if (edad < 13)
    {        
        alert ("No es adolescente");           
    }


    // Con un solo if:
    // if (edad > 17 || edad < 13)
    //{        
    //    alert ("No es adolescente");           
    //}

}//FIN DE LA FUNCIÓN