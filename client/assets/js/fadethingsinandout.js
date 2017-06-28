$(".aboutme").hide();
$(window).scroll(function(){
      if($(window).scrollTop()>730){
         $(".aboutme").fadeIn();
      }else{
         $(".aboutme").fadeOut();
      }
});

$(".about").hide();
$(window).scroll(function(){
      if($(window).scrollTop()>730){
         $(".about").fadeIn();
      }else{
         $(".about").fadeOut();
      }
});
