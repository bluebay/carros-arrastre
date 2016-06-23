
$(function() {
  $('nav a[href^="' + location.pathname.split("/")[2] + '"]').addClass('active');
});
