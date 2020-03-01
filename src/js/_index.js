var slideIndex = 1;
showSlides(slideIndex);

function nextSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slideshow-cover");
    //var slides = $(".slideshow-cover");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    //slides.css("display", "none");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    slides[slideIndex-1].style.display = "block";  
    //slides.eq(slideIndex-1).css("display", "block");
}

$(document).ready(function() {
    'use strict';

    /** Navbar fixed top */
	$(window).scroll(function () {
        if ($(window).scrollTop() >= 200) {
            $('.fh5co-nav-fixed').css('top','0');
        } else {
            $('.fh5co-nav-fixed').css('top','-100px');
        }
    });
    
    // FOR FIXED NAVBAR (slide down on.scroll)
	$('.has-dropdown-fixed').mouseenter(function(){
        console.log("Dropdown Mouse Enter");

        var $this = $(this);
        $this
            .find('.dropdown-fixed')
            .css('display', 'block')
            .addClass('animated-fast fadeInUpMenu');

    }).mouseleave(function(){
        console.log("Dropdown Mouse leave");

        var $this = $(this);

        $this
            .find('.dropdown-fixed')
            .css('display', 'none')
            .removeClass('animated-fast fadeInUpMenu');
    });

})