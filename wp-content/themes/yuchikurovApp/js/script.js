function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    // alert('ready');
    alert('Orientation is ' + screen.orientation.type);
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
