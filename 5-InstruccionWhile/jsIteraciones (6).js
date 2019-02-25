function Mostrar() {

	var contador = 0;
	var acumulador = 0;
	var numero;
	var promedio;

	parseFloat(prompt("Ingrese 5 numeros"));
	while (contador < 5) {

		numero = parseFloat(prompt("Ingrese otro numero"));
		acumulador = acumulador + numero;
		contador++;

	}


	promedio = acumulador / 5
	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador / 5;

}//FIN DE LA FUNCIÓN