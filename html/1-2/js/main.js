$(document).ready(function(){
	var height = $('ul').height();

	$('.navbar-toggle').click(function(){
		$('.main').toggle();
		$('.full_width_background').toggle();
		$('.main_block_footer').toggle();
		
	});

});