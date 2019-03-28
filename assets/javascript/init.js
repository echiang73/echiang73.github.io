// sticky header
window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


// on click on a href link, will slowly scroll to tag
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    var target = $(this.hash);
    if (target.length) {
      $("html, body").animate(
        {
          scrollTop: target.offset().top
        },
        1000
      );
    }
  });
});

(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space
