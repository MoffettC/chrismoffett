
$('.nav-link, .navbar-brand, .new-button').click(function() { //jQuery slim version does not support animate!
    var sectionTo = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(sectionTo).offset().top -54 //-54px because fixed navbar top overlays on content
    }, 800);
});

$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

// if(screen.width >= 768) {
//     $('.navbar').addClass('navbar-fixed-top');
//     //$('body').css("padding-top", 80);
// } else {
//     $('.navbar').removeClass('navbar-fixed-top navbar-fixed').addClass("navbar-static-top");
//     $('body').css({"padding-top": 0, "margin-top": 0});
// }