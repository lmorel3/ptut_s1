jQuery(document).ready(function($){  

    //jQuery to collapse the navbar on scroll
    $(window).scroll(function() {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    });

    //jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function() {
        $('a.page-scroll').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top-40
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    });


    var margin_top = $(window).height() - (100 + $('#jumbo').height());
    $('#requirements').css('margin-top', margin_top);
    console.log(margin_top);


  $('.bs-component [data-toggle="popover"]').popover();
  $('.bs-component [data-toggle="tooltip"]').tooltip();

  $('.dropdown-toggle').dropdown()

 
});
