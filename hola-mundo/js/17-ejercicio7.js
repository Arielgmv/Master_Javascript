'use strict'
/*
Tabla de multiplicar de un número introducido por pantalla
*/
var numero=parseInt(prompt('De que valor quieres la tabla', 1));
document.write('<h1>Tabla del '+numero+'</h1>');
for(var i=1; i<=10; i++){
    document.write(i+' * '+numero+' = '+(i*numero)+'<br/>');
}

//Todas las tablas de multiplicar
for (var j=1; j<=10; j++) {
    document.write('<h1>Tabla del '+j+'</h1>');
    for(var i=1; i<=10; i++){
        document.write(i+' * '+j+' = '+(i*j)+'<br/>');
    } 
    
}
