/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
var sueldo;
var aumento;

sueldo = document.getElementById("sueldo").value;
sueldo = parseInt(sueldo);

aumento = sueldo * 10 / 100;
aumento = parseInt(aumento);
alert("Su aumento va a ser de: " + aumento);
document.getElementById("resultado").value = (sueldo + aumento);

}
