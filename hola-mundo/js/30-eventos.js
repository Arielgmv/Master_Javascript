'use strict'
//Eventos del raton

window.addEventListener('load', () => {
    function cambiarColor() {
        console.log('Me has dado click');
        var bg=boton.style.background;
        if (bg=="green") {
            boton.style.background="red";
        }else{
            boton.style.background="green";
        }
        boton.style.padding="10px";
        boton.style.border="1 px solid #ccc";
        return true;    
        }
        var boton = document.querySelector("#boton");
        //Click
        boton.addEventListener('click', function () {
            cambiarColor();
            boton.style.border = "10px solid black";
        });
        
        //Mouse over
        boton.addEventListener('mouseover', function () {
            //boton.style.background="yellow";
            console.log(this);
            this.style.background="yellow";
        });
        
        //Mouseout
        boton.addEventListener('mouseout', function () {
            boton.style.background="#ccc";
        });
        
        //Focus
        var input=document.querySelector("#campo_nombre");
        input.addEventListener('focus', function () {
            console.log("[focus] Estas dentro del input");
        });
        
        //Blur
        var input=document.querySelector("#campo_nombre");
        input.addEventListener('blur', function () {
            console.log("[blur] Estas fuera del input");
        });
        
        //Keydown
        var input=document.querySelector("#campo_nombre");
        input.addEventListener('keydown', function (event) {
            console.log("[keydown] Pulsando esta tecla", String.fromCharCode(event.keyCode));
        });
        
        //Keypress
        var input=document.querySelector("#campo_nombre");
        input.addEventListener('keypress', function (event) {
            console.log("[keypress] Tecla presionada", String.fromCharCode(event.keyCode));
        });
        //Keyup
        var input=document.querySelector("#campo_nombre");
        input.addEventListener('keyup', function (event) {
            console.log("[keyup] Tecla soltada", String.fromCharCode(event.keyCode));
        });
    });