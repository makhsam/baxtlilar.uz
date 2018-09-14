$(document).ready(function () {

    var back_arrow = $('#contact-back-icon');
    var search = $('#search-input');
    var add_icon = $('#contact-list-icon');
    var people_list = $('#people-list');
    var contact_list = $('#contact-list');

    back_arrow.click(function() {
        back_arrow.hide();
        search.css('width', '100%');

        contact_list.hide();
        people_list.show();

        add_icon.show();
    });

    add_icon.click(function() {
        search.css('width', 'calc(100% - 50px)');
        back_arrow.show();

        people_list.hide();
        contact_list.show();

        add_icon.hide();
    });

});
