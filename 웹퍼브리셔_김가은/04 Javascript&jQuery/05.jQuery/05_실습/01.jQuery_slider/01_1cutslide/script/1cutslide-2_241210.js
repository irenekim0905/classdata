// 1cutslide-2.js

$(function () { 

    //이벤트 대상1 - #pager li
    /* $('#pager li').click(function () {
        //alert('li클릭~~~');

        //클릭된 li의 인덱스 구하기
        var idx = $(this).index();
        console.log(idx);
    }); */


    //이벤트 대상2 - #pager li a
    $('#pager li a').on('click', function (e) {
        
        //클릭된 a태그의 기본기능 막기!
        e.preventDefault();

        var idx = $(this).parent().index();
        console.log(idx);

        //구해진 인덱스값을 left 이동 시, 곱해지는 값으로 사용!
        /* $('#gallery').animate({
            marginLeft : -(100*idx) + '%'
        }, 600); */

        //내가 만든 코드! (left 속성, px값 사용하여 이동해 보기)
        var imgWidth = $('#gallery img').width();
        console.log(imgWidth); //1200 (px)

        $('#gallery').animate({
            left: -(imgWidth * idx)
        }, 600, 'easeOutBounce');

        //클릭된 페이저 디자인 변경하기
        $(this).parent().addClass('active').siblings().removeClass('active');

    });

});