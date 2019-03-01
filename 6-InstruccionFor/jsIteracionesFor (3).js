function Mostrar() {

    var repeticiones = prompt("ingrese el número de repeticiones");


    while (repeticiones <= 0 || isNaN(repeticiones)) {
        repeticiones = parseInt(prompt("Ingrese el numero de repeticiones"));

    }
    for (i = 1; i <= repeticiones; i++) {

        console.log("Hola UTN Fra " + i);
    }


}//FIN DE LA FUNCIÓN