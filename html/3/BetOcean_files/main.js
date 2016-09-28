

	// admin toggle menu

	
	$('.profile_menu_toggle').click(function() {
		$('.profile_menu_toggle_show').toggle(200);
	})


 var doc_h = $(document).height();
  var prof_h = $('.profile_area').height();
  var ul_h = doc_h - prof_h;
  // $('.profile_menu ul').height(ul_h);
  $('.main_container').height(doc_h);
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $('#mycanvas').width(100).height(100);
  }

  function startTimer() {
    var my_timer = document.getElementById("my_timer");
    var time = my_timer.innerHTML;
    var arr = time.split(":");
    var h = arr[0];
    var m = arr[1];
    var s = arr[2];
    if (s == 0) {
      if (m == 0) {
        if (h == 0) {
          console.log("TimeStopped");
          return;
        }
        h--;
        m = 60;
        if (h < 10) h = "0" + h;
      }
      m--;
      if (m < 10) m = "0" + m;
      s = 59;
    }
    else s--;
    if (s < 10) s = "0" + s;
    document.getElementById("my_timer").innerHTML = h+":"+m+":"+s;
    setTimeout(startTimer, 1000);
  }

	window.onload = startTimer();