function redirect(obj) {
    var value = obj.value; 
    var url; 

    switch (value) {
        case 'EN':
            url = "http://google.com/en";
            break; 
        case 'UZ':
            url = "http://google.com/uz";
            break; 
        case 'RU':
            url = "http://google.com/ru";
            break; 
        default: 
            url = "javascript:void(0)";
    }

    window.location.href = url;
}

// Select All [data-image] attribute and set it to `backgroud-image`
var list = document.querySelectorAll("div[data-image]");

for (var i = 0; i < list.length; i++) {
    var url = list[i].getAttribute('data-image');
    list[i].style.backgroundImage="url('" + url + "')";
}


$(document).ready(function() {
    
    if( $(window).scrollTop() > 50 ){
        $("#navbar-template").addClass("navbar-shadow");
        $('#scroll-to-top').fadeIn();
    }

    $(window).scroll(function () {
        if ($(window).scrollTop() >= 50) {
            $("#navbar-template").addClass("navbar-shadow");
            $('#scroll-to-top').fadeIn();
        } else {
            $("#navbar-template").removeClass("navbar-shadow");
            $('#scroll-to-top').fadeOut();
        }
    });

    // scroll body to top on click
    $('#scroll-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 200);
        return false;
    });


    //

});