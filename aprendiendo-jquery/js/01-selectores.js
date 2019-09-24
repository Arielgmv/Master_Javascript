$(document).ready(function(){
    //Selector de ID
    $("#rojo").css("background", "red")
              .css("color", "white");
    $("#amarillo").css("background", "yellow")
                  .css("color", "green");
    $("#verde").css("background", "green")
               .css("color", "white");
    //Selectores de clases
    var mi_clase= $(".zebra").css("padding", "5px");
    //console.log(mi_clase[0]);
    //console.log(mi_clase.eq(1));
    mi_clase.css("border", "5px dashed black");

    $('.sin_borde').click(function () {
        //$(this).css("border", "5px dashed black");
        console.log("Click dado!!");
        $(this).addClass('zebra');
    })
    //Selectores de etiqueta, pointer da la forma de dedo al
    //cursor al pasar por encima
    var parrafos = $('p').css("cursor", "pointer");
    parrafos.click(function(){
        var that = $(this);
        if (!that.hasClass('grande')) {
            that.addClass('grande');    
        }else{
            that.removeClass('grande');
        }       
    });

    //Selectores de atributo
    $('[title="Google"]').css('background', '#ccc');
    $('[title="Facebook"]').css('background','blue')
                            .css('color','white');

    //Otros
    $('p, a').addClass('margen-superior');

    var busqueda = $("#caja").find('.resaltado');
    console.log(busqueda);

    //con parent vamos saltando de una etiqueta a otra
    var busqueda1 = $("#caja .resaltado").eq(0).parent().parent().parent().find('[title="Google"]');
    console.log(busqueda1);
});