'use strict'
function holaMundo(texto) {
    //variable local dentro de la función
    var hola_mundo='Texto dentro de función';
    console.log(texto);
    console.log(typeof numero.toString());
    console.log(hola_mundo);
}
var numero=12;
var texto='Hola mundo soy una variable global';
holaMundo(texto);