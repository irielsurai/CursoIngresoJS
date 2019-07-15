function mostrar()
{
    //tomo la edad  

    var edad;
    var edoCivil;

    edad = document.getElementById("edad").value;
    edoCivil = document.getElementById("estadoCivil").value;

    if (edad >= 18 && edoCivil == "Soltero")
    {   
        alert ("");
    }



}   
//FIN DE LA FUNCIÓN


//     Tambien se puede negar la condición de l ejercicio 7   
//     if (!(edad < 18 && edoCivil != "Soltero"))
//     {   
//          alert ("Es soltero y no es menor.");
//     }
