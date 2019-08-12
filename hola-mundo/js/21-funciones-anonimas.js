'use strict'
//funciones anónimas
//Es una función que no tienen nombre
/*var pelicula=function(nombre){
    return 'La película es: '+nombre;
}*/
//callbacks es una función anónima y que se le
//pasa como parámetro a otra función
function sumame(numero1, numero2, sumaYmuestra, sumaPorDos) {
    var sumar=numero1+numero2;
    sumaYmuestra(sumar);
    sumaPorDos(sumar);
    return sumar;
}
sumame(5, 7, function(dato) {
    console.log('La suma es: ', dato);
},
function(dato) {
    console.log('La suma por dos es: ', (dato*2));
});

