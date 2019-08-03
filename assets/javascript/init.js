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


// Scroll function courtesy of Scott Dowding; http://stackoverflow.com/questions/487073/check-if-element-is-visible-after-scrolling

$(document).ready(function() {
  // Check if element is scrolled into view

  function isPartiallyScrolledIntoView(elem) {

    // var elementBoundary = elem.getBoundingClientRect();
 
    //   var top = elementBoundary.top;
    //   var bottom = elementBoundary.bottom;
    //   var height = elementBoundary.height;
 
    //   return ((top + height >= 0) && (height + window.innerHeight >= bottom));

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    var docViewBottom = $(window).scrollTop() + $(window).height();

    return ((elemTop + docViewBottom >= 0) && (docViewBottom + window.innerHeight - 50 >= elemBottom));
  }

  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }
  // If element is scrolled into view, fade it in
  $(window).scroll(function() {
    $('.scroll-animations .about').each(function() {
      // if (isScrolledIntoView(this) === true) {
      if (isPartiallyScrolledIntoView(this) === true) {
        $(this).addClass('makeVisible');
        $(this).addClass('fadeInLeft');
      }
    });
    $('.scroll-animations .portfolioLeft').each(function() {
      // if (isScrolledIntoView(this) === true) {
      if (isPartiallyScrolledIntoView(this) === true) {
        $(this).addClass('makeVisible');
        $(this).addClass('fadeInLeft');
      }
    });
    $('.scroll-animations .portfolioRight').each(function() {
      // if (isScrolledIntoView(this) === true) {
      if (isPartiallyScrolledIntoView(this) === true) {
        $(this).addClass('makeVisible');
        $(this).addClass('fadeInRight');
      }
    });
  });
});