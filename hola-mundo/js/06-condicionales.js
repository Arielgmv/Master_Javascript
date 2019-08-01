'use strict';
//condicional IF
//Si A es igual a B entonces haz algo
var edad1=30;
var edad2=42;
//si pasa esto
if(edad1>edad2){
    //ejecuta esto
    console.log("Edad 1 es mayor que edad 2");
}else{
    console.log("Edad 2 es mayor que edad 1");
}

var edad=95;
var nombre="David Suarez";
if(edad>=18){
    console.log(nombre+" es mayor de edad");
    if(edad<=33){
        console.log("Todavía eres millenial");
    }else if(edad<=45){
        console.log("Eres adulto joven");
    }else if(edad>=70){
        console.log("Eres adulto mayor");
    }else{
        console.log("Ya no eres millenial");
    }
}else{
    console.log(nombre+" es menor de edad");
}