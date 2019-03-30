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

// var instance = M.FloatingActionButton.getInstance(elem);
// instance.close();

// $(document).ready(function(){
//   $('.fixed-action-btn').floatingActionButton();
// });

// // copy email address to clipboard
// function copyEmail() {
//   // $("#email-tooltip").click(function() {
//   // var copyText = $("#email-tooltip").attr("data-clipboard-text");
//   var copyText = document.getElementById("myInput");
//   // var copyText = "echiang73@gmail.com";
//   copyText.select();
//   document.execCommand("copy");
  
//   var tooltip = document.getElementById("email-tooltip");
//   tooltip.innerHTML = "Copied: echiang73@gmail.com";
// }

// function outFunc() {
//   var tooltip = document.getElementById("email-tooltip");
//   tooltip.innerHTML = "Click to copy my email address to your clipboard 😀";
// }  


	// Copy email address to clipboard AD
	var clipboard = new ClipboardJS('#email');

	clipboard.on('success', function(e) {
	    $('#email-tooltip').attr("tooltip", "Yay! My email address has been copied to your clipboard ✅");
	    $('#email-tooltip').addClass('success');

	    // Reset
	    $('#email-tooltip').mouseleave(function() {

		    setTimeout( function(){
				$('#email-tooltip').attr("tooltip", "Click to copy my email address to your clipboard 😀");
		    	$('#email-tooltip').removeClass('success');
			}, 300);
		});

	    e.clearSelection();
	});

	clipboard.on('error', function(e) {
	    $('#email-tooltip').attr("tooltip", "Sorry, there was a technical glitch. Please try again.");
	    $('#email-tooltip').toggleClass('fail');
	});