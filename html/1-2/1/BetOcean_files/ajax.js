function getAjax(url, id) {
	$.ajax({  
    url: ""+url+"",  
    cache: false,  
    success: function(html){ 
  	 $("#"+id+"").html(html); 
    }  
    }); 
}

﻿function getAjaxJSON(url, id) {
	$.ajax({  
    url: ""+url+"",  
    cache: false,  
    success: function(html){ 
  	 document.getElementById(id).value = html;
    }  
    }); 
}