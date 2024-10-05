/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    var scrollTimeout;
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        var target = $($anchor.attr('href'));
        var offsetTop = $(this).data('offset'); // get the offset value from the data attribute
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(function() {
            $('html, body').stop().animate({
                scrollTop: offsetTop
            }, 1500, 'easeInOutExpo');
        }, 100);
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// remove the focused state after click,
// otherwise bootstrap will still highlight the link
$("a").mouseup(function(){
    $(this).blur();
})

