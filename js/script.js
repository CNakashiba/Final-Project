$(document).ready(function(){		

	// parallax
	$('.parallax-window').parallax({imageSrc: '../images/detroit_unsplash_2000.jpg'});

// scrolling from one part of the page to another
// ===============================================
	$('a').on('click', function (e){
		e.preventDefault();
		var target = $(this)[0]['hash']
		var $target = $(target);

		$('body').stop().animate({
			'scrollTop': $target.offset().top
		}, 
		900, 'swing', function(){
			window.location.hash = target;
		}); 

		// nav headings are underlined when in that section		
		$(this).attr('class', 'active'); 	
		// nav headings are not underlined when not in that section 

		// top of the page has none underlined 
	});

// ==========================================================================
	//slideshow carousel
	var pauseInterval = false;
	
	// set an interval for the slide to run on
	var interval = window.setInterval(rotateSlides, 5000)
	// duration till slide changes (5 sec)
  
  	function rotateSlides() {
    	// Get the first slide and store it
    	var $firstSlide = $('#carousel').find('div:first');
    	// Get the width of the slide so we know how much to slide by
    	var width = $firstSlide.width();
    	
    	// Animate the first slide to move to the left the length of the
 	   	// width. Set 1000 (1sec) to be the length of the slide transition.
    	$firstSlide.animate({marginLeft: -width}, 1000, function(){
      	// Reorder slides - move the $firstSlide after the last slide
      		var $lastSlide = $('#carousel').find('div:last')
      		$lastSlide.after($firstSlide);
      	// Reset slide position to the end of the queue
      		$firstSlide.css({marginLeft: 0})
    	});
  	}

	// Listen for click on arrows
  	$('#left-arrow').click(previousSlide);
  	$('#right-arrow').click(nextSlide);
  	// Listen for click on slide image
  	$('.slide-image').click(nextSlide);

	function nextSlide(){
	    window.clearInterval(interval);
	    var $currentSlide = $('#carousel').find('div:first');
	    var width = $currentSlide.width();

	    $currentSlide.animate({marginLeft: -width}, 1000, function(){
	      var $lastSlide = $('#carousel').find('div:last')
	      $lastSlide.after($currentSlide);
	      $currentSlide.css({marginLeft: 0})
	      interval = window.setInterval(rotateSlides, 5000);
	    });
	  }
  
  	function previousSlide(){
	    window.clearInterval(interval);
	    var $currentSlide = $('#carousel').find('div:first');
	    var width = $currentSlide.width();
	    var $previousSlide = $('#carousel').find('div:last')
	    $previousSlide.css({marginLeft: -width})
	    $currentSlide.before($previousSlide);

	    $previousSlide.animate({marginLeft: 0}, 1000, function(){
	      interval = window.setInterval(rotateSlides, 5000);
	    });
	  }

/////////////////////////////

	  /* TO ACTIVATE THE LINKS */
	  $("#challenges a").click(function(){
	      var no = $(this).parent().index();
	      goToSlide(no + 1)
	  });
	  
	  // function goToSlide(no){
	   
	  //  };
	  // }

	  function goToSlide(no){
		no.preventDefault();	  	
		window.clearInterval(interval);
	    var $currentSlide = $('#carousel').find('no');
	    var width = $currentSlide.width();

	    $currentSlide.animate({marginLeft: -width}, 1000, function(){
	      var $lastSlide = $('#carousel').find('div:last')
	      $lastSlide.after($currentSlide);
	      $currentSlide.css({marginLeft: 0})
	      interval = window.setInterval(rotateSlides, 5000);
	  	});  
	  }


/////////////////////////////

});




