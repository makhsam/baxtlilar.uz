$(document).ready(function () {

    var contact_icon = $('#contact-list-icon');
    var chat_icon = $('#chat-icon');
    var people_list = $('#people-list');
    var contact_list = $('#contact-list');
    var people_list_items = $('.people-list-item');

    contact_icon.click(function() {
        people_list.hide();
        contact_list.show();
        chat_icon.removeClass('active');
        contact_icon.addClass('active');
    });

    chat_icon.click(function() {
        contact_list.hide();
        people_list.show();
        contact_icon.removeClass('active');
        chat_icon.addClass('active');
    });

    people_list_items.click(function() {
        people_list_items.removeClass('active');
        $(this).addClass('active');
    });

});
