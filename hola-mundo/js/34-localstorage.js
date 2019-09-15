'use strict'
//Localstorage

//Comprobar disponibilidad del localstorage
if (typeof(Storage) !== 'undefined') {
    console.log("Localstorage disponible");
}else{
    console.log("Incompatible con Localstorage");
}
//Guardar datos
localStorage.setItem("titulo", "Curso de Symfony");

//Recuperar elemento
console.log(localStorage.getItem("titulo"));

document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");

//Guardar objetos
var usuario = {
    nombre: "Ariel Muñoz",
    email: "ariel.munoz.villegas@gmail.com",
    web: "atuxempleos.com"
};
localStorage.setItem("usuario", JSON.stringify(usuario));

//Recuperar objeto
var userjs = JSON.parse(localStorage.getItem("usuario"));
console.log(userjs);
document.querySelector("#datos").append(userjs.web+" - "+userjs.nombre);

localStorage.removeItem("usuario");
localStorage.clear();