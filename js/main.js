
$('.nav-link, .navbar-brand, .new-button').click(function() { //jQuery slim version does not support animate!
    var sectionTo = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(sectionTo).offset().top  //-54px because fixed navbar top overlays on content
    }, 800);
});

$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
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