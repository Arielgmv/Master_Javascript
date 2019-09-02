'use strict'
//DOM - Document Object Model
function cambiaColor(color){
    caja.style.color=color;
}
//Conseguir elementos con id concreto

//var caja=document.getElementById("micaja");
//en css #=id ; .=class; sin nada=nombre de la etiqueta
var caja=document.querySelector("#micaja");
caja.innerHTML="Texto en la caja desde JS";
caja.style.background="red";
caja.style.padding="20px";
cambiaColor("black");
caja.className="hola";
//console.log(caja);

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