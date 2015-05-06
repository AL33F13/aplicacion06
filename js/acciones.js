// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
 $('#brnvibrar').on('tap', function() {
	 navigator.vibrate(1000);
 }); //tap a btnvibrar
  $('#btnbeep').on('tap', function(){
	  navigator.notification.beep(1); 
	  }); //btnbeep
	  $('#Izquierda').on('swipeleft',
	  function(){
		  alert("Barrio a la Izquierda");
		  $('#IDerecha').on('swiperifht',
	  function(){
		  alert("Barrio a la Derecha");
		  document.addEventListener("pause", function (){
			  $('#listado').append("<p> se pauso </p>");
			  document.addEventListener("resume", function (){
				  $("#listado").append("<p> se reinicion </p>");
				  $(window).on('orientationchange', function(e){
					  $('#listado').oppend("<p> Orietacion: " + e.orientation + "</p>");
				  });
			  });
				  
		  });
		  
	  });
	  });
}); 
});

