
$(document).ready(function() {

	// $('nav').slideDown("slow" , function(){});

	$(window).on('scroll resize' , function() {

		var w_height = $(window).height();
		var w_top = $(window).scrollTop();
		var w_bottom = w_height + w_top;

		$.each($('.animate') , function() {

			var e_height = $(this).outerHeight();
			var e_top = $(this).offset().top;
			var e_bottom = e_height + e_top;

			if((e_bottom>= w_top) && (e_top<=w_bottom)) {
				$(this).addClass("in-view");
			} 
		});
	});

	$('.events .gallery').mouseover(function(e){

		var $cls = $(this).attr("class");
		console.log($cls);
		$(this).parent().addClass($cls);
	});

	$('.events .gallery').mouseout(function(e){

		var $cls = $(this).attr("class");
		console.log($cls);
		$(this).parent().removeClass($cls);
	});
});

