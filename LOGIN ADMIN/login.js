function loguear()
{

var user= document.getElementById("usuario").value;

var pass= document.getElementById("pass").value;

if(user=="admin" && pass=="admin2023")

{


window.location="productos.html";

}
else{
    window.alert=("El usuario ingresado no existe o la clave es incorrecta");
}


}