jQuery(document).ready(function ($) {

	$('#fields').addClass('active in');

	$('#com').click(function(){
		$('.gallerySimages').hide();
	})

	$('#gal').click(function(){
		$('.gallerySimages').show();
	})

	var one_item_left_width = $('.one_item_left').width();
	$('.one_item_prev_imgs').width(one_item_left_width);



});

$(document).ready(function() {
	$("#owl-demo").owlCarousel({
		navigation : true
	});
});

	$(window).resize(function(){
		var one_item_left_width = $('.one_item_left').width();
		$('.one_item_prev_imgs').width(one_item_left_width);
	});