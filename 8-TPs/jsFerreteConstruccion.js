/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
var largo;
var ancho;
var radio;
var resultado;

largo = document.getElementById("Largo").value;
ancho = document.getElementById("Ancho").value;
radio = document.getElementById("Radio").value;

largo = parseFloat(largo);
ancho = parseFloat(ancho);
radio = parseFloat(radio);

resultado = (largo +ancho) * 2 * 3;

alert("Necesitara " + resultado + " metros de alambre");


}
function Circulo () 
{
var largo;
var ancho;
var radio;
var resultado;

largo = document.getElementById("Largo").value;
ancho = document.getElementById("Ancho").value;
radio = document.getElementById("Radio").value;

largo = parseFloat(largo);
ancho = parseFloat(ancho);
radio = parseFloat(radio);
resultado = (2 * Math.PI * radio) * 3;

alert(resultado)


}
function Materiales () 
{
var largo;
var ancho;
var radio;
var superficie;
var cemento;
var cal;

largo = document.getElementById("Largo").value;
ancho = document.getElementById("Ancho").value;
radio = document.getElementById("Radio").value;

largo = parseFloat(largo);
ancho = parseFloat(ancho);
radio = parseFloat(radio);
cemento = parseFloat(cemento);
cal = parseFloat(cal);
superficie = parseFloat(superficie);

superficie = largo * ancho;
cemento = superficie * 2;
cal = superficie * 3;

alert("Para una superficie de " + superficie + " m2 se necesita " + cemento + " bolsas de cemento y " + cal + " bolsas de cal");

}