jQuery(document).ready(function ($) {

	/*
	 Home page: Main Slider
	*/
    $("#owl-main-slide").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
		smartSpeed: 450,
        items: 1,
        responsiveClass: true
    });


    /**
     * Home page: Animate Box 
     */
    var counter = 0;
    $('.animate-box').waypoint( function( direction ) {

        if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
            
            counter++;

            $(this.element).addClass('item-animate');
            setTimeout(function(){

                $('body .animate-box.item-animate').each(function(k){
                    var el = $(this);
                    setTimeout( function () {
                        var effect = el.data('animate-effect');
                        if ( effect === 'fadeIn') {
                            el.addClass('fadeIn animated-fast');
                        } else if ( effect === 'fadeInLeft') {
                            el.addClass('fadeInLeft animated-fast');
                        } else if ( effect === 'fadeInRight') {
                            el.addClass('fadeInRight animated-fast');
                        } else {
                            el.addClass('fadeInUp animated-fast');
                        }

                        el.removeClass('item-animate');
                    },  k * 200, 'easeInOutExpo' );
                });
                
            }, 100);
            
        }

    }, { offset: '85%' });


    /**
     * Home page: Owl-carousel for services
     */
    $('#owl-services').owlCarousel({
        loop: true,
        // rewind: true,
        margin:20,
        autoplay: true,
		autoplayTimeout: 3000,
		smartSpeed: 450,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            768:{
                items:2,
            },
            992:{
                items:3,
            }
        }
    });

    /**
     * Home page: Owl Carousel for 'Flags'
     */
    $('#owl-carousel-flags').owlCarousel({
        loop: true,
        margin:10,
        autoWidth:true,
        autoplay: true,
		autoplayTimeout: 3000,
		smartSpeed: 450,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
            },
            480:{
                items:3,
            },
            768:{
                items:4,
            },
            992:{
                items:5,
            }
        }
    });

    /* ------------------------------ LIVE CHAT BOX ------------------------------ */
    var liveChat = $('#live-chat'),
        chatWidget = $('.chat-widget-container'),
        chatBox = $('.chat-box-container'),
        chatClose = $('#chat-box-close');

    if( $(window).scrollTop() > 500 ){
        liveChat.fadeIn();
    }

    $(window).scroll(function () {
        if ($(window).scrollTop() >= 500) {
            liveChat.fadeIn();
        } else {
            liveChat.fadeOut();
        }
    });
    
    chatWidget.click(function(e){
        e.preventDefault();

        chatWidget.addClass("open");
        chatBox.addClass("show");
    });

    chatClose.click(function() {
        chatBox.removeClass("show");
        chatWidget.removeClass("open");
    });


    
    // var chatbox = $('#live-chatbox'); 

    // $('#btn-chat-open').click(function() {
    //     chatbox.css('display', 'block');
    // });

    // $('#btn-chat-close').click(function() {
    //     chatbox.css('display', 'none');
    // });
    
});

