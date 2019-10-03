$(document).ready(function() {
    $('#mostrar').hide();
    $('#mostrar').click(function(){
        $(this).hide();
        $('#ocultar').show();
        //$('#caja').show('normal');
        //$('#caja').fadeIn('slow');
        $('#caja').fadeTo('slow', 1);
    });
    $('#ocultar').click(function(){
        $(this).hide();
        $('#mostrar').show();
        //$('#caja').hide('normal');
        //$('#caja').fadeOut('slow');
        $('#caja').fadeTo('slow', 0);
    });

    $('#todoenuno').click(function(){
        $('#caja').slideToggle('normal');
    });
})