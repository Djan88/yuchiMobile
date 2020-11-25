document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
    window.addEventListener("orientationchange", function(){
        alert(screen.orientation.type); // e.g. portrait
    });
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
