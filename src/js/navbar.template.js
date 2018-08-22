$(document).ready(function() {
    
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 50) {
            $("#navbar-template").addClass("navbar-shadow");
        } else {
            $("#navbar-template").removeClass("navbar-shadow");
        }
    });


});