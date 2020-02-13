'use strict'
//Arrays, arreglos, matrices
var nombre='Ariel Muñoz';
//Los arrays tienen índices, cada elemento está guardado en un índice
var nombres=['Ariel Muñoz', 'Ana Garcia', 'Geraldine Ibieta', 'Rodrigo Rodriguez', 'Oswaldo Soliz'];
//definir array en forma de objeto
//creo el objeto Array
var lenguajes = new Array('PHP', 'JS', 'Go', 'Java', 'C', 'C#');
console.log(nombres);
console.log(lenguajes);
console.log(nombres[0]);
//ejemplo como en los cursos de PHP
var errores=new Array();
errores[0]='El nombre no es válido';
errores[1]='Los apellidos no son válidos';
errores['numero']=235;
console.log(errores);
console.log(errores.length);
console.log(nombres.length);
console.log('***********************');
/*
var elemento=parseInt(prompt('Que elemento del array quieres?', 0));
if (elemento>=nombres.length) {
    alert('Introduce un número menor a: '+nombres.length);
} else {
    alert('El usuario seleccionado es: '+nombres[elemento]);
}
*/
document.write('<h1>Lenguajes de Programación del 2019</h1>');
document.write('<ul>');
/*
for (var i=0; i<lenguajes.length; i++) {
    document.write('<li>'+lenguajes[i]+'</li>');
}
*/
lenguajes.forEach((elemento)=>{
    document.write('<li>'+elemento+'</li>');
});
document.write('</ul>');

document.write('<ul>');
lenguajes.forEach((elemento, indice)=>{
    document.write('<li>'+indice+' - '+elemento+'</li>');
});
document.write('</ul>');

document.write('<ul>');
nombres.forEach((elemento)=>{
    document.write('<li>'+elemento+'</li>');
});
document.write('</ul>');