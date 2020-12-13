document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    // const platform = device.platform;
    screen.orientation.lock('portrait');

    // swiper.on('slideChange', function () {
    //   navigator.vibrate(1000);
    // });
    jQuery('.tabbar li a').on('click', function(event) {
      navigator.vibrate(1000);
    });

}

jQuery(document).ready(function () {


  var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
  });
  var swiper = new Swiper('.swiper-container2', {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
  });

  jQuery('.tabbar li a').on('click', function(e) {

      e.preventDefault();

      let that = jQuery(this),
          li = that.parent(),
          ul = li.parent();

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

  jQuery('.box').on('click', function(event) {
    jQuery('.app-main, .app-second').addClass('hidden').removeAttr('style');
    jQuery('.app-slide').fadeIn(500).removeClass('hidden').css('display', 'flex');
    jQuery('.header-text').text('ПОЛЕЗНЫЕ РЕСУРСЫ');
    jQuery('.back-button').addClass('hidden');
    jQuery('.slider-formuls, .slider-elems').addClass('hidden').removeAttr('style');
    jQuery('.app-slide-menu').fadeIn(500).removeClass('hidden').css('display', 'flex');
  });

  jQuery('.home').on('click', function(event) {
    jQuery('.app-slide, .app-second').addClass('hidden').removeAttr('style');
    jQuery('.app-main').fadeIn(500).removeClass('hidden').css('display', 'flex');
    jQuery('.header-text').text('ШКОЛА ДОКТОРА ЧИКУРОВА');
    jQuery('.back-button').addClass('hidden');
  });

  jQuery('.calendar').on('click', function(event) {
    jQuery('.app-slide, .app-main').addClass('hidden').removeAttr('style');
    jQuery('.app-second').fadeIn(500).removeClass('hidden').css('display', 'flex');
    jQuery('.header-text').text('ПУСТОЙ РАЗДЕЛ');
    jQuery('.back-button').addClass('hidden');
    jQuery('.slider-formuls, .slider-elems').addClass('hidden').removeAttr('style');
    jQuery('.app-slide-menu').fadeIn(500).removeClass('hidden').css('display', 'flex');
  });

  jQuery('.main-item-formuls').on('click', function(event) {
    jQuery('.app-slide-menu').addClass('hidden').removeAttr('style');
    jQuery('.slider-formuls').fadeIn(500).removeClass('hidden').css('display', 'flex');
    jQuery('.header-text').text('ФОРМУЛЫ БЦ');
    jQuery('.back-button').removeClass('hidden');
  });
  jQuery('.main-item-elems').on('click', function(event) {
    jQuery('.app-slide-menu').addClass('hidden').removeAttr('style');
    jQuery('.slider-elems').fadeIn(500).removeClass('hidden').css('display', 'flex');
    jQuery('.header-text').text('ФОРМУЛЫ БЦ');
    jQuery('.back-button').removeClass('hidden');
  });

  jQuery('.back-button').on('click', function(event) {
    jQuery('.slider-formuls, .slider-elems').addClass('hidden').removeAttr('style');
    jQuery('.app-slide-menu').fadeIn(500).removeClass('hidden').css('display', 'flex');
    jQuery('.header-text').text('ПОЛЕЗНЫЕ РЕСУРСЫ');
    jQuery('.back-button').addClass('hidden');
  });

  jQuery(".slider-formuls").swipe( {
    swipeRight:function(event, direction, distance, duration, fingerCount) {
      jQuery('.slider-formuls').addClass('hidden').removeAttr('style');
      jQuery('.app-slide-menu').fadeIn(500).removeClass('hidden').css('display', 'flex');
      jQuery('.header-text').text('ПОЛЕЗНЫЕ РЕСУРСЫ');
      jQuery('.back-button').addClass('hidden');
    },
    threshold:0
  });

  jQuery(".slider-elems").swipe( {
    swipeRight:function(event, direction, distance, duration, fingerCount) {
      jQuery('.slider-elems').addClass('hidden').removeAttr('style');
      jQuery('.app-slide-menu').fadeIn(500).removeClass('hidden').css('display', 'flex');
      jQuery('.header-text').text('ПОЛЕЗНЫЕ РЕСУРСЫ');
      jQuery('.back-button').addClass('hidden');
    },
    threshold:0
  });

  jQuery('.slider-formuls').addClass('hidden').removeClass('overscreen');
  jQuery('.tabbar li a.home').click();



  // Pull to refresh
  PullToRefresh.init({
    mainElement: '#panel', // above which element?
    triggerElement: '.header',
    onRefresh: function (done) {
      window.location.reload();
    }
  });
});
