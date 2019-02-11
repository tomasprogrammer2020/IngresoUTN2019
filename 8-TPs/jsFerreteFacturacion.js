/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precio1;
    var precio2;
    var precio3;
    var resultado;

    precio1 = document.getElementById("PrecioUno").value;
    precio2 = document.getElementById("PrecioDos").value;
    precio3 = document.getElementById("PrecioTres").value;
    precio1 = parseFloat(precio1);
    precio2 = parseFloat(precio2);
    precio3 = parseFloat(precio3);
    resultado = precio1 + precio2 + precio3;
    alert("La suma total de los productos es: $" + resultado);
}
function Promedio () 
{
    var precio1;
    var precio2;
    var precio3;
    var resultado;

    precio1 = document.getElementById("PrecioUno").value;
    precio2 = document.getElementById("PrecioDos").value;
    precio3 = document.getElementById("PrecioTres").value;
    precio1 = parseFloat(precio1);
    precio2 = parseFloat(precio2);
    precio3 = parseFloat(precio3);
    resultado = (precio1 + precio2 + precio3) / 3;
    alert("El promedio de los productos es: $" + resultado);
}
function PrecioFinal () 
{
	var precio1;
    var precio2;
    var precio3;
    var resultado;
    var IVA

    precio1 = document.getElementById("PrecioUno").value;
    precio2 = document.getElementById("PrecioDos").value;
    precio3 = document.getElementById("PrecioTres").value;
    precio1 = parseFloat(precio1);
    precio2 = parseFloat(precio2);
    precio3 = parseFloat(precio3);
    IVA = (precio1 + precio2 + precio3) * 21 / 100;
    resultado = (precio1 + precio2 + precio3) + IVA;
    alert("El precio final de los productos es: $" + resultado);
}