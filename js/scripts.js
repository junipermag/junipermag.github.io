$(document).ready( function() {
    // Menu Start
  mobeileMenu();
    // Menu End

    // Shop Image FadeIn Start
    if (window.location.pathname == '/shop.html') {
      shopImage();
    }
    // Shop Image FadeIn End

    // Footer Copyright Date Start
    footerCopyright();
    // Footer Copyright Date End
});



//functions

function mobeileMenu() {
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

}

function shopImage() {
  var scroll;
  var scrollBottom;
  var didScroll;

  $(window).scroll(function(){
    scroll = $(window).scrollTop();
    scrollBottom = scroll + $(window).height();
    didScroll = true;
  });

  var shopMagazineImage = [];
  var shopMagazineImageLoc = [];

  for (var i = 0; i < 7; i++) {
  shopMagazineImage[i] = $("#shopMagazineImageFadeIn"+i);
  shopMagazineImageLoc[i] = shopMagazineImage[i].offset().top;
  }

  setInterval(function() {
    if(didScroll){
      didScroll = false;
      for (var b = 0; b < 7; b++) {
        if (scrollBottom >= shopMagazineImageLoc[b]) {
          shopMagazineImage[b].animate({opacity: 1});
        }
      }
    }
  }, 250);
}

function footerCopyright() {
  var copyrightP = $('#copyrightP');
  var date = new Date().getFullYear();

  copyrightP.html('Juniper &#169; ' + date);
}
