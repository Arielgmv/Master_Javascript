'use strict'
//bucle while
var year=2019;
while (year<=2051) {
    //ejecuta esto
    console.log('Estamos en el año '+year);
    if (year==2045){
        break;
    }
    year++;
}

//Do while
var years=30;
do{
    alert('solo cuando sea diferente a 20');
    years--;
}while (years>25)