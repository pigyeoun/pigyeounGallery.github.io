$(document).ready(function() {

  $(".line").mouseover(function() {
    $(".line").fadeIn("1000");
  });

  $(".line").trigger("mouseover");
});
