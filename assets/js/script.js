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
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top-40
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    var margin_top = $(window).height() - (100 + $('#jumbo').height());
    $('#requirements').css('margin-top', margin_top);

  $('.bs-component [data-toggle="popover"]').popover();
  $('.bs-component [data-toggle="tooltip"]').tooltip();

  $('.dropdown-toggle').dropdown();

  $('.cliquable_list ul > li').click(function(e){
	var p = $($(this).children('p')[0]).children('span.not_shown')[0];

	if( $(p).is(':visible') ){ $(p).fadeOut(); }
	else{ $(p).fadeIn();  }
  });

  $rocket = new Object();

  var timeoutID;
  function endAnim() { $rocket.attr("class", ""); window.clearTimeout(timeoutID); }

  $('#jumbo .visual').mouseenter(function(){
        $rocket.attr("class", "animate").delay(1200);
        timeoutID = window.setTimeout(endAnim, 1200);
  });

  $(window).on("load", function(){
        $rocket = $('g#rocket-maskgroup');
        $rocket.attr("class", "loadAnim");
  });

});
