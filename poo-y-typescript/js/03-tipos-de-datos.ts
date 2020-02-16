type alfanumerico = string | number;

let cadena1: alfanumerico = "atux.com"

//String
let cadena: string | number = "atuxempleos.com";

//number
let numero: number = 12;

//boleano
let verdadero_falso: boolean = true;

//any
let cualquiera: any = "hola";
cualquiera = 77;

//Arrays
var lenguajes: Array<any> = ["PHP", "JS", "CSS", 12];

let years: number[] = [12, 13, 14];

//let vs var
var numero1 = 10;
var numero2 = 12;

if(numero1 == 10){
    let numero1 = 44;
    var numero2 = 55;

    console.log(numero1, numero2);
}

console.log(numero1, numero2);

console.log(cadena, numero, verdadero_falso, cualquiera, lenguajes, years);