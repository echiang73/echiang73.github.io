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

// Floating Action Button
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.fixed-action-btn');
  var instances = M.FloatingActionButton.init(elems, {
    direction: 'left',
    hoverEnabled: false
  });
});


var clip = new ClipboardJS('#js-emailcopybtn');

clip.on("success", function(e) {
  console.log('Copy email command was successful');
  	  $('.tooltiptext').attr("tooltiptext", "Yay! My email address has been copied to your clipboard ✅");
	    $('.tooltiptext').addClass('success');

	    // Reset
	    $('.tooltiptext').mouseleave(function() {

		  setTimeout( function(){
			$('.tooltiptext').attr("tooltiptext", "Click to copy my email address to your clipboard 😀");
		  $('.tooltiptext').removeClass('success');
			}, 300);
    });
    e.clearSelection();
});
clip.on("error", function(e) {
  console.log('Copy email command was unsuccessful');
  $('.tooltiptext').attr("tooltiptext", "Sorry, there was a technical glitch. Please try again.");
	$('.tooltiptext').toggleClass('fail');
});