$(function(){
    'use strict'

    //Trigger nice Scroll
    
    $('html').niceScroll({
       
        cursorwidth:10,
        cursorborder: '1px solid '
    });


    // loading 
$(window).load(function(){
    $(".loading-overlay , .sk-folding-cube ").fadeOut(2000);
})
   //  statistics
$('.counter').counterUp({
    delay: 10,
    time: 1000
});

//scroll to top Button 
var ScrollToTop =  $('.Scroll-to-top');
if ($(window).scrollTop() >= 1000) {
     
    if (ScrollToTop.is(':hidden')){

         ScrollToTop.fadeIn(400);
    }
   

}
else{

  ScrollToTop.fadeOut(400);

}

});

// active .navbar-light .navbar-nav .active
$(' .navbar  li  ').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
})

// Scroll To Element
$('.navbar li a').click(function (e) {

    e.preventDefault();
    $('html, body').animate({ 

     scrollTop : $( "#" + $(this).data('scroll')).offset().top +1

    },1000);

   //  window.console.log( "#" + $(this).data('scroll'));
});



//show color option div
$('.gear-check').click(function(){
    $('.color-option').toggle(500);
})

var colorLi=$('.color-option ul li');
colorLi
.eq(0).css('backgroundColor','#d33').end()
.eq(1).css('backgroundColor','rgb(255, 7, 123)').end()
.eq(2).css('backgroundColor',' rgb(255, 251, 10)').end()
.eq(3).css('backgroundColor','rgb(0, 66, 247)');

colorLi.click(function(){
    $("link[href*='theme']").attr("href",$(this).attr('data-value'));
});
// click on scroll to top TO GO up

$('.Scroll-to-top').click(function (event){
event.preventDefault();
$('html, body').animate({ 

scrollTop : 0

},1000);




});
