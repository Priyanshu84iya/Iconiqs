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

    
    // Model Filter Functionality
    $('#model-filters button').click(function() {
        var filterValue = $(this).attr('data-filter');
        
        // Remove active class from all buttons and add to clicked one
        $('#model-filters button').removeClass('active');
        $(this).addClass('active');
        
        // Filter model items
        if (filterValue === '*') {
            // Show all items
            $('.model-item').addClass('show').removeClass('hidden');
        } else {
            // Hide all items first
            $('.model-item').removeClass('show').addClass('hidden');
            
            // Show filtered items
            setTimeout(function() {
                $('.model-item' + filterValue).addClass('show').removeClass('hidden');
            }, 100);
        }
    });

    // Model Profile Modal
    $('.view-profile-btn').click(function() {
        var modelName = $(this).data('model');
        var modalContent = getModelProfile(modelName);
        $('#modalContent').html(modalContent);
        $('#modelProfileModal').modal('show');
    });

    // Function to get model profile data
    function getModelProfile(modelName) {
        var profiles = {
            'naomy': {
                name: 'Naomy Olsen',
                age: 24,
                height: '175cm',
                experience: '5 Years',
                specialties: ['Fashion', 'Commercial'],
                bio: 'Naomy is a versatile model with extensive experience in both fashion and commercial modeling. She has worked with top brands and appeared in numerous fashion magazines.',
                achievements: ['Fashion Week Milan 2023', 'Vogue Cover Feature', 'Calvin Klein Campaign'],
                image: 'img/team-1.jpg'
            },
            'pamela': {
                name: 'Pamela Torney',
                age: 26,
                height: '180cm',
                experience: '7 Years',
                specialties: ['Editorial', 'Runway'],
                bio: 'Pamela is a seasoned runway and editorial model known for her commanding presence and artistic versatility. She has walked for major fashion houses worldwide.',
                achievements: ['Paris Fashion Week 2022', 'Harper\'s Bazaar Editorial', 'Chanel Runway Show'],
                image: 'img/team-2.jpg'
            },
            'joanne': {
                name: 'Joanne Irwin',
                age: 23,
                height: '178cm',
                experience: '4 Years',
                specialties: ['Fashion', 'Editorial'],
                bio: 'Joanne combines classic beauty with contemporary edge, making her perfect for both fashion and editorial work. Her portfolio spans luxury brands to artistic collaborations.',
                achievements: ['Elle Magazine Feature', 'Dior Campaign', 'London Fashion Week'],
                image: 'img/team-3.jpg'
            },
            'gillian': {
                name: 'Gillian Rowe',
                age: 25,
                height: '176cm',
                experience: '6 Years',
                specialties: ['Commercial', 'Runway'],
                bio: 'Gillian is known for her professionalism and adaptability in commercial work while maintaining a strong runway presence. She excels in brand representation and product campaigns.',
                achievements: ['Nike Campaign', 'New York Fashion Week', 'Cosmopolitan Cover'],
                image: 'img/team-4.jpg'
            },
            'lana': {
                name: 'Lana Anderson',
                age: 22,
                height: '172cm',
                experience: '3 Years',
                specialties: ['Fashion', 'Commercial'],
                bio: 'Lana is a rising star in the modeling world with a fresh perspective and natural charisma. Her work spans fashion editorials to commercial campaigns.',
                achievements: ['Teen Vogue Feature', 'H&M Campaign', 'Milan Fashion Week Debut'],
                image: 'img/team-5.jpg'
            },
            'sarah': {
                name: 'Sarah Quinn',
                age: 27,
                height: '181cm',
                experience: '8 Years',
                specialties: ['Editorial', 'Runway'],
                bio: 'Sarah is an established editorial and runway model with a distinctive style and strong artistic vision. She collaborates regularly with renowned photographers and designers.',
                achievements: ['Vogue Italia Cover', 'Versace Runway', 'Art Photography Exhibitions'],
                image: 'img/team-6.jpg'
            },
            'jessica': {
                name: 'Jessica Lee',
                age: 24,
                height: '177cm',
                experience: '5 Years',
                specialties: ['Fashion', 'Editorial'],
                bio: 'Jessica brings elegance and sophistication to every project. Her work in fashion and editorial modeling has earned her recognition in the industry.',
                achievements: ['Marie Claire Feature', 'Gucci Campaign', 'Fashion Week Paris'],
                image: 'img/team-7.jpg'
            },
            'barbara': {
                name: 'Barbara Serney',
                age: 26,
                height: '179cm',
                experience: '6 Years',
                specialties: ['Commercial', 'Runway'],
                bio: 'Barbara combines commercial appeal with runway expertise, making her a sought-after model for diverse projects. Her professionalism sets her apart in the industry.',
                achievements: ['L\'Oreal Campaign', 'Milan Fashion Week', 'GQ Magazine Feature'],
                image: 'img/team-8.jpg'
            }
        };

        var model = profiles[modelName];
        if (!model) return '<p>Profile not found.</p>';

        return `
            <div class="row">
                <div class="col-md-4">
                    <img src="${model.image}" class="img-fluid rounded" alt="${model.name}">
                </div>
                <div class="col-md-8">
                    <h3>${model.name}</h3>
                    <div class="mb-3">
                        ${model.specialties.map(specialty => `<span class="badge bg-primary me-1">${specialty}</span>`).join('')}
                    </div>
                    <p class="text-muted">${model.bio}</p>
                    
                    <div class="row mb-3">
                        <div class="col-4">
                            <small class="text-muted d-block">Age</small>
                            <strong>${model.age}</strong>
                        </div>
                        <div class="col-4">
                            <small class="text-muted d-block">Height</small>
                            <strong>${model.height}</strong>
                        </div>
                        <div class="col-4">
                            <small class="text-muted d-block">Experience</small>
                            <strong>${model.experience}</strong>
                        </div>
                    </div>
                    
                    <h5>Key Achievements</h5>
                    <ul class="list-unstyled">
                        ${model.achievements.map(achievement => `<li><i class="fas fa-check text-primary me-2"></i>${achievement}</li>`).join('')}
                    </ul>
                    
                    <div class="mt-3">
                        <a href="contact.html" class="btn btn-primary me-2">Book ${model.name}</a>
                        <a href="portfolio.html" class="btn btn-outline-primary">View Portfolio</a>
                    </div>
                </div>
            </div>
        `;
    }

    // Team statistics counter animation
    function animateTeamCounters() {
        $('.team-stats .counter').each(function() {
            var $this = $(this);
            var countTo = $this.attr('data-count');
            
            $({ countNum: 0 }).animate({
                countNum: countTo
            }, {
                duration: 2500,
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

    // Initialize team counters when team stats section is in view
    var teamCountersAnimated = false;
    $(window).scroll(function() {
        if ($('.team-stats').length > 0 && !teamCountersAnimated) {
            var teamStatsTop = $('.team-stats').offset().top;
            var scrollTop = $(window).scrollTop();
            var windowHeight = $(window).height();
            
            if (scrollTop + windowHeight > teamStatsTop + 100) {
                animateTeamCounters();
                teamCountersAnimated = true;
            }
        }
    });

    // Model card hover effects
    $('.model-card').hover(
        function() {
            $(this).find('.model-image').addClass('scale-effect');
        },
        function() {
            $(this).find('.model-image').removeClass('scale-effect');
        }
    );

    
})(jQuery);

