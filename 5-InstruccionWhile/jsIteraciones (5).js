function Mostrar() {

    var sexo = prompt("Ingrese f ó m .");


    while (!(sexo == "f" || sexo == "m")) {

        sexo = prompt("Dato incorrecto. Ingrese f ó m .");

    }

    alert("El dato fue ingresado correctamente");

   if (sexo == "f") {
        document.getElementById('Sexo').value = "El sexo ingresado es: Femenino";
    }
    else {
        document.getElementById('Sexo').value = "El sexo ingresado es: Masculino";
    }

}//FIN DE LA FUNCIÓN