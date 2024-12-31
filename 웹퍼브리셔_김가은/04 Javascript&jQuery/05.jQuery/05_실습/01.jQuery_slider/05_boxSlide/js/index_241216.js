//index.js

$(function () { 

    //초기설정
    $('.cb3 .caption').css('display', 'block');
    
    $('.btn-prev').click(function () { 
        //slide(false);
        slide(0);
    });

    $('.btn-next').click(function () { 
        //slide(true);
        slide(1);
    });

});


// 슬라이드 함수

function slide(direction) { 

    //if else 문
    // direction = true, if문 실행, 다음 이동 
    // direction = false, else문 실행, 이전 이동

    if (direction) {
        //다음 이동
        //alert('다음 케이크 나와라~~~~');

        /* $('.box-wrap').animate({
            left: '-100%' 
        }, 800); */

    } else { 
        //이전 이동
        alert('이전 케이크 나와라~~~~');
    }
    
    
    
    

    //else if문!
}