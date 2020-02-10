'use strict'
//funciones
/*Una función es una agrupación reutilizable de un
conjunto de instrucciones*/
//Defino la función
function porConsola(numero1, numero2) {
    console.log('Suma de '+numero1+' y '+numero2+':'+(numero1+numero2));
    console.log('Resta: '+(numero1-numero2));
    console.log('Multiplicación: '+(numero1*numero2));
    console.log('División: '+(numero1/numero2));
    console.log('***************************************');
    //return 'Hola soy la calculadora';      
}
function porPantalla(numero1, numero2) {
    document.write('Suma de '+numero1+' y '+numero2+':'+(numero1+numero2)+'<br/>');
    document.write('Resta: '+(numero1-numero2)+'<br/>');
    document.write('Multiplicación: '+(numero1*numero2)+'<br/>');
    document.write('División: '+(numero1/numero2)+'<br/>');    
    document.write('***************************************<br/>');
    //return 'Hola soy la calculadora';     
}
function calculadora(numero1, numero2, mostrar=false){
    //Conjunto de instrucciones
    if (mostrar==false) {
        porConsola(numero1, numero2);
    } else {
        porPantalla(numero1, numero2);
    }
    return true; 
}
//invocar o llamar a la función
//calculadora(12, 8);
//calculadora(98, 2);
//calculadora(98, 2, true);
//calculadora(4, 5, true);
/*
for (var i=1; i<=10; i++) {
    console.log(i);
    calculadora(i, 8);
}
*/
calculadora(3, 5, true);
calculadora(6, 7);
