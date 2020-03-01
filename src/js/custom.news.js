jQuery(function ($) {

    'use strict';

    
    (function() {
        
        // some functions

    }());


    // --------------------------------------------------------------------
    // Owl Carousel Video Slider
    // --------------------------------------------------------------------

    (function() {
     $('.owl-carousel').owlCarousel({
         loop:true,
         margin:30,
         nav:true,
         responsive:{
             0:{
                 items:1
             },
             600:{
                 items:2
             },
             1000:{
                 items:3
             }
         }
        });

     }());

}); // JQuery end
