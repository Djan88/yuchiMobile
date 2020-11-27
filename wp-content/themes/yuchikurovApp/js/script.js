document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    // const platform = device.platform;
    screen.orientation.lock('portrait');
    jQuery('body').on('click', 'button', function(event) {
      v1 = function(){
        count_animation = 1;
        alert('test')l
        phaseOne = setInterval(function(){
          if (count_animation <= 5){
           navigator.vibrate(1000);
           count_animation += 1;
          } else {
            clearInterval(phaseOne);
            count_animation = 1;
          }
        }, 1500);
      }
      v1();
    });
}

jQuery(document).ready(function () {
  // Pull to refresh
  PullToRefresh.init({
    mainElement: '#panel', // above which element?
    triggerElement: '.header',
    onRefresh: function (done) {
      window.location.reload();
    }
  });
  // Menu
  // var slideout = new Slideout({
  //   'panel': document.getElementById('panel'),
  //   'menu': document.getElementById('menu'),
  //   'padding': 256,
  //   'tolerance': 70
  // });
});
