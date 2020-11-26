document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    const platform = device.platform;
    screen.orientation.lock('portrait');
    // StatusBar.backgroundColorByHexString("#000000");
    // StatusBar.styleBlackTranslucent();
    // alert(StatusBar.isVisible);
    StatusBar.overlaysWebView(true);
    StatusBar.backgroundColorByHexString('#33000000');
}

jQuery(document).ready(function () {
  // Pull to refresh
  PullToRefresh.init({
    mainElement: '#all', // above which element?
    onRefresh: function (done) {
      window.location.reload();
    }
  });
  // Menu
  var slideout = new Slideout({
    'panel': document.getElementById('panel'),
    'menu': document.getElementById('menu'),
    'padding': 256,
    'tolerance': 70
  });
});
