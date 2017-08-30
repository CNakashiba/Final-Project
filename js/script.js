// $(document).ready(function(){

// // scrolling from one part of the page to another
// 	$('a').on('click', function (e){
// 		e.preventDefault();
// 		var target = $(this)[0]['hash']
// 		var $target = $(target);

// 		$('body').stop().animate({
// 			'scrollTop': $target.offset().top
// 		}, 900, 'swing', function(){
// 			window.location.hash = target;
// 		});
// 	});
// });

$(document).ready(function(){

		

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
		// $('#headerLinks li').show()
		
		$(this).attr('class', 'active'); 			
	});
});




