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
/*var numeros=[];
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
console.log(numeros);*/
function mostrarArray(elementos, textoCustom="") {
    document.write('<h1>Contenido del Array'+textoCustom+'</h1>');
    document.write("<ul>");
    elementos.forEach((elemento, index)=>{
    document.write("<li>"+elemento+"</li>");
});
document.write("</ul>");
}
var numeros=new Array(6);
for (var i=0; i<=5; i++){
    numeros[i]=parseInt(prompt("Introduce un numero", 0));
}
//mostrar en el cuerpo de la pagina
mostrarArray(numeros);
//mostrar array en la consola
console.log(numeros);
//ordenar y mostrar
numeros.sort(function(a, b){return a-b});
console.log(numeros);
mostrarArray(numeros, ' ordenado');
//Invertir y mostrar
numeros.reverse();
mostrarArray(numeros, ' inverso');
//Cuantos elementos tiene un array
document.write("<h1>El array tiene: "+numeros.length+" elementos");
//busqueda
var busqueda=parseInt(prompt("Busca un numero", 0));
var posicion=numeros.findIndex(numero=>numero==busqueda);
if (posicion && posicion!=-1) {
    document.write("<hr/><h1>Encontrado</h1>");
    document.write("<h1>Posicion de la busqueda: "+posicion+"</h1><hr/>");
}else{
    document.write("<hr/><h1>No Encontrado</h1>");
}