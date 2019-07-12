function mostrar()
{
//tomo la edad  

    var edad;
    edad = document.getElementById("edad").value;

   // Con dos if:
    if (edad < 18 )
    {
        if (edad > 12 )
        {
        alert ("Es adolescente"); 
        }
    }

   
   // Otra manera de hacerlo con un solo if:   
    //if (edad < 18 && edad > 12)
    //{        
    //     alert ("Es adolescente");           
    //}


}//FIN DE LA FUNCIÓN