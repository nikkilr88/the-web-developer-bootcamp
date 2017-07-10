/* global $ */

//Check off todos by clicking
$('ul').on('click', 'li', function() {
    $(this).toggleClass('completed');
});

//Delete todos
$('ul').on('click', 'span', function(e) {
    e.stopPropagation();
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
});

//Add new todo
$('input[type="text"]').on('keypress', function(e){
    if(e.which === 13) {
        var todoText = $(this).val();
        $(this).val('');
        $('ul').append('<li><span>X </span>'+todoText+'</li>')
    }
});