jQuery(document).ready(function ($) {


    $('#portfolio-cat-filter li:first-child').addClass('active');

    // Isotope
    var $portfolio_container = $('.portfolio-items');
    //Prevents the first time jump
    $portfolio_container.isotope();
    $portfolio_container.isotope('layout');

    if ($portfolio_container.length > 0) {

        $('#portfolio-cat-filter ul li a').click(function () {
            var selector = $(this).attr('data-filter');
            $portfolio_container.isotope({
                filter: selector
            });
            $('#portfolio-cat-filter ul li').removeClass('active');
            $(this).parent().addClass('active');
            return false;
        });


        $portfolio_container.imagesLoaded(function () {
            $('.portfolio-preloader').stop(true, true).fadeOut(200);
            $('.portfolio-items .element').each(function (i) {
                $(this).find('img, .entry-header').delay(i * 90).animate({
                    'opacity': 1
                }, 450);
            });
        });

    }




});