function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    alert('ready');
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
onDeviceReady();
