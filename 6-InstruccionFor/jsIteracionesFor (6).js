function Mostrar() {
    var contpares = 0;
    var numero;
    
    
    while (numero <= 0 || isNaN(numero)) {
numero = parseInt(prompt("Ingrese un numero"));

    for (var i = 1; i <= numero; i++) {

        if(i % 2 == 0){
            console.log(i)
            contpares++;
        }

    }
    }
 console.log("La cantidad de numeros pares es: " + contpares);

}//FIN DE LA FUNCIÓN