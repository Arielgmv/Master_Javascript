$(document).ready(function() {
    var caja = $('#caja');
    $('#mostrar').hide();
    $('#mostrar').click(function(){
        $(this).hide();
        $('#ocultar').show();
        //$('#caja').show('normal');
        //$('#caja').fadeIn('slow');
        caja.fadeTo('slow', 1);
    });
    $('#ocultar').click(function(){
        $(this).hide();
        $('#mostrar').show();
        //$('#caja').hide('normal');
        //$('#caja').fadeOut('slow');
        caja.fadeTo('slow', 0);
    });

    $('#todoenuno').click(function(){
        caja.slideToggle('normal');
    });

    $('#animar').click(function(){
        caja.animate({
                    marginLeft: 500,
                    fontSize: '40px',
                    height: '100px'
                    }, 'slow')
            .animate({
                borderRadius: '900px',
                marginTop: '80px',                
            }, 'slow')
            .animate({
                borderRadius: '0px',
                marginLeft: '0px', 
            }, 'slow')
            .animate({
                borderRadius: '900px',
                marginTop: '0px', 
            }, 'slow')
            .animate({
                marginLeft: 500,
                fontSize: '40px',
                height: '100px'
                }, 'slow');
    });
})