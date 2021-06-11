$( document ).ready(function() {

    // Hero Section FUll Height
    $(function(){
    	var windowH = $(window).height();
    	var wrapperH = $('.hero').height();
    	if(windowH > wrapperH) {                            
    		$('.hero').css({'height':($(window).height())+'px'});
    	}                                                                               
    	$(window).resize(function(){
    		var windowH = $(window).height();
    		var wrapperH = $('.hero').height();
    		var differenceH = windowH - wrapperH;
    		var newH = wrapperH + differenceH;
    		var truecontentH = $('#truecontent').height();
    		if(windowH > truecontentH) {
    			$('.hero').css('height', (newH)+'px');
    		}

    	})          
    });


});

jQuery(document).ready(function() {
  
  var btn = $('#tarea');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });
});
    var btn = $('#tarea1');
    $("#tarea1").click(function(){
            $("#Cuadrado").animate({left: "500px", height: "200px", width: "200px"},5000);
    });

    var btn = $('#tarea2');
    $("#tarea2").click(function(){
            $("#Cuadrado").stop();
    });
  