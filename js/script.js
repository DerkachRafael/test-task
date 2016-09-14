$(function() {
    //loader pac
$(window).load(function() {
    setTimeout(function() {
      $('.loader').fadeOut('slow', function() {});
    }, 1500);
  });
    //modal
    var $btn = $('.btn-feedback'),
    $popup = $('#popup'),
    $cover = $('#cover');
    $btn.click(function() {
        $popup.show();
        $cover.show();
    });
    $('#cover, #close').click(function() {
        $popup.fadeOut(500);
        $cover.fadeOut(700);
    });
    $(this).keydown(function(eventObject) {
        if (eventObject.which == 27) {
            $popup.fadeOut(500);
            $cover.fadeOut(700);
        }
    });
    // back to top
    var offset = 300, //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        offset_opacity = 1200, //duration of the top scrolling animation (in ms)
        scroll_top_duration = 700, //grab the "back to top" link
        $back_to_top = $('.cd-top');
    //hide or show the "back to top" link
    $(window).scroll(function() {
        ($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible'): $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if ($(this).scrollTop() > offset_opacity) {
            $back_to_top.addClass('cd-fade-out');
        }
    });
    //smooth scroll to top
    $back_to_top.on('click', function(event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0,
        }, scroll_top_duration);
    });
    // responsive nav 
    var $iconMenu = $('.icon-menu'),
    $link = $('.nav-list li');
    $iconMenu.click(function() {
        $(this).toggleClass('change');
        $link.slideToggle(500);
    });
    $(window).resize(function() {
        if ($(window).width() > 640) {
            $link.removeAttr('style');
        }
    });
    //slider
    $("#slider").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        pagination: true,
        slideSpeed:4000,
        animateOut: 'fadeOut'
    });
    //SVG Fallback
    if (!Modernizr.svg) {
        $("img[src*='svg']").attr("src", function() {
            return $(this).attr("src").replace(".svg", ".png");
        });
    };
    //E-mail Ajax Send
    $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: th.serialize()
        }).done(function() {
            alert("Thank you!");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });
    //img
    $("img, a").on("dragstart", function(event) { event.preventDefault(); });

});


