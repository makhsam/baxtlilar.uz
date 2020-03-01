$(document).ready(function() {

    $('.material-button-raised').click(function() {
        if ( $(this).hasClass('active') ) {
            $(this).removeClass('active');
            $(this).text('Нравиться');
        } else {
            $(this).addClass('active');
            $(this).text('Понравилось');
        }
    });

});