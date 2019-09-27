$(document).ready(function(){
    //MouseOver y MouseOut
    var caja = $("#caja");
    /*caja.mouseover(function(){
        $(this).css("background","red");
    });
    caja.mouseout(function(){
        $(this).css("background", "green");
    });*/

    function cambiaRojo(){
        $(this).css("background","red");
    }
    function cambiaVerde(){
        $(this).css("background", "green");
    }
    //Hover
    caja.hover(cambiaRojo, cambiaVerde)

    //Click, Doble click
    caja.click(function(){
        $(this).css("background", "blue")
               .css("color", "white");
    });

    caja.dblclick(function(){
        $(this).css("background", "pink")
               .css("color", "yellow");
    });

    //Focus y blur
    /*var input = $("#nombre");
    input.focus(function(){
        console.log("[focus] Estas dentro del input");
    });

    input.blur(function(){
        console.log("[blur] Estas fuera del input");
    });*/
    var nombre = $("#nombre");
    var datos = $("#datos"); 

    nombre.focus(function(){
        $(this).css("border", "3px solid green");
    });
    nombre.blur(function(){
        $(this).css("border", "1px solid #ccc");
        datos.text($(this).val()).show();
    });

    //Mousedown y mouseup
    datos.mousedown(function(){
        $(this).css("border-color", "yellow");
    });

    datos.mouseup(function(){
        $(this).css("border-color", "blue");
    });

    //Mousemove
    $(document).mousemove(function(){
        $("span").text(event.pageX + ", " + event.pageY);
    });
    $(document).mousemove(function(){
        console.log("En X: "+event.clientX);
        console.log("En Y: "+event.clientY);
        $('body').css("cursor","none");
        $("#sigueme").css("left",event.clientX)
                     .css("top",event.clientY);
    });
});