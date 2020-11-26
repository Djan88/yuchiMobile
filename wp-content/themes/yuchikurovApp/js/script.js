document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    // const platform = device.platform;
    screen.orientation.lock('portrait');

    if(window.StatusBar) {
        if($parameters.Style === 1) {
            // Change Status Bar background bar to white
            window.StatusBar.backgroundColorByName("white");
            // Change Status Bar text color to black
            window.StatusBar.styleDefault();
        } else {
            // Change Status Bar background bar to black
            window.StatusBar.backgroundColorByName("black");
            // Change Status Bar text color to white
            window.StatusBar.styleLightContent();
        }
    } else {
        alert("not present");
    }
}

jQuery(document).ready(function () {
  // Pull to refresh
  PullToRefresh.init({
    mainElement: '#panel', // above which element?
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
