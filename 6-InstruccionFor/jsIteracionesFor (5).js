function Mostrar() {


    var numero = prompt("ingrese un numero");


    for (; ;) {
        numero = parseInt(prompt("Ingrese un numero"));
        console.log(numero);
        if (numero == 9) {
            break;
        }
    }



}//FIN DE LA FUNCIÓN