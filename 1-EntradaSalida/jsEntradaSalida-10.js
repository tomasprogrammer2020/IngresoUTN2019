/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarDescuento()
{
  var importe;
  var resultado;
  var descuento;

  importe = document.getElementById("importe").value;
  importe = parseInt(importe);
  descuento = importe * 25 / 100;
  descuento = parseInt(descuento);
  resultado = importe - descuento;
  document.getElementById("resultado").value = resultado
  alert("Su descuento es de: " + descuento + "$");
}
