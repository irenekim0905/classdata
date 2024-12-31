// slider.js 

// alert('연결~');

$(document).ready(function () {

    var liHeight = $('.gallery li').height();
    console.log(liHeight); //533

   $('.gallery li').last().prependTo('.gallery'); 
    $('.gallery').css('top', -liHeight); 

    setInterval(function(){

        $('.gallery').animate({
            //top:'-='+533
            top:'-='+ liHeight
        },'slow',function(){
            $('.gallery li').first().appendTo('.gallery');
            $('.gallery').css('top',-liHeight);
        });
    },3000);
  
}); 







