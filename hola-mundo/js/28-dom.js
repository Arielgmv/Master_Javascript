'use strict'
//DOM - Document Object Model
function cambiaColor(color){
    caja.style.color=color;
}
//var caja=document.getElementById("micaja");
//en css #=id ; .=class; sin nada=nombre de la etiqueta
var caja=document.querySelector("#micaja");
caja.innerHTML="Texto en la caja desde JS";
caja.style.background="red";
caja.style.padding="20px";
cambiaColor("green");
caja.className="hola";
console.log(caja);