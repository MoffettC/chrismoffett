
$('.nav-link, .navbar-brand, .new-button').click(function() { //jQuery slim version does not support animate!
    var sectionTo = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(sectionTo).offset().top
    }, 800);
});