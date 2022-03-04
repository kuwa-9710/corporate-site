
$(function() {
    $("header button").on("click", function(){
        
        $(this).toggleClass("open");
        $("#global_nav").toggleClass("open-menu");
        $("#global_nav").slideToggle();
    });
});

$('.slider').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 12000,
    infinite: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    cssEase: 'linear',
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
        breakpoint: 769,
        settings: {
            slidesToShow: 2,
        }
    },
    {
        breakpoint: 426,
        settings: {
            slidesToShow: 1,
        }
    }
]
});

$('.fadeInLeftBigTrigger').on('inview', function(event, isInView) {
    if (isInView) {
        $(this).addClass('animate__animated animate__fadeInLeftBig');
    }
});