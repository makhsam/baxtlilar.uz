function redirect(obj) {
    var value = obj.value; 
    var url; 

    switch (value) {
        case 'EN':
            url = "#en";
            break; 
        case 'UZ':
            url = "#uz";
            break; 
        case 'RU':
            url = "#ru";
            break; 
        default: 
            url = "javascript:void(0)";
    }

    window.location.href = url;
}

$(document).ready(function() {
    
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 50) {
            $("#navbar-template").addClass("navbar-shadow");
        } else {
            $("#navbar-template").removeClass("navbar-shadow");
        }
    });


});