$(document).ready(function() {

	$("nav span").on("click" , function(){
		$('header nav ul').toggleClass("ul-view");
		$(this).toggleClass("icon-menu icon-cancel-circle");
		$('header nav').toggleClass("alt-view");
	});

	// $('.events').removeClass('animate');
    
 //    $('.events .gallery').removeClass('gallery1');
 //    $('.events .gallery').removeClass('gallery2');
 //    $('.events div').removeClass('gallery');
	
})