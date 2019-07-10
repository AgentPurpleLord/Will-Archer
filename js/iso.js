jQuery(document).ready(function ($) {

    $('ul.filter li').click(function () {

        $("ul.filter li").removeClass("active");
        $(this).addClass("active");

        var selector = $(this).attr('data-filter');
        $(".gallery__projects").isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false,
            }
        });
        return false;
    });

    // init Isotope
    var $grid = $('.isotope__grid').isotope({
        itemSelector: '.gallery__item',
        layoutMode: 'fitRows'
    });
    // layout Isotope after each image loads
    $grid.imagesLoaded().progress(function () {
        $grid.isotope('layout');
    });
});