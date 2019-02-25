function Mostrar() {

	var numero = prompt("Ingrese un número entre 0 y 10.");

	while (!(numero >= 0 && numero <= 9)) {

		numero = prompt("Incorrecto. Ingrese un número entre 0 y 10.");

	}

	alert("Correcto");

	document.getElementById("Numero").value = "El numero validado es: " + numero;

}//FIN DE LA FUNCIÓN