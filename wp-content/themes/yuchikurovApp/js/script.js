document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    // const platform = device.platform;
    screen.orientation.lock('portrait');

    // swiper.on('slideChange', function () {
    //   navigator.vibrate(1000);
    // });
    jQuery('.tabbar li a').on('click', function(event) {
      
    });

}

jQuery(document).ready(function () {

  // var swiper = new Swiper('.swiper-container-formuls', {
  //   direction: 'vertical',
  //   slidesPerView: 1,
  //   spaceBetween: 30,
  //   mousewheel: true,
  //   pagination: {
  //       el: '.swiper-pagination-formuls',
  //       clickable: true,
  //   },
  // });

  // var swiper_elems = new Swiper('.swiper-container-elems', {
  //   direction: 'vertical',
  //   slidesPerView: 1,
  //   spaceBetween: 30,
  //   mousewheel: true,
  //   pagination: {
  //       el: '.swiper-pagination-elems',
  //       clickable: true,
  //   },
  // });

  jQuery('.tabbar li a').on('click', function(e) {

      e.preventDefault();

      let that = jQuery(this),
          li = that.parent(),
          ul = li.parent();
          navigator.vibrate(1000);

      if(!ul.hasClass('move') && !li.hasClass('active')) {
          ul.children('li').removeClass('active');

          ul.css('--x-n', li.position().left + li.outerWidth() / 2 + 'px');
          li.addClass('move');
          ul.addClass('move');

          setTimeout(() => {
              ul.removeClass('move');
              li.removeClass('move').addClass('active');
              ul.css('--x', li.position().left + li.outerWidth() / 2 + 'px');
          }, 1200);
      }

  });

  

  jQuery('.slider-box').addClass('hidden').removeClass('overscreen');
  jQuery('.home').click();



  // Pull to refresh
  PullToRefresh.init({
    mainElement: '#panel',
    triggerElement: '.header',
    onRefresh: function (done) {
      window.location.reload();
    }
  });
});
