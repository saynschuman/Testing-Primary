$('.cl').click(function(){
  $('.modal_auth').hide();
  $('.modal-backdrop').hide();
  $('.body').css('overflow-y', 'scroll');
  
})

 $('.toggle_button').click(function(){
  $('ul.mobile').slideToggle(200);
});

 $('.cat_click').click(function(){
  $('ul.sidebar').slideToggle(200);
});

 $('.show_more').click(function(){
 	$('.more_inf').slideToggle(200);
 });

 $('.btn_filters_block').click(function(){
 	$('.filters_block').slideToggle(300);
 })