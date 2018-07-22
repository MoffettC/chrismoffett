
$(document).ready(function() {
	$('body').addClass('loaded');
	
	 $(this).scrollTop(0);
	$('.nav-link, .navbar-brand, .new-button').click(function() { //jQuery slim version does not support animate!
		var scrollY = 54;

		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		 	scrollY = 250;
		}

	    var sectionTo = $(this).attr('href');
	    $('html, body').animate({
	      scrollTop: $(sectionTo).offset().top - scrollY //-54px because fixed navbar top overlays on content
	    }, 800);
	});

//collapse navbar links
	$('.navbar-nav>li>a').on('click', function(){
	    $('.navbar-collapse').collapse('hide');
	});

//skill columns
	$('.skills-section .primary ul').filter(function(){
	    return $(".primary li").length > 5
	}).addClass('twoColumns');

	$('.skills-section .secondary ul').filter(function(){
	    return $(".secondary li").length > 5
	}).addClass('twoColumns');

	$('.skills-section .tertiary ul').filter(function(){
	    return $(".tertiary li").length > 5
	}).addClass('twoColumns');


	// $('.navbar-brand').on('click', function(){
	    if (!hasTouch()) {
	    	document.getElementsByClassName('navbar-brand')[0].className += ' hasHover';
		}
	// });

	function hasTouch() {
	    return 'ontouchstart' in document.documentElement
	           || navigator.maxTouchPoints > 0
	           || navigator.msMaxTouchPoints > 0;
	}

	function watchForHover() {
	    var hasHoverClass = false;
	    var container = document.getElementsByClassName('navbar-brand');
	    var lastTouchTime = 0;

	    function enableHover() {
	        // filter emulated events coming from touch events
	        if (new Date() - lastTouchTime < 500) return;
	        if (hasHoverClass) return;

	        container.className += ' hasHover';
	        hasHoverClass = true;
	    }

	    function disableHover() {
	        if (!hasHoverClass) return;

	        container.className = container.className.replace(' hasHover', '');
	        hasHoverClass = false;
	    }

	    function updateLastTouchTime() {
	        lastTouchTime = new Date();
	    }

	    document.addEventListener('touchstart', updateLastTouchTime, true);
	    document.addEventListener('touchstart', disableHover, true);
	    document.addEventListener('mousemove', enableHover, true);

	    enableHover();
	}

	watchForHover();


//Navbar color change
	// $(document).ready(function(){       
	//    var scroll_start = 0;
	//    var startchange = $('#about');
	//    var offset = startchange.offset();

	//    if (startchange.length){
	// 	   $(document).scroll(function() { 
	// 	      scroll_start = $(this).scrollTop();
	// 	      if(scroll_start > offset.top - 100) {
	// 	          $(".navbar-inverse").css('background-color', '#4b9eec');
	// 	       } else {
	// 	          $('.navbar-inverse').css('background-color', '#000000');
	// 	       }
	// 	   });
	//     }
	// });

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