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
});