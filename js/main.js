
$('.nav-link, .navbar-brand, .new-button').click(function() { //jQuery slim version does not support animate!
    var sectionTo = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(sectionTo).offset().top -54 //-54px because fixed navbar top overlays on content
    }, 800);
});

$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});