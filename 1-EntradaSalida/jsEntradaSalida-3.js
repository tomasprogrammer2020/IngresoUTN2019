/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'MOSTRAR'*/
function Mostrar()
{
    var mensaje;
    mensaje = ("Su nombre es ");
	var nombre;
    nombre = document.getElementById("elNombre").value;
    alert(mensaje + nombre);
}



