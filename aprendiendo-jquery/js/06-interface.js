$(document).ready(function(){
    //mover elemento por la página
    $('.elemento').draggable();

    //Redimensionar
    $('.elemento').resizable();

    //Seleccionar elementos
    $('.lista-seleccionable').selectable();
});