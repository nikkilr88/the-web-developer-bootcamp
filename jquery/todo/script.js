/* global $ */

//Check off todos by clicking

$('li').on('click', function() {
    $(this).toggleClass('completed');
});

$('span').on('click', function(e) {
    e.stopPropagation();
    $(this).parent().remove();
});