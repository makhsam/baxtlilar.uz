$(document).ready(function() {

    var list = document.querySelectorAll("div[data-image]");

    for (var i = 0; i < list.length; i++) {
        var url = list[i].getAttribute('data-image');
        list[i].style.backgroundImage="url('" + url + "')";
    }

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