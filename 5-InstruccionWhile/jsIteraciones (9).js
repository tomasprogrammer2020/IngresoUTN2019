function Mostrar() {

	// declarar variables

	var respuesta;
	var numero;
	var minimo;
	var maximo;
	var flag = 0;


	do {
		numero = parseFloat(prompt("Ingrese un numero"));
		
		if(numero > maximo || flag == 0) {
			maximo = numero;

		}
		else if (numero < minimo || flag == 0) {
			minimo = numero;
			flag = 1
		}


		respuesta = prompt("Quiere continuar?").toLowerCase();

	} while (respuesta == "s");

	document.getElementById("maximo").value = maximo;
	document.getElementById("minimo").value = minimo;


}//FIN DE LA FUNCIÓN