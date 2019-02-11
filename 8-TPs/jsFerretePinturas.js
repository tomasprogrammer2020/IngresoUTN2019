/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var temperatura;
    var fahrenheit;
    var centigrados;

    temperatura = parseFloat(document.getElementById("Temperatura").value);
    centigrados = temperatura = (temperatura - 32) / 1.8;
    
    alert(centigrados.toFixed(2));
}

function CentigradosFahrenheit () 
{
	var temperatura;
    var fahrenheit;
    var centigrados;

    temperatura = parseFloat(document.getElementById("Temperatura").value);
    fahrenheit= temperatura = (temperatura * 1.8) + 32;
    
    alert(fahrenheit.toFixed(2));
}
