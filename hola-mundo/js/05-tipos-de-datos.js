"use strict"
//operadores
var numero1=7;
var numero2=12;
var operacion=numero1+numero2;
alert("El resultado de la operación es: "+operacion);

//tipos de datos
var numero_entero=44;
var cadena_texto="Hola 'que' tal";
console.log(cadena_texto);
var verdadero_o_falso=true;
console.log(verdadero_o_falso);

var numero_falso="33.4";
console.log(numero_falso+7);
console.log(Number(numero_falso)+7);//convirtiendo a numero (entero, decimal, etc.)
console.log(parseInt(numero_falso)+7);//convirtiendo a entero
console.log(parseFloat(numero_falso)+7);//convirtiendo a decimal

var numero_verdadero=44;
console.log(numero_verdadero+7);
console.log(String(numero_verdadero)+7);//convirtiendo a texto

//Conocer eltipo de variable typeof
console.log(typeof verdadero_o_falso);
console.log(typeof numero_falso);
console.log(typeof numero_verdadero);




