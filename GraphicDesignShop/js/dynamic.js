$(document).ready(function(){

    // **************************
    // Carousel Slider
    // **************************

    var $curStatus = 0;
    var $slider = $(".owl-theme");
    var slidecount = $slider.children().length;
    var animationTime = 800;

    var current = 0;
    var $slider1 = $(".testimonial-slider");



    // Buttons
    var $prev = $("#prev");
    var $next = $("#next");
    var $forward = $("#forward");
    var $backward = $("#backward");

   

    $next.click(function(evt){
        if($curStatus < 3){
            $slider.animate({
                marginLeft: '-=312px'},animationTime
            );
            $curStatus++;

        }else{
            $slider.animate({
                marginLeft:'0px'
            },animationTime);
            $curStatus = 0;
        }
            evt.preventDefault();
            
    });

    $forward.click(function(evte){
        if(current < 2){
            $slider1.animate({
                marginLeft: '-=1000px'},animationTime
            );
            current++;

        }else{
            $slider1.animate({
                marginLeft:'0px'
            },animationTime);
            current = 0;
        }
            evte.preventDefault();
            
    });



    // Previous Button

    $prev.click(function(evt){
        if($curStatus > 0){
            $slider.animate({
                marginLeft: '+=312px'},animationTime
            );
            $curStatus--;
        }else{

            $curStatus = 0;
        }
            evt.preventDefault();
            
    });


    $backward.click(function(ev){
        if(current > 0){
            $slider1.animate({
                marginLeft: '+=1000px'},animationTime
            );
            current--;
        }else{

            current = 0;
        }
            ev.preventDefault();
            
    });




    // **************************
    // Carousel Slider End
    // **************************

    // **************************
    // Panels Section trigger
    // **************************



  });