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

  var knife,
    knifeDate,
    knifeDateOld,
    knifeDateDiff,
    knife_rate_class,
    knife_rate_class_dotted;

  // Pull to refresh
  PullToRefresh.init({
    mainElement: '#panel', // above which element?
    triggerElement: '.header',
    onRefresh: function (done) {
      window.location.reload();
    }
  });


  var swiper = new Swiper('.swiper-container-formuls', {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
        el: '.swiper-pagination-formuls',
        clickable: true,
    },
  });

  var swiper_elems = new Swiper('.swiper-container-elems', {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
        el: '.swiper-pagination-elems',
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
    jQuery('.back-button, .reverce_clean_graph').addClass('hidden');
    jQuery('.slider-box').addClass('hidden').removeAttr('style');
    jQuery('.app-slide-menu').fadeIn(500).removeClass('hidden').css('display', 'flex');
    // screen.orientation.lock('portrait');
    // jQuery('.frame').removeClass('hidden');
  });

  jQuery('.home').on('click', function(event) {
    jQuery('.app-slide, .app-second').addClass('hidden').removeAttr('style');
    jQuery('.app-main').fadeIn(500).removeClass('hidden').css('display', 'flex');
    jQuery('.header-text').text('ШКОЛА ДОКТОРА ЧИКУРОВА');
    jQuery('.back-button, .reverce_clean_graph').addClass('hidden');
    // screen.orientation.lock('portrait');
    // jQuery('.frame').removeClass('hidden');
  });

  jQuery('.calendar').on('click', function(event) {
    jQuery('.app-slide, .app-main').addClass('hidden').removeAttr('style');
    jQuery('.app-second').fadeIn(500).removeClass('hidden').css('display', 'flex');
    jQuery('.header-text').text('ПУСТОЙ РАЗДЕЛ');
    jQuery('.back-button, .reverce_clean_graph').addClass('hidden');
    jQuery('.slider-box').addClass('hidden').removeAttr('style');
    jQuery('.app-slide-menu').fadeIn(500).removeClass('hidden').css('display', 'flex');
    // screen.orientation.lock('portrait');
    // jQuery('.frame').removeClass('hidden');
  });

  jQuery('.main-item-formuls').on('click', function(event) {
    jQuery('.app-slide-menu').addClass('hidden').removeAttr('style');
    jQuery('.slider-formuls').fadeIn(500).removeClass('hidden').css('display', 'flex');
    jQuery('.header-text').text('ФОРМУЛЫ БЦ');
    jQuery('.back-button, .reverce_clean_graph').removeClass('hidden');
  });
  jQuery('.main-item-elems').on('click', function(event) {
    jQuery('.app-slide-menu').addClass('hidden').removeAttr('style');
    jQuery('.slider-elems').fadeIn(500).removeClass('hidden').css('display', 'flex');
    jQuery('.header-text').text('ПЕРВОЭЛЕМЕНТЫ БЦ');
    jQuery('.back-button, .reverce_clean_graph').removeClass('hidden');
  });
  jQuery('.main-item-regress').on('click', function(event) {
    jQuery('.app-slide-menu').addClass('hidden').removeAttr('style');
    jQuery('.slider-regress').fadeIn(500).removeClass('hidden').css('display', 'flex');
    jQuery('.header-text').text('РЕГРЕССИВНАЯ ШКАЛА');
    jQuery('.back-button, .reverce_clean_graph').removeClass('hidden');
    // screen.orientation.lock('landscape');
    // jQuery('.frame').addClass('hidden');
  });

  jQuery('.back-button').on('click', function(event) {
    jQuery('.slider-box').addClass('hidden').removeAttr('style');
    jQuery('.app-slide-menu').fadeIn(500).removeClass('hidden').css('display', 'flex');
    jQuery('.header-text').text('СПРАВОЧНИКИ');
    jQuery('.back-button, .reverce_clean_graph').addClass('hidden');
    // screen.orientation.lock('portrait');
    // jQuery('.frame').removeClass('hidden');
  });

  jQuery(".swiper-slide").swipe( {
    swipeRight:function(event, direction, distance, duration, fingerCount) {
      jQuery('.slider-box').addClass('hidden').removeAttr('style');
      jQuery('.app-slide-menu').fadeIn(500).removeClass('hidden').css('display', 'flex');
      jQuery('.header-text').text('СПРАВОЧНИКИ');
      jQuery('.back-button, .reverce_clean_graph').addClass('hidden');
      // screen.orientation.lock('portrait');
      // jQuery('.frame').removeClass('hidden');
    },
    threshold:0
  });

  jQuery('.slider-box, .formuls').addClass('hidden').removeClass('overscreen');
  jQuery('.tabbar li a.home').click();

  // Regressive centering
  jQuery('.reverce_clean_graph').on('click', function(event) {
    jQuery( "#slider" ).slider( "value", 0 );
    jQuery('.knife_rate').detach();
    jQuery(this).css('display', 'none');
  });

  jQuery( function() {
    var handle = jQuery("#custom-handle");
    var handle_val;
    jQuery("#slider").slider({
      value: 5,
      min: 0,
      max: 200,
      create: function() {
        handle.text(jQuery(this).slider("value"));
      },
      slide: function( event, ui ) {
        // handle.text( ui.value );
        handle_val = ui.value;
        knife = jQuery('body').find('#custom-handle').css('left');
        knife = parseFloat(knife.substr(0, knife.length - 2)).toFixed();
        knifeDate = new Date();
        knifeDateDiff = knifeDate - knifeDateOld;
        // console.log('test '+knifeDateDiff);
        knife_rate_class = 'knife_rate-'+knife;
        knife_rate_class_dotted = '.knife_rate-'+knife;
        jQuery('.reverce_graph').append('<div class='+knife_rate_class+'></div>');
        jQuery(knife_rate_class_dotted).addClass('knife_rate').css({
          left: +knife+10+'px',
          height: knifeDateDiff+'px'
        });
        knifeDateOld = knifeDate;
      },
      stop: function( event, ui ) {
        console.log(handle_val);
        jQuery('.reverce_acept').removeAttr('style');
        jQuery('.reverce-clean').removeClass('hidden')
        if (handle_val <= 60) {
          mode_speed = 2;
        } else if (handle_val > 60 && handle_val <= 111) {
          mode_speed = 4;
        } else if (handle_val > 111 && handle_val <= 160) {
          mode_speed = 6;
        } else if (handle_val > 160) {
          mode_speed = 8;
        }
      }
    });
  });
  jQuery('.reverce-clean').on('click', function(event) {
    jQuery( "#slider" ).slider( "value", 0 );
    jQuery('.knife_rate').detach();
    jQuery(this).addClass('hidden')
  });

});
