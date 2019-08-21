'use strict'
/*
1. Pida 6 números por pantalla y los meta en un array
2. Mostrar el array entero (todos sus elementos) en el cuerpo de la página y en la consola
3. Ordenarlo y mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar cuantos elementos tiene el array
6. Búsqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su índice
(se valorará el uso de funciones)
*/
var numeros=[];
var i=0;
while (i<=5) {
    var numeros_introducidos=prompt('Introduce un número');
    numeros.push(numeros_introducidos);
    i++;
}
document.write('<h1>'+numeros+'</h1>')
console.log(numeros);
numeros.sort();
document.write('<h1>'+numeros+'</h1>')
console.log(numeros);
numeros.reverse(numeros);
document.write('<h1>'+numeros+'</h1>')
console.log(numeros);