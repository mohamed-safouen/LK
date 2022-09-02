(function ($) {

  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });


    // MENU
    $('.menu-burger').on('click', function() {
      $('.menu-bg, .menu-items, .menu-burger').toggleClass('fs');
      $('.menu-burger').text() == "☰" ? $('.menu-burger').text('✕') : $('.menu-burger').text('☰');
    });


    // ABOUT SLIDER
    $("body").vegas({
      delay: 20000,
      slides: [
        {
          src: "images/slide-image02.jpg",
          video: {
            src: ["images/Wrath.mp4"],
            loop: true,
            mute: true,
          },
        },
      ],
      timer: false,
      transition: ["zoomOut"],
    });
$.vegas.isVideoCompatible = function () {
  var devices = /(Android|webOS|Phone|iPad|iPod|BlackBerry|Windows Phone)/i;
  return !devices.test(navigator.userAgent);
};
})(jQuery);
