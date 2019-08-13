'use strict'
//trasformación de textos
var numero=444;
var texto1='Bienvenido al curso de JavaScript';
var texto2='Aprendiendo PHP';

//utilizamos el punto para acceder a las propiedades o métodos
//que tienen las variables en javascript
//convertimos el número a un string
var dato=numero.toString();
console.log(dato);
console.log(typeof dato);
console.log('**************************************');
var texto1=texto1.toUpperCase();
console.log(texto1);
console.log('**************************************');
var texto2=texto2.toLowerCase();
console.log(texto2);
console.log('**************************************');
//Calcular longitud
var nombre='Ariel';
console.log(nombre.length);
console.log('**************************************');
var array=['primer','segundo']
console.log(array);
console.log('**************************************');
//concatenar - unir textos
var textoTotal=texto1+' '+texto2;
console.log(textoTotal);
