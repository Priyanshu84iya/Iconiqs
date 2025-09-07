(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('position-fixed bg-dark shadow-sm');
        } else {
            $('.navbar').removeClass('position-fixed bg-dark shadow-sm');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $('.testimonial-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });

    
    // Portfolio Filter
    $('#portfolio-filters button').click(function() {
        var filterValue = $(this).attr('data-filter');
        
        // Remove active class from all buttons and add to clicked one
        $('#portfolio-filters button').removeClass('active');
        $(this).addClass('active');
        
        // Filter portfolio items
        if (filterValue === '*') {
            // Show all items
            $('.portfolio-item').addClass('show').removeClass('hidden');
        } else {
            // Hide all items first
            $('.portfolio-item').removeClass('show').addClass('hidden');
            
            // Show filtered items
            setTimeout(function() {
                $('.portfolio-item' + filterValue).addClass('show').removeClass('hidden');
            }, 100);
        }
    });

    // Portfolio hover effects
    $('.portfolio-item').hover(
        function() {
            $(this).find('.card').addClass('shadow-lg');
        },
        function() {
            $(this).find('.card').removeClass('shadow-lg');
        }
    );

    // Smooth scrolling for portfolio navigation
    $('.portfolio-nav a').click(function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        
        $('html, body').animate({
            scrollTop: $(target).offset().top - 100
        }, 1000, 'easeInOutExpo');
    });

    // Portfolio statistics counter animation
    function animateCounters() {
        $('.counter').each(function() {
            var $this = $(this);
            var countTo = $this.attr('data-count');
            
            $({ countNum: $this.text() }).animate({
                countNum: countTo
            }, {
                duration: 2000,
                easing: 'linear',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                }
            });
        });
    }

    // Initialize counters when portfolio section is in view
    $(window).scroll(function() {
        var portfolioTop = $('.portfolio-stats').offset().top;
        var scrollTop = $(window).scrollTop();
        var windowHeight = $(window).height();
        
        if (scrollTop + windowHeight > portfolioTop) {
            animateCounters();
            $(window).off('scroll'); // Run only once
        }
    });

    
})(jQuery);

