jQuery(document).ready(function () {
  // trangle
  
  jQuery('.treangle_handler').on('click', function(event) {
    treangle_1();
    jQuery('.treangle').addClass('treangle_1').removeClass('inopacity');
    jQuery(this).addClass('inopacity');
  });

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
      jQuery('.treangle').removeClass('treangle_5').addClass('treangle_6');
      navigator.vibrate(200);
      treangle_6();
    },14000);
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
      jQuery('.treangle').removeClass('treangle_10').addClass('treangle_1');
      jQuery('.treangle_handler').removeClass('inopacity');
      navigator.vibrate(200);
    },2000);
  }

});
