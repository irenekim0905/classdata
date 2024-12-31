// banapresso.js 

   $(document).ready(function(){

    var box = $('.box:eq(0), .box:eq(1)');

      box.find('.img-box').animate({
        width: '50%'
      }, 800, function(){
        box.find('.txt-box').fadeIn(600);

      });

   });

   $(window).scroll(function(){

        var scTop = $(this).scrollTop();
        console.log(scTop);

        var winHeight = $(this).height();
        console.log('브라우저 화면의 높잇값: ' +winHeight);

        var gap = Math.ceil(winHeight * 0.9);
        console.log('기준간격: ' + gap);

        /*  수학 객체 메서드를 통해 정수 반환받기
            Math.ceil(값); 소수점 첫째자리에서 무조건 올림 
            Math.floor();  소수전 첫째자리에서 무조건 내림
            Math.round();  소수점 첫째자리에서 반올림
        */
        var box3pos = $('.box').eq(2).offset().top - gap; //1270px - gap
        console.log('3번째 박스가 문서로부터 떨어진 거리: ' +box3pos);

        if (scTop > box3pos) {
            $('.box').eq(2).find('.img-box').animate({
                width: '50%'
            }, 800, function(){
                $(this).next().fadeIn(600);
            });
        }  

        var box4pos = $('.box').eq(3).offset().top - gap;

        if  (scTop > box3pos) {
            $('.box').eq(3).find('.img-box').animate({
                width: '50%'
            }, 800, function(){
                $('.box').eq(3).find('.txt-box').fadeIn(600);
            });
        }  

        // 3번 박스 등장
    /*    if (scTop > 500) { 
            $('.box').eq(2).find('.img-box').animate({
                width: '50%'
            }, 800, function(){
                $('.box').eq(2).find('.txt-box').fadeIn(600);
            });
        }  */

   }); 
   


 

 







