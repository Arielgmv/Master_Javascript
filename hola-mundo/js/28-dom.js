'use strict'
//DOM - Document Object Model
function cambiaColor(color){
    caja.style.color=color;
}
//Conseguir elementos con id concreto

//var caja=document.getElementById("micaja");
//en css #=id ; .=class; sin nada=nombre de la etiqueta
var caja=document.querySelector("#micaja");
caja.innerHTML="Test de Texto en la caja desde JS";
caja.style.background="brown";
caja.style.padding="10px";
cambiaColor("yellow");
caja.className="hola1";
console.log(caja);

//Conseguir elementos por su etiqueta
var todosLosDivs=document.getElementsByTagName('div');
//var contenidoEnTexto=todosLosDivs[2].textContent;
//var contenidoEnTexto=todosLosDivs[2].innerHTML;
/*var contenidoEnTexto=todosLosDivs[2];
contenidoEnTexto.innerHTML="Otro texto para el segundo elemento";
contenidoEnTexto.style.background="red";*/
//todosLosDivs.forEach((valor, indice)=>{
var seccion=document.querySelector("#miseccion");
var hr=document.createElement("hr");

var valor;
for(valor in todosLosDivs){
    //console.log(todosLosDivs[valor]);
    if (typeof todosLosDivs[valor].textContent == 'string') {
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.append(texto);
        seccion.append(parrafo);   
    }
}
seccion.append(hr);
//});
//console.log(contenidoEnTexto);
//Conseguir elementos por su clase
var divsRojos=document.getElementsByClassName('rojo');
var divsAmarillos=document.getElementsByClassName('amarillo');
console.log(divsAmarillos);
divsAmarillos[0].style.background="yellow";
/*divsRojos[0].style.background="red";
divsRojos[1].style.background="red";*/
var div;
for (div in divsRojos){
    if (divsRojos[div].className=="rojo") {
        divsRojos[div].style.background="red";    
    }    
}
console.log(divsRojos);

// Query selector
var id=document.querySelector("#encabezado");
console.log(id);

var claseRojo=document.querySelector(".rojo");
console.log(claseRojo);