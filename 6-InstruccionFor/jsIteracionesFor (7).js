function Mostrar()
{ 
var contdivisores = 0;
    var numero;
    
    
    while (numero <= 0 || isNaN(numero)) {
numero = parseInt(prompt("Ingrese un numero"));

    for (var i = 0; i <= numero; i++) {

        if(numero % i == 0){
            console.log(i);
            contdivisores++;
        
        }

    }
    }
 console.log("La cantidad de numeros divisores es: " + contdivisores);




}//FIN DE LA FUNCIÓN