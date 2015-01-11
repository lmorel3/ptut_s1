jQuery(document).ready(function($){

    /* .. */
    $(window).scroll(function() {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    });

    /* PAGE SCROLLING */
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top-100
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    /* MARGIN */

    $w_height = $(window).height();
    if($w_height > 768) {
        var margin_top = $w_height - (90 + $('#jumbo').height() + $('#definition').height());
        $('#requirements').css('margin-top', margin_top);
        $('#example').css('margin-top', margin_top-90);
    }

    /* BASE */
    $('.bs-component [data-toggle="popover"]').popover();
    $('.bs-component [data-toggle="tooltip"]').tooltip();
    $('.dropdown-toggle').dropdown();


    /* HIDDEN ELEMENTS */
    $('.cliquable_list ul > li').click(function(e){
        var p = $($(this).children('p')[0]).children('span.not_shown')[0];

        if( $(p).is(':visible') ){ $(p).fadeOut(); }
        else{ $(p).fadeIn();  }
    });


    /* ANIMATION */
    $rocket = new Object();
    var timeoutID;
    function endAnim() { $rocket.attr("class", "endAnim"); window.clearTimeout(timeoutID); }

    $('#jumbo .visual').mouseenter(function(){
        $rocket.attr("class", "animate endAnim").delay(1200);
        timeoutID = window.setTimeout(endAnim, 1200);
    });

    $(window).on("load", function(){
        $rocket = $('g#rocket-maskgroup');
        $rocket.attr("class", "loadAnim");
        timeoutID = window.setTimeout(endAnim, 1180);
    });

});
