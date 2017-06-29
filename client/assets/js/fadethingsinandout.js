$(".aboutme").hide();
$(window).scroll(function(){
      if($(window).scrollTop()>740){
         $(".aboutme").fadeIn();
      }else{
         $(".aboutme").fadeOut();
      }
});

$(".about").hide();
$(window).scroll(function(){
      if($(window).scrollTop()>740){
         $(".about").fadeIn();
      }else{
         $(".about").fadeOut();
      }
});

$(".skills").hide();
$(window).scroll(function(){
      if($(window).scrollTop()>3400){
         $(".skills").delay(20).fadeIn();
      }else{
         $(".skills").delay(20).fadeOut();
      }
});
