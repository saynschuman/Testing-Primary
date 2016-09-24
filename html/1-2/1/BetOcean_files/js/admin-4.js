function line() {

    var canvas_2 = document.getElementById('line');
    var obCanvas = canvas_2.getContext('2d');

    var of_1 = $('#1').offset();
    var x_1 = of_1.left + 37.5;
    var y_1 = of_1.top + 37.5;

    switch ($("img").is("#2")) {
      case true:

      var of_2 = $('#2').offset();
      var x_2 = of_2.left + 37.5;
      var y_2 = of_2.top + 37.5;

      obCanvas.beginPath();
      obCanvas.lineWidth = 1;
      obCanvas.strokeStyle = '#fff';
      obCanvas.moveTo(x_1, y_1);
      obCanvas.lineTo(x_2, y_2);
      obCanvas.stroke();

      break
      case  false:

      $('canvas').hide();
  }

  switch ($("img").is("#3")) {
      case true:

      var of_3 = $('#3').offset();
      var x_3 = of_3.left + 37.5;
      var y_3 = of_3.top + 37.5;

      obCanvas.beginPath();
      obCanvas.lineWidth = 1;
      obCanvas.strokeStyle = '#fff';
      obCanvas.moveTo(x_1, y_1) + 37.5;
      obCanvas.lineTo(x_3, y_3) + 37.5;
      obCanvas.stroke();        

      obCanvas.beginPath();
      obCanvas.lineWidth = 1;
      obCanvas.strokeStyle = '#fff';
      obCanvas.moveTo(x_1, y_1);
      obCanvas.lineTo(x_2, y_2);
      obCanvas.stroke();

      break
      case  false:

      obCanvas.beginPath();
      obCanvas.lineWidth = 1;
      obCanvas.strokeStyle = '#fff';
      obCanvas.moveTo(x_1, y_1);
      obCanvas.lineTo(x_2, y_2);
      obCanvas.stroke();
      
  }

  switch ($("img").is("#4")) {
      case true:

      var of_4 = $('#4').offset();
      var x_4 = of_4.left + 37.5;
      var y_4 = of_4.top + 37.5;

      obCanvas.beginPath();
      obCanvas.lineWidth = 1;
      obCanvas.strokeStyle = '#fff';
      obCanvas.moveTo(x_1, y_1) + 37.5;
      obCanvas.lineTo(x_4, y_4) + 37.5;
      obCanvas.stroke();              

      obCanvas.beginPath();
      obCanvas.lineWidth = 1;
      obCanvas.strokeStyle = '#fff';
      obCanvas.moveTo(x_1, y_1) + 37.5;
      obCanvas.lineTo(x_3, y_3) + 37.5;
      obCanvas.stroke();        

      obCanvas.beginPath();
      obCanvas.lineWidth = 1;
      obCanvas.strokeStyle = '#fff';
      obCanvas.moveTo(x_1, y_1);
      obCanvas.lineTo(x_2, y_2);
      obCanvas.stroke();

      break
      case  false:

      obCanvas.beginPath();
      obCanvas.lineWidth = 1;
      obCanvas.strokeStyle = '#fff';
      obCanvas.moveTo(x_1, y_1);
      obCanvas.lineTo(x_3, y_3);
      obCanvas.stroke();

      obCanvas.beginPath();
      obCanvas.lineWidth = 1;
      obCanvas.strokeStyle = '#fff';
      obCanvas.moveTo(x_1, y_1);
      obCanvas.lineTo(x_2, y_2);
      obCanvas.stroke();      

  }

// 3 row  

  switch ($("img").is("#2_1")) {
      case true:

      var of_2_1 = $('#2_1').offset();
      var x_2_1 = of_2_1.left + 37.5;
      var y_2_1 = of_2_1.top + 37.5;

      var name_2 = $('#name_2').offset()
      var x_name_2 = name_2.left + 50;
      var y_name_2 = name_2.top + 22;

      obCanvas.beginPath();
      obCanvas.lineWidth = 1;
      obCanvas.strokeStyle = '#fff';
      obCanvas.moveTo(x_name_2, y_name_2);
      obCanvas.lineTo(x_2_1, y_2_1);
      obCanvas.stroke();  

      obCanvas.beginPath();
      obCanvas.lineWidth = 1;
      obCanvas.strokeStyle = '#fff';
      obCanvas.moveTo(x_1, y_1) + 37.5;
      obCanvas.lineTo(x_4, y_4) + 37.5;
      obCanvas.stroke();              

      obCanvas.beginPath();
      obCanvas.lineWidth = 1;
      obCanvas.strokeStyle = '#fff';
      obCanvas.moveTo(x_1, y_1) + 37.5;
      obCanvas.lineTo(x_3, y_3) + 37.5;
      obCanvas.stroke();        

      obCanvas.beginPath();
      obCanvas.lineWidth = 1;
      obCanvas.strokeStyle = '#fff';
      obCanvas.moveTo(x_1, y_1);
      obCanvas.lineTo(x_2, y_2);
      obCanvas.stroke();

      break
      case  false:

      obCanvas.beginPath();
      obCanvas.lineWidth = 1;
      obCanvas.strokeStyle = '#fff';
      obCanvas.moveTo(x_1, y_1) + 37.5;
      obCanvas.lineTo(x_4, y_4) + 37.5;
      obCanvas.stroke();       

      obCanvas.beginPath();
      obCanvas.lineWidth = 1;
      obCanvas.strokeStyle = '#fff';
      obCanvas.moveTo(x_1, y_1);
      obCanvas.lineTo(x_3, y_3);
      obCanvas.stroke();

      obCanvas.beginPath();
      obCanvas.lineWidth = 1;
      obCanvas.strokeStyle = '#fff';
      obCanvas.moveTo(x_1, y_1);
      obCanvas.lineTo(x_2, y_2);
      obCanvas.stroke();      

  }

switch ($("img").is("#2_2")) {
      case true:

      var of_2_2 = $('#2_2').offset();
      var x_2_2 = of_2_2.left + 37.5;
      var y_2_2 = of_2_2.top + 37.5;


      obCanvas.beginPath();
      obCanvas.lineWidth = 1;
      obCanvas.strokeStyle = '#fff';
      obCanvas.moveTo(x_name_2+35, y_name_2);
      obCanvas.lineTo(x_2_2, y_2_2);
      obCanvas.stroke();       

      obCanvas.beginPath();
      obCanvas.lineWidth = 1;
      obCanvas.strokeStyle = '#fff';
      obCanvas.moveTo(x_name_2, y_name_2);
      obCanvas.lineTo(x_2_1, y_2_1);
      obCanvas.stroke();  

      obCanvas.beginPath();
      obCanvas.lineWidth = 1;
      obCanvas.strokeStyle = '#fff';
      obCanvas.moveTo(x_1, y_1) + 37.5;
      obCanvas.lineTo(x_4, y_4) + 37.5;
      obCanvas.stroke();              

      obCanvas.beginPath();
      obCanvas.lineWidth = 1;
      obCanvas.strokeStyle = '#fff';
      obCanvas.moveTo(x_1, y_1) + 37.5;
      obCanvas.lineTo(x_3, y_3) + 37.5;
      obCanvas.stroke();        

      obCanvas.beginPath();
      obCanvas.lineWidth = 1;
      obCanvas.strokeStyle = '#fff';
      obCanvas.moveTo(x_1, y_1);
      obCanvas.lineTo(x_2, y_2);
      obCanvas.stroke();

      break
      case  false:

      obCanvas.beginPath();
      obCanvas.lineWidth = 1;
      obCanvas.strokeStyle = '#fff';
      obCanvas.moveTo(x_name_2, y_name_2);
      obCanvas.lineTo(x_2_1, y_2_1);
      obCanvas.stroke();       

      obCanvas.beginPath();
      obCanvas.lineWidth = 1;
      obCanvas.strokeStyle = '#fff';
      obCanvas.moveTo(x_1, y_1) + 37.5;
      obCanvas.lineTo(x_4, y_4) + 37.5;
      obCanvas.stroke();       

      obCanvas.beginPath();
      obCanvas.lineWidth = 1;
      obCanvas.strokeStyle = '#fff';
      obCanvas.moveTo(x_1, y_1);
      obCanvas.lineTo(x_3, y_3);
      obCanvas.stroke();

      obCanvas.beginPath();
      obCanvas.lineWidth = 1;
      obCanvas.strokeStyle = '#fff';
      obCanvas.moveTo(x_1, y_1);
      obCanvas.lineTo(x_2, y_2);
      obCanvas.stroke();      

  }  

}

width = $(window).width();
height = $(window).height();

$('canvas').attr('width', width);
$('canvas').attr('height', height);

$('.dir').click(function(){
  $('canvas').css('display', 'none');
  setTimeout(function(){
      $('canvas').css('display', 'block');

  },600);
});

window.onload = line();

