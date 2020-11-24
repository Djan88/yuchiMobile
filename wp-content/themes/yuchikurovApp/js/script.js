jQuery(document).ready(function () {
  const ptr = PullToRefresh.init({
    mainElement: 'body',
    onRefresh() {
      window.location.reload();
    }
  });
});
