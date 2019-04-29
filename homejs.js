$(document).ready(function() {

  $("#wrap").mouseover(function() {
    $(".profile_text").fadeIn(2000);
  });

  $("#wrap").mouseover(function() {
    $(".comic, .character, .commisson").fadeIn(1000);
  });

  $(".commisson").mouseover(function() {
    $("#comimg").attr("src","image/commissonHover.png");
  });
  $(".commisson").mouseleave(function() {
    $("#comimg").attr("src","image/commisson.png");
  });


  $("#wrap").trigger("mouseover");

});
