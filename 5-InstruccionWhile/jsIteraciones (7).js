function Mostrar() {

	var contador = 0;
	var acumulador = 0;
	var respuesta;
	var numero;
	do {
		numero = parseFloat(prompt("Ingrese un numero"));
		acumulador += numero;
		contador++;
		respuesta = prompt("Quiere continuar?").toLowerCase();



	} while (respuesta == "s");

	promedio = acumulador / contador;

	document.getElementById("suma").value = acumulador;
	document.getElementById("promedio").value = promedio;

}//FIN DE LA FUNCIÓN