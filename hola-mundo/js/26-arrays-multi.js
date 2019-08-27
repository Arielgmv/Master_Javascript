'use strict'
var categorias=['Acción', 'Terror', 'Comedia'];
var peliculas=['La verdad duele', 'La vida es bella', 'Gran torino'];

var cine=[categorias, peliculas];
console.log(cine);
console.log(cine[0][2]);
console.log(cine[1][2]);
//añadimos elementos al array con push
//peliculas.push('Batman');
//console.log(peliculas);
/*var elemento='';
do{
    elemento=prompt('Introduce tu película');
    peliculas.push(elemento);
}
while (elemento!='ACABAR');
//pop elimina el último elemento del array
peliculas.pop();
console.log(peliculas);*/
//convertir arrar a texto
var peliculas_string=peliculas.join();
console.log(peliculas_string);

var cadena='texto1, texto2, texto3';
//convertir cadena de texto a array
var cadena_array=cadena.split(', ');
console.log(cadena_array);
//sort ordena por orden alfabetico
peliculas.sort();
console.log(peliculas);
//reverse, da la vuelta al array
peliculas.reverse();
console.log(peliculas);
//búsquedas
var busqueda=peliculas.find(function(peliculas){
    return peliculas == 'Gran torino';
});
console.log(busqueda);
//equivalente de la búsqueda
var busqueda=peliculas.find(peliculas=>peliculas=='Gran torino');
console.log(busqueda);
//buscar el indice
var busqueda=peliculas.findIndex(peliculas=>peliculas=='Gran torino');
console.log(busqueda);
//some permite comparar
var precios=[10, 20, 30, 50, 90];
var busqueda=precios.some(precios=>precios>=50);
console.log(busqueda);
