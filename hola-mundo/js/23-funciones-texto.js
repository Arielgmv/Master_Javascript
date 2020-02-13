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
var array=['primer','segundo', 'tercero']
console.log(array);
console.log('**************************************');
//concatenar - unir textos
var textoTotal=texto1+' '+texto2;
console.log(textoTotal);
console.log('**************************************');
var textoTotal1=texto1.concat(' '+texto2);
console.log(textoTotal1);
console.log('**********************************************************');
//Métodos de búsqueda
var numero1=333;
var texto3='Bienvenido al curso de curso JavaScript';
var texto4='Aprendiendo PHP';
var busqueda=texto3.indexOf('curso');
console.log(busqueda);
console.log('**************************************');
var busqueda1=texto3.lastIndexOf('curso');
console.log(busqueda1);
console.log('**************************************');
var busqueda2=texto3.search('JavaScript');
console.log(busqueda2);
console.log('**************************************');
var busqueda3=texto3.match(/curso/g);
console.log(busqueda3);
console.log('**************************************');
//saca los caracteres que inician en la posición 14 y toma en cuenta las 5 siguientes
var busqueda4=texto3.substr(14,5);
console.log(busqueda4);
console.log('**************************************');
//saca una letra en concreto
var busqueda5=texto3.charAt(23);
console.log(busqueda5);
console.log('**************************************');
//método que busca un texto en concreto al inicio
var busqueda6=texto3.startsWith('Bi');
console.log(busqueda6);
console.log('**************************************');
//método que busca un texto en concreto al final
var busqueda7=texto3.endsWith('Script');
console.log(busqueda7);
console.log('**************************************');
//método que busca una palabra
var busqueda8=texto3.includes('al');
console.log(busqueda8);
console.log('**************************************');
//método que reemplaza un texto por otro
var busqueda9=texto3.replace('JavaScript', 'PHP');
console.log(busqueda9);
console.log('**************************************');
//método que recorta un string a partir de donde le indiquemos
var busqueda10=texto3.slice(14, 25);
console.log(busqueda10);
console.log('**************************************');
//método que mete dentro de un array
var busqueda11=texto3.split();
console.log(busqueda11);
console.log('**************************************');
//método que mete dentro de un array, lo separa donde hay espacio
var busqueda12=texto3.split(' ');
console.log(busqueda12);
console.log('**************************************');
//método trim que quita los espacios del inicio y el final
var texto5='    Bienvenido al curso de curso JavaScript   ';
var busqueda13=texto5.trim();
console.log(busqueda13);