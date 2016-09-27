$('.cl').click(function(){
  $('.modal_auth').hide();
  $('.modal-backdrop').hide();
  $('.body').css('overflow-y', 'scroll');
  
})

 $('.toggle_button').click(function(){
  $('ul.mobile').slideToggle();
});

 $('.cat_click').click(function(){
  $('ul.sidebar').slideToggle();
});

 $('.show_more').click(function(){
 	$('.more_inf').slideToggle();
 });