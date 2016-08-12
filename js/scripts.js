
// Ready Document
$(document).ready(function(){


  	// Owl Carousel:
	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:false,
	    smartSpeed:1000,
	    autoplay:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        481:{
	            items:2
	        },
	        768:{
	            items:4
	        }
	    }
	});


});


$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide"
  });
});
