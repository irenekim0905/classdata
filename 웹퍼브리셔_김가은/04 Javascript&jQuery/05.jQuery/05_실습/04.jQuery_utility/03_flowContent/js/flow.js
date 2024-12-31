// flow.js

var autocall; //인터벌을 담을 변수!

$(document).ready(function () {

    // 자동실행
    setInterval(flow, 50); // 흘러가는 속도 조절 = 자동실행 시간으로 조절!

    // 마우스 오버시 멈춤, 아웃시 다시 실행
    $('.flow li').hover(function () {
        //mouweenter
        // 1) 자동실행 멈춤 - 인터벌 지우기
        // 2) .coption 등장

        clearInterval(autocall);

        $(this).find('.caption').animate({
            top: '105%',
            opacity: 1
        },500);

    }, function () {
        //mouseleave
        // 1) 인터벌 재싷행
        // 2) .caption 숨기기

        autocall = setInterval(flow, 30);

        $(this).find('.caption').hide(function() {
            $(this).css({
                top: '50%',
                opacity: 0,
                display: 'block'

            }); 
 
    });

     /* $(this).find('.caption').css({
            top: '50%',
            opacity: 0 
        }); */

    });


});

// 컨텐츠를 왼쪽으로 흐르게 하는 flow 함수

var moveNum = 0; //이동하는 left값을 담을 변수!

function flow() {
    //  console.log('흘러가는 중~~~~');

    moveNum++; //left 이동값을 1씩 증가!

    var boxWidth = $('.flow li').first().width();
    console.log(boxWidth); // 364  

    var boxWidth2 = $('.flow li').first().outerWidth(); // 384 


    // if else문 
    // if else문 이동한 픽셀수(moveNum)가 li 하나의 너비보다 커졌을때 -> 다음을 위한 준비!
    if (moveNum > boxWidth2) {
        // 왼쪽으로 흘러서 사라진 첫번째 li를 .flow의 맨 뒤로 이동!
        // .flow의 li 순서가 변경되었으므로 left값 초기화
        // 동시에 이동값(moveNum) 초기화!
        $('.flow').append($('.flow li').first()).css({
            left: 0
        });

        moveNum = 0;
    } else {

        //moveNum의 값을 left 값으로 적용!
        $('.flow').css({
            left: -moveNum
        });
    }

}

