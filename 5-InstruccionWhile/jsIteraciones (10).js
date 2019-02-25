function Mostrar() {
	var numero;
	var contador = 0;
	var acumneg = 0;
	var acumpos = 0;
	var contpos = 0;
	var contneg = 0;
	var contceros = 0;
	var contpares = 0;
	var promedioneg;
	var promediopos;
	var diferencia;

	//declarar contadores y variables 
	var respuesta = "s";

	do {
		numero = parseFloat(prompt("Ingrese un numero"));

		if (numero > 0) {

			acumpos += numero;
			contpos++

		}
		else if (numero < 0) {
			acumneg += numero;
			contneg++;

		}
		else {
			contceros++;

		}

		if (numero % 2 == 0) {
			contpares++;
		}


		respuesta = prompt("Quiere continuar?").toLowerCase();

	} while (respuesta == "s")


	promediopos = acumpos / contpos;
	promedioneg = acumneg / contneg;
	diferencia = contpos - contneg;

	document.write("1-Suma de los negativos: " + acumneg + "<br>");
	document.write("2-Suma de los positivos: " + acumpos + "<br>");
	document.write("3-Cantidad de positivos: " + contpos + "<br>");
	document.write("4-Cantidad de negativos: " + contneg + "<br>");
	document.write("5-Cantidad de ceros: " + contceros + "<br>");
	document.write("6-Cantidad de números pares: " + contpares + "<br>");
	document.write("7-Promedio de positivos: " + promediopos + "<br>");
	document.write("8-Promedios de negativos: " + promedioneg + "<br>");
	document.write("9-Diferencia entre positivos y negativos, (positivos-negativos): " + diferencia);






}//FIN DE LA FUNCIÓN