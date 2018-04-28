$(document).ready( function() {
  var menu = $("#menu");
  var menuClose = $("#menuClose");
    menu.click(function(e){
      var nav = $("#navigation");
      e.preventDefault();
      nav.animate({height: "325px"}, 500);
      menu.css({display: "none"});
      menuClose.css({display: "block"});
  });
    menuClose.click(function(e){
      nav = $("#navigation");
      e.preventDefault();
      nav.animate({height: "0"}, 500);
      menu.css({display: "block"});
      menuClose.css({display: "none"});
  });
});
