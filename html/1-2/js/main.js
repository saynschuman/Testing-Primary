 jQuery(document).ready(function ($) {


$('.cl').click(function(){
  $('.modal_auth').hide();
  $('.modal-backdrop').hide();
  $('.body').css('overflow-y', 'scroll');
  
})

 $('.toggle_button').click(function(){
  $('ul.mobile').slideToggle(300);
});

 $('.cat_click').click(function(){
  $('ul.sidebar').slideToggle(300);
});

 $('.show_more').click(function(){
 	$('.more_inf').slideToggle(300);
 });

 var one_item_left_width = $('.one_item_left').width();
 $('.one_item_prev_imgs').width(one_item_left_width);


            
            var jssor_1_options = {
              $AutoPlay: true,
              $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$
              },
              $ThumbnailNavigatorOptions: {
                $Class: $JssorThumbnailNavigator$,
                $Cols: 9,
                $SpacingX: 3,
                $SpacingY: 3,
                $Align: 260
              }
            };
            
            var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);
            var mainContentWidth = $('.main_content').width();
            
            //responsive code begin
            //you can remove responsive code if you don't want the slider scales while window resizing
            function ScaleSlider() {
                var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
                if (refSize) {
                    refSize = Math.min(refSize, mainContentWidth);
                    jssor_1_slider.$ScaleWidth(refSize);
                }
                else {
                    window.setTimeout(ScaleSlider, 30);
                }
            }
            ScaleSlider();
            $(window).bind("load", ScaleSlider);
            $(window).bind("resize", ScaleSlider);
            $(window).bind("orientationchange", ScaleSlider);
            //responsive code end
        });

    $(document).ready(function() {
      $("#owl-demo").owlCarousel({
        navigation : true
      });
    });
