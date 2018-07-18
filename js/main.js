
$(document).ready(function() {
	$('.nav-link, .navbar-brand, .new-button').click(function() { //jQuery slim version does not support animate!
		var scrollY = 54;

		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		 	scrollY = 180;
		}

	    var sectionTo = $(this).attr('href');
	    $('html, body').animate({
	      scrollTop: $(sectionTo).offset().top - scrollY //-54px because fixed navbar top overlays on content
	    }, 800);
	});

	$('.navbar-nav>li>a').on('click', function(){
	    $('.navbar-collapse').collapse('hide');
	});

	$('.mid .primary ul').filter(function(){
	    return $(".primary li").length > 5
	}).addClass('twoColumns');

	$('.mid .secondary ul').filter(function(){
	    return $(".secondary li").length > 5
	}).addClass('twoColumns');

	$('.mid .tertiary ul').filter(function(){
	    return $(".tertiary li").length > 5
	}).addClass('twoColumns');

	$(document).ready(function(){       
	   var scroll_start = 0;
	   var startchange = $('#about');
	   var offset = startchange.offset();

	   if (startchange.length){
		   $(document).scroll(function() { 
		      scroll_start = $(this).scrollTop();
		      if(scroll_start > offset.top - 100) {
		          $(".navbar-inverse").css('background-color', '#4b9eec');
		       } else {
		          $('.navbar-inverse').css('background-color', '#000000');
		       }
		   });
	    }
	});

});
//Scrolling effect....
// var lastScrollTop = 0;
// $(window).on('scroll', function () {
//     var scrollTop = $(window).scrollTop();
// 	console.log(scrollTop);
//     if (scrollTop < 70 && scrollTop > lastScrollTop) { //scroll down
//     	var sectionTo = $(this).attr('about');
//         $('html, body').stop().animate({
// 		      scrollTop: $(sectionTo).offset().top  //-54px because fixed navbar top overlays on content
// 		    }, 500);
        
//     }
//     else if (scrollTop < 780 && scrollTop < lastScrollTop) { //scroll up
//     	var sectionTo = $(this).attr('navtop');
//         $('html, body').stop().animate({
// 		    scrollTop: $(sectionTo).offset().top  //-54px because fixed navbar top overlays on content
// 		}, 100); 
//     }

//   lastScrollTop = scrollTop;
// });