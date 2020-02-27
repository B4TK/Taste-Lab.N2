var winHeight = window.innerHeight;

$(function(){
 
  var s = $('#header');
  $(window).scroll(function () {
    if ( $(this).scrollTop() > winHeight - 70 ) {
      s.addClass('fixed');
    } else {
      s.removeClass('fixed');
    }
  });
 
});


// #にダブルクォーテーションが必要
$('a[href^="#"]').click(function() {
   var speed = 300;
   var href= $(this).attr("href");
   var target = $(href == "#" || href == "" ? 'html' : href);
   var position = target.offset().top;
   $('body,html').animate({scrollTop:position}, speed, 'swing');
   return false;
});


$(function(){
    $(window).scroll(function (){
        $('.fadeIn').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 150){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
            }
        });
    });
});