document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
  // Cordova is now initialized. Have fun!
  screen.orientation.lock('portrait');

  jQuery('.tabbar li a').on('click', function(event) {
    navigator.vibrate(25);
  });
}

jQuery(document).ready(function () {

  var knife,
    knifeDate,
    knifeDateOld,
    knifeDateDiff,
    knife_rate_class,
    knife_rate_class_dotted,
    knife_2,
    knifeDate_2,
    knifeDateOld_2,
    knifeDateDiff_2,
    knife_rate_class_2,
    knife_rate_class_dotted_2,
    vibro,
    vibroOnAir = false,
    count_animation = 1,
    vibroOne;

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
    jQuery('.back-button, .reverce_clean_graph, .reverce_clean_graph_2').addClass('hidden');
    jQuery('.slider-box').addClass('hidden').removeAttr('style');
    jQuery('.app-slide-menu').fadeIn(500).removeClass('hidden').css('display', 'flex');
    // screen.orientation.lock('portrait');
    // jQuery('.frame').removeClass('hidden');
  });

  jQuery('.home').on('click', function(event) {
    jQuery('.app-slide, .app-second').addClass('hidden').removeAttr('style');
    jQuery('.app-main').fadeIn(500).removeClass('hidden').css('display', 'flex');
    jQuery('.header-text').text('ШКОЛА ДОКТОРА ЧИКУРОВА');
    jQuery('.back-button, .reverce_clean_graph, .reverce_clean_graph_2').addClass('hidden');
    // screen.orientation.lock('portrait');
    // jQuery('.frame').removeClass('hidden');
  });

  jQuery('.calendar').on('click', function(event) {
    jQuery('.app-slide, .app-main').addClass('hidden').removeAttr('style');
    jQuery('.app-second').fadeIn(500).removeClass('hidden').css('display', 'flex');
    jQuery('.header-text').text('НОВОСТИ ШКОЛЫ');
    jQuery('.back-button, .reverce_clean_graph, .reverce_clean_graph_2').addClass('hidden');
    jQuery('.slider-box').addClass('hidden').removeAttr('style');
    jQuery('.app-slide-menu').fadeIn(500).removeClass('hidden').css('display', 'flex');
    // screen.orientation.lock('portrait');
    // jQuery('.frame').removeClass('hidden');
  });

  jQuery('.main-item-formuls').on('click', function(event) {
    jQuery('.app-slide-menu, .reverce-clean').addClass('hidden').removeAttr('style');
    jQuery('.slider-formuls').fadeIn(500).removeClass('hidden').css('display', 'flex');
    jQuery('.header-text').text('ФОРМУЛЫ БЦ');
    jQuery('.back-button, .reverce_clean_graph, .reverce_clean_graph_2').removeClass('hidden');
  });

  jQuery('.main-item-elems').on('click', function(event) {
    jQuery('.app-slide-menu, .reverce-clean').addClass('hidden').removeAttr('style');
    jQuery('.slider-elems').fadeIn(500).removeClass('hidden').css('display', 'flex');
    jQuery('.header-text').text('ПЕРВОЭЛЕМЕНТЫ БЦ');
    jQuery('.back-button, .reverce_clean_graph, .reverce_clean_graph_2').removeClass('hidden');
  });

  jQuery('.main-item-regress').on('click', function(event) {
    // var handle_status = jQuery('#custom-handle').css('left');
    // if (handle_status != '3.5%') {
    //   jQuery('.reverce-clean').removeClass('hidden');
    // }
    jQuery('.treangle').removeClass('inopacity').addClass('treangle_0');
    jQuery('.treangle, .treangle_handler').removeClass('inopacity');
    jQuery('.app-slide-menu').addClass('hidden').removeAttr('style');
    jQuery('.slider-regress').fadeIn(500).removeClass('hidden').css('display', 'flex');
    jQuery('.header-text').text('ТРЕУГОЛЬНИКИ');
    jQuery('.back-button, .reverce_clean_graph').removeClass('hidden');
  });

  jQuery('.main-item-urav').on('click', function(event) {
    var handle_status = jQuery('#custom-handle_2').css('left');
    if (handle_status != '3.5%') {
      jQuery('.reverce-clean_2').removeClass('hidden');
    }
    jQuery('.app-slide-menu').addClass('hidden').removeAttr('style');
    jQuery('.slider-urav').fadeIn(500).removeClass('hidden').css('display', 'flex');
    jQuery('.header-text').text('УРАВНИТЕЛЬ');
    jQuery('.back-button, .reverce_clean_graph_2').removeClass('hidden');
  });

  jQuery('.back-button').on('click', function(event) {
    jQuery('.slider-box').addClass('hidden').removeAttr('style');
    jQuery('.app-slide-menu').fadeIn(500).removeClass('hidden').css('display', 'flex');
    jQuery('.header-text').text('ПОЛЕЗНЫЕ РЕСУРСЫ');
    jQuery('.back-button, .reverce_clean_graph, .reverce_clean_graph_2').addClass('hidden');
  });

  jQuery(".swiper-slide").swipe( {
    swipeRight:function(event, direction, distance, duration, fingerCount) {
      jQuery('.slider-box').addClass('hidden').removeAttr('style');
      jQuery('.app-slide-menu').fadeIn(500).removeClass('hidden').css('display', 'flex');
      jQuery('.header-text').text('ПОЛЕЗНЫЕ РЕСУРСЫ');
      jQuery('.back-button, .reverce_clean_graph, .reverce_clean_graph_2').addClass('hidden');
      // screen.orientation.lock('portrait');
      // jQuery('.frame').removeClass('hidden');
    },
    swipeLeft:function(event, direction, distance, duration, fingerCount) {
      navigator.vibrate(duration);
    },
    threshold:0
  });
  jQuery(".reverce_graph").swipe( {
    swipeRight:function(event, direction, distance, duration, fingerCount) {
      jQuery('.slider-box').addClass('hidden').removeAttr('style');
      jQuery('.app-slide-menu').fadeIn(500).removeClass('hidden').css('display', 'flex');
      jQuery('.header-text').text('ПОЛЕЗНЫЕ РЕСУРСЫ');
      jQuery('.back-button, .reverce_clean_graph').addClass('hidden');
      // screen.orientation.lock('portrait');
      // jQuery('.frame').removeClass('hidden');
    },
    threshold:0
  });
  jQuery(".urav_graph").swipe( {
    swipeRight:function(event, direction, distance, duration, fingerCount) {
      jQuery('.slider-box').addClass('hidden').removeAttr('style');
      jQuery('.app-slide-menu').fadeIn(500).removeClass('hidden').css('display', 'flex');
      jQuery('.header-text').text('ПОЛЕЗНЫЕ РЕСУРСЫ');
      jQuery('.back-button, .reverce_clean_graph_2').addClass('hidden');
      // screen.orientation.lock('portrait');
      // jQuery('.frame').removeClass('hidden');
    },
    threshold:0
  });

  jQuery('.slider-box, .formuls').addClass('hidden').removeClass('overscreen');
  jQuery('.tabbar li a.home').click();

  // Regressive centering

  jQuery( function() {
    var handle = jQuery("#custom-handle");
    var handle_val;
    jQuery("#slider").slider({
      value: 7,
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
          left: +knife+2+'px',
          height: knifeDateDiff+'px'
        });
        knifeDateOld = knifeDate;
      },
      stop: function( event, ui ) {
        console.log(handle_val);
        navigator.vibrate(100);
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
    jQuery( "#slider" ).slider( "value", 7 );
    jQuery('.knife_rate').detach();
    jQuery('.reverce-clean').addClass('hidden');
  });

  // Мыслеуравнитель

  vibro = function(count){
    if (count_animation > 1) {
      clearInterval(vibroOne);
      count_animation = 1;
      vibro(count);
    } else {
      count_animation = 1;
      vibroOne = setInterval(function(){
        if (count_animation <= count){
          navigator.vibrate(100);
          count_animation += 1;
        } else {
          clearInterval(vibroOne);
          count_animation = 1;
        }
      }, 200);
    }
  }

  jQuery( function() {
    var handle_2 = jQuery("#custom-handle_2");
    var handle_val_2;
    jQuery("#slider_2").slider({
      value: 7,
      min: 0,
      max: 200,
      create: function() {
        handle_2.text(jQuery(this).slider("value"));
      },
      slide: function( event, ui ) {
        // handle.text( ui.value );
        handle_val_2 = ui.value;
        knife_2 = jQuery('body').find('#custom-handle_2').css('left');
        knife_2 = parseFloat(knife_2.substr(0, knife_2.length - 2)).toFixed();
        knifeDate_2 = new Date();
        knifeDateDiff_2 = knifeDate_2 - knifeDateOld_2;
        // console.log('test '+knifeDateDiff);
        knife_rate_class_2 = 'knife_rate_2-'+knife_2;
        knife_rate_class_dotted_2 = '.knife_rate_2-'+knife_2;
        jQuery('.urav_graph').append('<div class='+knife_rate_class_2+'></div>');
        jQuery(knife_rate_class_dotted_2).addClass('knife_rate_2').css({
          left: +knife_2+2+'px',
          height: knifeDateDiff_2+'px'
        });
        knifeDateOld_2 = knifeDate_2;
      },
      stop: function( event, ui ) {
        console.log(handle_val_2);
        jQuery('.reverce-clean_2').removeClass('hidden');
        if (handle_val_2 > 1 && handle_val_2 <= 26) {
          jQuery('.urav_value').text('7');
          vibro(7);
        } else if (handle_val_2 > 26 && handle_val_2 <= 55) {
          jQuery('.urav_value').text('6');
          vibro(6);
        } else if (handle_val_2 > 55 && handle_val_2 <= 85) {
          jQuery('.urav_value').text('5');
          vibro(5);
        } else if (handle_val_2 > 85 && handle_val_2 <= 113) {
          jQuery('.urav_value').text('4');
          vibro(4);
        } else if (handle_val_2 > 113 && handle_val_2 <= 140) {
          jQuery('.urav_value').text('3');
          vibro(3);
        } else if (handle_val_2 > 140 && handle_val_2 <= 170) {
          jQuery('.urav_value').text('2');
          vibro(2);
        } else if (handle_val_2 > 170 && handle_val_2 <= 200) {
          jQuery('.urav_value').text('1');
          vibro(1);
        }
      }
    });
  });
  jQuery('.reverce-clean_2').on('click', function(event) {
    jQuery( "#slider_2" ).slider( "value", 7 );
    jQuery('.knife_rate_2').detach();
    jQuery('.urav_value').text('');
    jQuery('.reverce-clean_2').addClass('hidden');
  });

  jQuery('.propeller_rotor').propeller({inertia: 0, speed: 0, onDragStop: function(){ 
      jQuery('.propeller_rotor').addClass('propeller_rotor_animated');
      if (this.angle >= 0 && this.angle < 30) {
        jQuery('.propeller_rotor').css('transform', 'rotate(14deg) translateZ(0px)');
        jQuery('.propeller_title').text('ОГОНЬ');
      } else if (this.angle >= 30 && this.angle < 60) {
        jQuery('.propeller_rotor').css('transform', 'rotate(43deg) translateZ(0px)');
        jQuery('.propeller_title').text('ВОДА');
      } else if (this.angle >= 60 && this.angle < 90) {
        jQuery('.propeller_rotor').css('transform', 'rotate(74deg) translateZ(0px)');
        jQuery('.propeller_title').text('ВОЗДУХ');
      } else if (this.angle >= 90 && this.angle < 120) {
        jQuery('.propeller_rotor').css('transform', 'rotate(103deg) translateZ(0px)');
        jQuery('.propeller_title').text('ЗЕМЛЯ');
      } else if (this.angle >= 120 && this.angle < 150) {
        jQuery('.propeller_rotor').css('transform', 'rotate(132deg) translateZ(0px)');
        jQuery('.propeller_title').text('ОГОНЬ');
      } else if (this.angle >= 150 && this.angle < 180) {
        jQuery('.propeller_rotor').css('transform', 'rotate(163deg) translateZ(0px)');
        jQuery('.propeller_title').text('ВОДА');
      } else if (this.angle >= 180 && this.angle < 210) {
        jQuery('.propeller_rotor').css('transform', 'rotate(194deg) translateZ(0px)');
        jQuery('.propeller_title').text('ВОЗДУХ');
      } else if (this.angle >= 210 && this.angle < 240) {
        jQuery('.propeller_rotor').css('transform', 'rotate(224deg) translateZ(0px)');
        jQuery('.propeller_title').text('ЗЕМЛЯ');
      } else if (this.angle >= 240 && this.angle < 270) {
        jQuery('.propeller_rotor').css('transform', 'rotate(254deg) translateZ(0px)');
        jQuery('.propeller_title').text('ОГОНЬ');
      } else if (this.angle >= 270 && this.angle < 300) {
        jQuery('.propeller_rotor').css('transform', 'rotate(282deg) translateZ(0px)');
        jQuery('.propeller_title').text('ВОДА');
      } else if (this.angle >= 300 && this.angle < 330) {
        jQuery('.propeller_rotor').css('transform', 'rotate(312deg) translateZ(0px)');
        jQuery('.propeller_title').text('ВОЗДУХ');
      } else if (this.angle >= 330 && this.angle < 360) {
        jQuery('.propeller_rotor').css('transform', 'rotate(343deg) translateZ(0px)');
        jQuery('.propeller_title').text('ЗЕМЛЯ');
      }
      setTimeout(function(){
        jQuery('.propeller_rotor').removeClass('propeller_rotor_animated');
        navigator.vibrate(100);
      },200);
  }});

