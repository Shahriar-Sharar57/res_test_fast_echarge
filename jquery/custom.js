particlesJS.load('particles-js', 'assets/particles.json', function() {
console.log('callback - particles.js config loaded');
});
$(function(){

// navbar bg when scroll
$(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    var sticky = $(".top");
    if(scrolling >=50){
        sticky.addClass("navColour");
    }
    else{
        sticky.removeClass("navColour");
    }
});
$('body').scrollspy({target: ".navbar", offset:80});
$(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.btn_back_top').fadeIn();
        } else {
            $('.btn_back_top').fadeOut();
        }
    });

    $('.btn_back_top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

});
