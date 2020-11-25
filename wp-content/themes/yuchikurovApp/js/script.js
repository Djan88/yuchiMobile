jQuery(document).ready(function () {
  function onDeviceReady() {
      // Cordova is now initialized. Have fun!
      alert('ready');
      screen.orientation.lock('portrait');
      alert('Orientation is ' + screen.orientation.type);
  }
  onDeviceReady();
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
