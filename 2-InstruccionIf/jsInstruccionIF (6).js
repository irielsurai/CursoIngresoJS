function mostrar()
{
//tomo la edad  

var edad;
edad = document.getElementById("edad").value;

if (edad >= 18)

{
    alert ("Es mayor de edad");
}


if (edad < 18 )
{
    if (edad > 12 )
    {
        alert ("Es adolescente"); 
    }
}

if (edad <= 12)
{
    alert ("Es menor de edad");
}

   
}//FIN DE LA FUNCIÓN