// ===========================
  // trangle
// ===========================


// timer init
  function CountDownTimer(duration, granularity) {
    this.duration = duration;
    this.granularity = granularity || 1000;
    this.tickFtns = [];
    this.running = false;
  }

  CountDownTimer.prototype.start = function() {
    if (this.running) {
      return;
    }
    this.running = true;
    var start = Date.now(),
        that = this,
        diff, obj;

    (function timer() {
      diff = that.duration - (((Date.now() - start) / 1000) | 0);

      if (diff > 0) {
        setTimeout(timer, that.granularity);
      } else {
        diff = 0;
        that.running = false;
      }

      obj = CountDownTimer.parse(diff);
      that.tickFtns.forEach(function(ftn) {
        ftn.call(this, obj.minutes, obj.seconds);
      }, that);
    }());
  };

  CountDownTimer.prototype.onTick = function(ftn) {
    if (typeof ftn === 'function') {
      this.tickFtns.push(ftn);
    }
    return this;
  };

  CountDownTimer.prototype.expired = function() {
    return !this.running;
  };

  CountDownTimer.parse = function(seconds) {
    return {
      'minutes': (seconds / 60) | 0,
      'seconds': (seconds % 60) | 0
    };
  };

// timer start
  var display = document.querySelector('#time'),
      timer = new CountDownTimer(90);

  function format(minutes, seconds) {
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    display.textContent = minutes + ':' + seconds;
  }

  jQuery('.treangle_handler').on('click', function(event) {
    treangle_1();
    jQuery('.treangle').addClass('treangle_0').removeClass('inopacity');
    jQuery('#time').removeClass('inopacity');
    jQuery(this).addClass('inopacity');
    timer.onTick(format).start();
  });

  treangle_0 = function(){
    setTimeout(function(){
      jQuery('.treangle').removeClass('treangle_0').addClass('treangle_1');
      navigator.vibrate(200);
      treangle_1();
    },4000);
  }
  treangle_1 = function(){
    setTimeout(function(){
      jQuery('.treangle').removeClass('treangle_1').addClass('treangle_2');
      navigator.vibrate(200);
      treangle_2();
    },4000);
  }
  treangle_2 = function(){
    setTimeout(function(){
      jQuery('.treangle').removeClass('treangle_2').addClass('treangle_3');
      navigator.vibrate(200);
      treangle_3();
    },7000);
  }
  treangle_3 = function(){
    setTimeout(function(){
      jQuery('.treangle').removeClass('treangle_3').addClass('treangle_4');
      navigator.vibrate(200);
      treangle_4();
    },7000);
  }
  treangle_4 = function(){
    setTimeout(function(){
      jQuery('.treangle').removeClass('treangle_4').addClass('treangle_5');
      navigator.vibrate(200);
      treangle_5();
    },7000);
  }
  treangle_5 = function(){
    setTimeout(function(){
      jQuery('.treangle').removeClass('treangle_5').addClass('treangle_5_1');
      navigator.vibrate(200);
      treangle_5_1();
    },14000);
  }
  treangle_5_1 = function(){
    setTimeout(function(){
      jQuery('.treangle').removeClass('treangle_5_1').addClass('treangle_6');
      navigator.vibrate(200);
      treangle_6();
    },7000);
  }
  treangle_6 = function(){
    setTimeout(function(){
      jQuery('.treangle').removeClass('treangle_6').addClass('treangle_7');
      navigator.vibrate(200);
      treangle_7();
    },7000);
  }
  treangle_7 = function(){
    setTimeout(function(){
      jQuery('.treangle').removeClass('treangle_7').addClass('treangle_8');
      navigator.vibrate(200);
      treangle_8();
    },7000);
  }
  treangle_8 = function(){
    setTimeout(function(){
      jQuery('.treangle').removeClass('treangle_8').addClass('treangle_9');
      navigator.vibrate(200);
      treangle_9();
    },7000);
  }
  treangle_9 = function(){
    setTimeout(function(){
      jQuery('.treangle').removeClass('treangle_9').addClass('treangle_10');
      navigator.vibrate(200);
      treangle_10();
    },7000);
  }
  treangle_10 = function(){
    setTimeout(function(){
      jQuery('.treangle').addClass('inopacity');
      navigator.vibrate(200);
      treangle_11();
    },14000);
  }
  treangle_11 = function(){
    setTimeout(function(){
      jQuery('.treangle').removeClass('treangle_10').addClass('treangle_0');
      jQuery('.treangle_handler').removeClass('inopacity');
      navigator.vibrate(200);
    },2000);
  }

});
