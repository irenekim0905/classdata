// icutslide-2.js

$(function(){

    // 이벤트 대상1 - #pager li
    $('#pager li').click(function(){
      //  alert('li 클릭~');

      // 클릭된 li의 인덱스 구하기
      var idx = $(this).index();

      console.log(idx); 


    });

    // 이벤트 대상2 - #pager li a
    $('#pager li a').on('click', function(e){

        // 클릭된 a태그의 기본기능 막기
        e.preventDefault();

        var idx = $(this).parent().index();
       console.log(idx); 

        //구해진 인덱스값을 left 이동시, 곱해지는 값으로 사용!
      /*  $('#gallery').animate({
            marginLeft : -(100*idx) + '%'
        }, 600); */

        //내가 만든 코드1

      /*     $('#gallery').animate({
             marginLeft : -(1200*idx)

           },600);   */

         // 또 다른코드 로 실행법
         
         var imgWidth = $('#gallery img').width();
         console.log(imgWidth); // 1200 px

         $('#gallery').animate({
            left: -(imgWidth * idx)
         }, 600, 'easeInQuad');  // easeIn 효과 적용 easeInQuad , easeOutBounce

         // 클릭된 페이저 디자인 변경하기  easeOutBounce
        $(this).parent().addClass('active').siblings().removeClass('active'); 


    });


});
